
from flask_app import app
from flask import render_template, redirect, request, session
from flask_app.models.friend import Friend

@app.route("/")
def index():
    # call the get all classmethod to get all friends
    # friends = Friend.get_all()
    # print(friends)
    return render_template("index.html")

@app.route('/create_friend', methods=["POST"])
def create_friend():
    # First we make a data dictionary from our request.form coming from our template.
    # The keys in data need to line up exactly with the variables in our query string.
    data = {
        "fname": request.form["fname"],
        "lname": request.form["lname"],
        "occ": request.form["occ"]
    }
    # We pass the data dictionary into the save method from the Friend class.
    Friend.save(data)

    # Don't forget to redirect after saving to the database.
    return redirect ('/show')
# all_friends = Friend.get_all()

@app.route('/show')
def show():
    results = Friend.get_all()
    print(results)
    return render_template("show.html", friends= results)

@app.route('/friends/update', methods=['POST'])
def update():
    Friend.update(request.form)
    return redirect('/show')

@app.route('/user/<int:id>/delete')
def delete(id):
     data = {
          "id":id
     }
     Friend.delete(data)
     return redirect('/show')
