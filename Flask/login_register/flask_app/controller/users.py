from flask import Flask, render_template, request, redirect, session, flash
from flask_app import app
from flask_app.models.user import User
from flask_bcrypt import Bcrypt
bcrypt = Bcrypt(app)

@app.route('/')
def index():
    return render_template('index.html')


@app.route('/create',methods=['POST'])
def create():

    if request.form['password'] != request.form['confirm_pw']:
        flash("Passwords do not match!")
        return redirect('/')
    data = {"email": request.form['email']}
    user_in_db = User.get_by_email(data)
    if user_in_db:
        flash("Email already exists!")
        return redirect('/')

    pw_hash = bcrypt.generate_password_hash(request.form['password'])
    print(pw_hash)
    data = {
        "email": request.form['email'],
        "username": request.form['username'],
        "password": pw_hash
    }

    user_id = User.save(data)
    session['user_id'] = user_id

    return redirect('/show')


@app.route('/login',methods = ['POST'])
def login():
    data = {"email": request.form["email"]}
    user_in_db = User.get_by_email(data)
    if not user_in_db:
        flash("Invalid Email/Password")
        return redirect('/')

    if not bcrypt.check_password_hash(user_in_db.password, request.form['password']):
        flash("Invalid Email/Password")
        return redirect ('/')

    session['user_id'] = user_in_db.id
    return redirect('/show')

@app.route('/show')
def show_users():
    if 'user_id' not in session:
        flash('Please log in')
        return redirect('/')
    users = User.get_all()
    user = User.get_by_id({"id":session['user_id']})
    return render_template("results.html", users = users, user = user)

@app.route('/logout')
def logout():
    session.clear()
    return redirect('/')
