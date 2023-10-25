from flask import Flask, render_template, request, redirect, session, flash
from flask_app.models.magazine import Magazine
from flask_app.models.user import User
from flask_app import app

@app.route('/magazine/new')
def magazine_form():
    return render_template('magazine_form.html')


# @app.route('/dashboard')
# def dashboard(cls):
#     if 'user_id' not in session:
#         flash('Please log in')
#         return redirect('/')
#     query = "SELECT * FROM magazines JOIN users ON magazines.users_id = user.id"

#     results = connectToMySQL('subscriptions').query_db(query)
#     print(results)

#     all_magazines = []

#     if results:
#         for row in results:
#             magazine = cls(row)
#             # convert user data from row into class object
#             data = {
#                 'id':row['users.id'],
#                 'first_name':row['first_name'],
#                 'last_name':row['last_name'],
#                 'email':row['email'],
#                 'password':row['password'],
#                 'created_at':row['users.created_at'],
#                 'updated_at':row['users.updated_at']
#             }
#             magazine.creator = User.User(data)
#             all_magazines.append(magazine)

#     return all_magazines

@app.route('/dashboard')
def dashboard():
    if 'user_id' not in session:
        flash('Please log in')
        return redirect('/')
    user = User.get_one_by_id({"id":session['user_id']})
    magazines = Magazine.get_magazines_w_creator()
    return render_template('dashboard.html', user = user, magazines = magazines)


@app.route('/show')
def show_users():
    if 'user_id' not in session:
        flash('Please log in')
        return redirect('/')
    users = User.get_all()
    user = User.get_by_id({"id":session['user_id']})
    return render_template("results.html", users = users, user = user)

@app.route('/magazine', methods=['POST'])
def submit_magazine():
    data = {
        "title":request.form['title'],
        "description": request.form['description'],
        "users_id":session['user_id']
    }
    Magazine.save(data)
    return redirect('/dashboard')

@app.route('/magazine/<int:id>')
def one_magazine(id):
    data = {
        "id":id
    }
    one_magazine = Magazine.get_magazine_by_id(data)
    return render_template('show.html', magazine=one_magazine)

# get one magazine and render edit page with form
@app.route('/magazine/<int:id>/edit')
def magazine_edit_form(id):
    data = {
        "id":id
    }
    magazine = Magazine.get_magazine_by_id(data)

    magazines = Magazine.get_magazines_w_creator()
    return render_template('edit.html',magazine=magazine, magazines = magazines)

@app.route('/magazine/update', methods=['POST'])
def magazine_update():
    data = {
        "id":request.form['id'],
        "title": request.form['title'],
        "description": request.form['description']
    }
    Magazine.update(data)
    return redirect('/dashboard')

@app.route("/magazine/<int:id>/delete")
def delete_magazine(id):
    data = {
        "id":id
    }
    Magazine.delete(data)
    return redirect('/dashboard')

# @app.route('/order_history')
# def change_this_later(data):
#     return render_template('order_history.html', magazine = Magazine.get_magazine_by_id)

# @app.route('/add_like/<int:order.id>')
# def add_like(order_id):
#     data = {
#         'order_id': order_id,
#         'user_id': session['user_id']
#     }
#     Order.create_like(data)
#     return redirect('/order_history')


# @app.route('/delete_like/<int:order.id>')
# def delete_like(order_id):
#     data = {
#         'order_id': order_id,
#         'user_id': session['user_id']
#     }
#     Order.delete_like(data)
#     return redirect('/order_history')
