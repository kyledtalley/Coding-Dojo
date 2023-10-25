from flask_app import app
from flask import Flask, render_template, request, redirect, session, flash
from flask_app.models.user import User
from flask_app.models.recipe import Recipe
# from flask_app.models.recipe import Recipe
from flask_bcrypt import Bcrypt
bcrypt = Bcrypt(app)


@app.route('/')
def index():
    return render_template('/index.html')

@app.route('/register_user',methods=['POST'])
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
        "first_name" : request.form['first_name'],
        "last_name": request.form['last_name'],
        "email": request.form['email'],
        "password": pw_hash
    }

    user_id = User.save(data)
    session['user_id'] = user_id

    return redirect('/dashboard')


@app.route('/create_recipe',methods=['POST'])
def recipe_create():
    data = {
        "name": request.form['name'],
        "under":request.form['under'],
        "user_id":session['user_id']
    }
    Recipe.save(data)
    users = User.get_all()
    user = User.get_by_id({"id":session['user_id']})

    return render_template("dashboard.html", users = users, user = user)

@app.route('/login', methods = ['POST'])
def login():
    data = {"email" : request.form ['email']}
    user_in_db = User.get_by_email(data)#Maybe not getting enough data to pass into session for dashboard purposes
    if not user_in_db:
        flash("Invalid Email/Password")
        return redirect('/')

    if not bcrypt.check_password_hash(user_in_db.password, request.form['password']):
        flash("Invalid Email/Password")
        return redirect('/')

    session['user_id'] = user_in_db.id
    return redirect('/dashboard')


@app.route('/recipe_maker')
def recipe_maker():
    return render_template('register_recipe.html')
# @app.route('/dashboard')
# def dashboard():
#     return render_template('dashboard.html', all_recipes = User.get_all_together())

@app.route('/dashboard')
def dashboard():
    if 'user_id' not in session:
        flash('Please log in')
        return redirect('/')
    recipes = Recipe.get_recipes_w_creator()
    user = User.get_by_id({"id":session['user_id']})

    return render_template("dashboard.html", recipes = recipes, user = user)




    # return render_template('dashboard.html',user = session['user_id'], users = User.get_all())

# @app.route('/recipe/<int:id>/edit')
# def edit_form(id):
#     data = {
#         "id": id
#     }
#     recipe = Recipe.get_by_id(data)
#     return render_template('edit_form.html', recipe = recipe)

# @app.route('/recipe/update', methods = ['POST'])
# def update():
#     data = {
#         "id": request.form['id'],
#         "under": request.form['under'],
#         "name": request.form['name'],
#         "posted_by": request.form['posted_by']

#     }
#     Recipe.update()
#     return redirect('/dashboard')


# FOR DASHBOARD:
# {% if session['user_id'] == {{user.creator.id}}:%}
#         <a href="/recipe/edit/{{recipe.id}}">Edit</a>
#         <a href="/recipe/delete/{{recipe.id}}">Delete</a>
#     {%endif%}

#         <!-- <table>
#             <thead><tr>
#                 <th>{{Example}}</th>
#                 <th>Example</th>
#                 <th>Example</th>
#             </tr></thead>
#         </table> -->


@app.route('/logout')
def logout():
    session.clear()
    return redirect('/')
