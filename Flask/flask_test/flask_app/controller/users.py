from flask import Flask, render_template, request, redirect, session, flash
from flask_app.models.user import User
from flask_app import app
from flask_bcrypt import Bcrypt
bcrypt = Bcrypt(app)



@app.route('/dashboard', method = ['POST'])
def dashboard():
    if 'user_id' not in session:
        flash('Please log in')
        return redirect('/')
    users = User.get_all()
    return render_template('index.html',users=users)


@app.route('/register')
def register():
    if request.form['password'] != request.form['confirm_pw']:
        flash('Both passwords do not match. Do not pass go. Do not collect $200.')
        return redirect('/')

    pw_hash= bcrypt.generate_password_hash(request.form['password'])
    print(pw_hash)

    data = {
        "first_name": request.form['first_name'],
        "last_name": request.form['last_name'],
        "email": request.form['email'],
        "password": request.form['password']
    }


    user_id = User.save(data)
    session['user_id']=user_id
    return redirect('/dashboard')


@app.route('/user/new')
def user_form():
    return render_template('form.html')

@app.route('/user', methods = ['POST'])
def create_user():
    print ('this is the form data:', request.form)

    if not User.validate_user(request.form):
        return redirect("/user/new/")

    data = {
        "username":request.form['username'],
        "email":request.form['email'],
        "age":request.form['age'],
        "country":request.form['country']
    }
    User.save(data)
    return redirect('/html')


@app.route('/user/<int:id>')
def one_user(id):
    data = {
        "id": id
    }
    user = User.get_one_by_id(id)
    return render_template('one_user.html', user=user)


@app.route('/user/<int:id>/edit')
def edit_form(id):
    data = {
        "id" : id
    }
    user = User.get_one_by_id(data)
    return render_template('update_form.html', user = user)

@app.route('/user/<int:id>', methods= ['POST'])
def update(id):
    data = {
        "username":request.form['username'],
        "email":request.form['email'],
        "age":request.form['age'],
        "country":request.form['country']
    }
    User.update(data)
    return redirect('/html')

@app.route('/user/<int:id>/delete')
def delete(id):
     data = {
          "id":id
     }
     User.delete(data)
     return redirect('/html')



