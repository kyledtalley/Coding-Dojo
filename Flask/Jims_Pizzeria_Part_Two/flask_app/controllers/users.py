from flask_app import app
from flask import render_template, redirect, request, session, flash
from ..models.user import User


@app.route('/')
def redirect_home():
    return redirect('/home')

@app.route('/home')
def index():
    return render_template('home.html')

@app.route('/registration')
def register():
    return render_template('register.html')

@app.route('/login', methods=['POST'])
def login_user():
    user = User.get_one_by_email(request.form)
    session['user_id'] = user.id
    return redirect('/order')

@app.route('/register', methods=['POST'])
def register_user():
    # session['user_id'] = User.create_user(request.form)
    if not User.registration_validator(request.form):
        return redirect('/registration')
    User.create_user(request.form)
    return redirect('/order')

@app.route('/edit_profile/<int:id>')
def edit_profile(id):
    data={
        'id': id
    }
    return render_template('edit_profile.html', user=User.get_one(data))

@app.route('/update/<int:id>', methods=['POST'])
def update(id):
    data = {
        'id': id
    }
    data |= request.form  #Merging request.form into data dictionary
    User.update_user(data)
    return redirect(f'/edit_profile/{id}')

@app.route('/delete_account/<int:user_id>')
def delete_user(user_id):
    data = {
        'id': user_id
    }
    User.destroy(data)
    return redirect('/home')

@app.route('/logout')
def logout():
    session.clear()
    return redirect('/home')

