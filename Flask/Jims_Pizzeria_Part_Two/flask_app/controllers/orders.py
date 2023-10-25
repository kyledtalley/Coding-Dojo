from flask import Flask
from flask import render_template, redirect,session, request
from flask_app import app
from ..models.user import User
from ..models.order import Order
import json

@app.route('/order')
def order():
    data={
        'id': session['user_id']
    }
    return render_template('order.html', user= User.get_one(data))

@app.route('/place_order', methods=['POST'])
def place_order():
    
    pizza_size = request.form['pizza_size']
    if pizza_size == 'Small':
        price = 10.00
    elif pizza_size == "Medium":
        price = 12.00
    else:
        price = 14.00
    
    #request.form.getlist("toppings") allows us to get all the toppings as a list
    total= price + (2.00*len(request.form.getlist("toppings")))
    total = format(total,".2f") # was missing the period before the 2f
    
    
    json_string_list = json.dumps(request.form.getlist("toppings"))
    data={
        'pizza_size': request.form['pizza_size'],
        'toppings': json_string_list,
        'delivery_method': request.form['delivery_method'],
        'total': total,
        'user_id': session['user_id'],
    }
    
    order_id=Order.create_order(data)
    
    return redirect(f'/confirmation/{order_id}')

@app.route('/confirmation/<int:id>')
def confirmation(id):
    data={
        'id':id
    }
    
    return render_template('order_confirmation.html', order = Order.order_w_creator(data))