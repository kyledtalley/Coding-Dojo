from flask import Flask, render_template, redirect, request, session

app = Flask(__name__)
app.secret_key = 'yo123'


@app.route('/')
def create_user():
    if "count" not in session:
        session["count"] = 0
    # else:
    #     session["count"] += 1
    return render_template("index.html")

@app.route('/plus_one')
def add():
    session['count']+= 1
    return redirect ('/')


@app.route('/reset')
def reset():
    session['count'] = 0
    return redirect ('/')

if __name__ == "__main__":
    app.run(debug=True)
