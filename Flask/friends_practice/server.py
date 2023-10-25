from flask import Flask, render_template, request, redirect
from friend import Friend

app=Friend(__name__)

@app.route('/')
def index():
    Friend.get_all()
    all_friends = Friend.get_all()
    return render_template("index.html",all_friends = all_friends)


@app.route('/friends/<int:friend_id>')
def show(friend_id):
    one_friend = Friend.get_one(friend_id)
    return render_template("show.html", one_friend=one_friend)

@app.route('/create_friend', methods=['POST'])
def create_friend():
    data = {
        "fname": request.form['fname'],
        "lname": request.form["lname"],
        "occ": request.form["occ"]
    }
    Friend.save(data)
    return redirect('/')


if __name__ == "__main__":
    app.run(debug=True)
