from flask import Flask, render_template, request, redirect, session, flash
from flask_app.models.tree import Tree
from flask_app.models.user import User
from flask_app import app

@app.route('/tree/new')
def tree_form():
    return render_template('tree_form.html')

@app.route('/tree', methods=['POST'])
def submit_tree():
    data = {
        "species":request.form['species'],
        "location":request.form['location'],
        "date_planted":request.form["date_planted"],
        "users_id":session['users_id']
    }
    if not Tree.validate_tree(request.form):
        return redirect('/')
    Tree.save(data)
    return redirect('/dashboard')

@app.route('/tree/<int:id>')
def one_tree(id):
    data = {
        "id":id
    }
    one_tree = Tree.get_tree_by_id(data)
    users_who_favorited = User.get_all_users_who_favorited({"id":id})
    return render_template('show.html', tree=one_tree, users=users_who_favorited)

# get one tree and render edit page with form
@app.route('/tree/<int:id>/edit')
def tree_edit_form(id):
    data = {
        "id":id
    }
    tree = Tree.get_tree_by_id(data)
    return render_template('edit_form.html',tree=tree)

@app.route('/tree/update', methods=['POST'])
def tree_update():
    data = {
        "id":request.form['id'],
        "species":request.form['species'],
        "location":request.form['location']
    }
    Tree.update(data)
    return redirect('/dashboard')

@app.route("/tree/<int:id>/delete")
def delete_tree(id):
    data = {
        "id":id
    }
    Tree.delete(data)
    return redirect('/dashboard')

@app.route("/favorite/<int:id>")
def favorite_tree(id):
    data = {
        "users_id": session['users_id'],
        "tree_id": id
    }
    Tree.add_favorite(data)
    return redirect('/dashboard')











