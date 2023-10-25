from flask import Flask, render_template, request, redirect
app = Flask(__name__)

from friend import Friend

#READ
@app.route('/')
def index():
    #CALLING THE GET_ALL METHOD FROM THE FRIENDS.PY
    friends = Friend.get_all()
    #PASSING ALL FRIENDS TO OUR TEMPLATE SO WE CAN DISPLAY THEM THERE
    return render_template("index.html", friends=friends)

#READ
@app.route('/friends/<int:friend_id>')
def show(friend_id):
    friend = Friend.get_one(friend_id)
    return render_template("show.html", friend = friend)

#CREATE
@app.route("/friends/create", methods=['POST'])
def create():
    Friend.save(request.form)
    return redirect("/")


#UPDATE
@app.route("/friends/update", methods=['POST'])
def update():
    Friend.update(request.form)
    return redirect("/")

@app.route("/friends/delete/<int:friend_id>")
def delete(friend_id):
    Friend.delete(friend_id)
    return redirect("/")

if __name__ == "__main__":
    app.run(debug=True)
