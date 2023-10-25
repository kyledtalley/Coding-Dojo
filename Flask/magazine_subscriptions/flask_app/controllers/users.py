# import flask so we can use it
from flask import Flask, render_template, request, redirect, session, flash
from flask_app.models.user import User
from flask_app.models.magazine import Magazine
from flask_app import app
from flask_bcrypt import Bcrypt
bcrypt = Bcrypt(app)

@app.route('/')
def index():
    return render_template('login.html')

@app.route('/register', methods=['POST'])
def register():
    # confirm password and confirm password fields match
    if request.form['password'] != request.form['confirm_pw']:
        flash('Password does not match confirmed password.')
        return redirect('/')
    data = {"email": request.form['email']}
    user_in_db = User.get_one_by_email(data)
    if user_in_db:
        flash("Email already exists!")
        return redirect('/')

    pw_hash = bcrypt.generate_password_hash(request.form['password'])
    print(pw_hash)

    data = {
        "first_name": request.form['first_name'],
        "last_name" : request.form['last_name'],
        "email" : request.form['email'],
        "password" : pw_hash,
    }

    user_id = User.save(data)
    session['user_id'] = user_id
    return redirect("/dashboard")

@app.route('/login', methods=['POST'])
def login():
    data = {"email": request.form['email']}
    user_in_db = User.get_one_by_email(data)
    if not user_in_db:
        flash("Invalid Email/Password")
        return redirect('/')
    if not bcrypt.check_password_hash(user_in_db.password,request.form['password']):
        flash("Invalid Email/Password")
        return redirect('/')
    session['user_id'] = user_in_db.id
    return redirect('/dashboard')

@app.route('/logout')
def logout():
    session.clear()
    return redirect('/')

# @app.route('/dashboard')
# def dashboard():
#     return render_template("dashboard.html", all_users = User.get_one_by_id({"id":session['user_id']}), magazines = User.dashboard())

# @app.route('/dashboard')
# def dashboard():
#     if 'user_id' not in session:
#         flash('Please log in')
#         return redirect('/')
#     # users = User.get_all()
#     magazines = User.dashboard()
#     user = User.get_one_by_id({"id":session['user_id']})
#     return render_template('dashboard.html', magazines=magazines, user=user)

@app.route('/user_list')
def user_list():
    users = User.get_users_w_magazines()
    return render_template('user_list.html',users=users)

@app.route('/update/<int:id>/user',methods=['POST'])
def update():
    data = {
        "first_name":request.form['first_name'],
        "last_name": request.form['last_name']
    }
    Magazine.update(data)
    return redirect('/dashboard')
