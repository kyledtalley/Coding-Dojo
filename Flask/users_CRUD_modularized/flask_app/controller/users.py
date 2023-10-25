from flask import Flask, render_template, request, redirect, session, flash
from flask_app import app
from flask_app.models.user import User


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/create',methods=['POST'])
def create():

    print('this is the form data:', request.form)

    if not User.validate_user(request.form):
        return redirect('/')

    data = {
        "username": request.form['username'],
        "email":request.form['email'],
        "age": request.form['age'],
        "country": request.form['country']
    }



    User.save(data)
    return redirect('/show')


@app.route('/show')
def show_users():
    return render_template("results.html", users = User.get_all())
