from flask import Flask, render_template, request, redirect, session
from flask_app.models.car import Car
from flask_app.models.user import User
from flask_app import app

@app.route('/car/new')
def car_register():
    return render_template('car_register.html')

@app.route('/car', methods=['POST'])
def submit_car():
    data = {
        "make":request.form['make'],
        "model":request.form['model'],
        "year":request.form['year'],
        "price":request.form['price'],
        "description":request.form['description'],
        "user_id":session['user_id']
    }
    Car.save(data)
    return redirect('/dashboard')

@app.route('/car/<int:id>')
def one_car(id):
    data = {
        "id":id
    }
    one_car = Car.get_car_by_id(data)
    return render_template('show.html', car=one_car)

@app.route('/car/<int:id>/edit')
def car_edit_form(id):
    data = {
        "id":id
    }
    car = Car.get_car_by_id(data)
    return render_template('edit_form.html',car=car)

@app.route('/car/update', methods=['POST'])
def car_update():
    data = {
        "id":request.form['id'],
        "make":request.form['make'],
        "model":request.form['model'],
        "year":request.form['year'],
        "price":request.form['price'],
        "description":request.form['description']
    }
    Car.update(data)
    return redirect('/dashboard')

@app.route("/car/<int:id>/delete")
def delete_car(id):
    data = {
        "id":id
    }
    Car.delete(data)
    return redirect('/dashboard')


@app.route("/purchase")
def purchase(id):
    data = {
        "id":id
    }
    Car.purchase(data)
    return redirect('/dashboard')

