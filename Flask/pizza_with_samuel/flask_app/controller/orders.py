from flask import Flask, render_template, redirect, session, request
from flask_app import app


@app.route('/')
def index():
    return render_template('index.html')

@app.route('/placeorder', methods=['POST'])
def place_order():
    pizza_size = request.form['pizza_size']
    if pizza_size == 'small':
        price = 10.00
    elif pizza_size == 'medium':
        price = 12.00
    else:
        price = 14.00

    total =price + (2.00 *len(request.form.getlist("toppings")))
    session['total'] = format(total,"2f")
    print(session['total'])

    session['delivery_method'] = request.form['delivery_method']
    return redirect('/confirmation')

@app.route('/confirmation')
def confirmation():
    return render_template('result.html')
