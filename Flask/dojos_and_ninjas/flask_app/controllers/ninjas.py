from flask import Flask, render_template, request, redirect, session, flash
from flask_app import app
from flask_app.models.ninja import Ninja

@app.route('/')
def index():
    return render_template('form.html')


@app.route('/create',methods=['POST'])
def create():
    data = {
        "dojo_id": request.form['dojo_id'],
        "first_name":request.form['first_name'],
        "last_name": request.form['last_name'],
        "age":request.form['age']
    }

    # if not Ninja.validate_ninja(request.form):
    #     return redirect('/')

    Ninja.save(data)
    return redirect('/ninjas')

@app.route('/ninjas')
def show_ninjas():
    return render_template("results.html", all_ninjas = Ninja.get_all())

@app.route('/show/<int:ninja_id>')
def detail_page(ninja_id):

    data = {
        'id': ninja_id
    }
    Ninja.get_one(data)
    return render_template("details.html", ninja = Ninja.get_one(data))

@app.route('/edit/<int:ninja_id>')
def edit_page(ninja_id):
    data = {
        'id' : ninja_id
    }
    return render_template ("edit.html", ninja = Ninja.get_one(data))

@app.route('/update/<int:ninja_id>', methods = ['POST'])
def update_page(ninja_id):
    data = {
        'id': ninja_id,
        'name': request.form['name'],
        'dojo_id': request.form['dojo_id'],
        'first_name': request.form['first_name'],
        'last_name': request.form['last_name'],
        'age': request.form['age']
    }
    Ninja.update(data)
    return render_template("details.html", ninja = Ninja.get_one(data))

@app.route('/delete/<int:ninja_id>')
def kill(ninja_id):
    data = {
        'id': ninja_id
    }
    Ninja.delete(data)
    return redirect ('/ninjas')
