from flask import Flask, render_template, request, redirect, session
app = Flask(__name__)
app.secret_key = "cellar door"


@app.route('/')
def index():
    return render_template("index.html")


@app.route('/users', methods=['POST'])
def create_user():
    print("Got Post Info")
    # Here we add two properties to session to store the name and email
    session['username'] = request.form['name']
    session['useremail'] = request.form['email']
    print(request.form)  # Never render a template on a POST request.

    return redirect('/show')  # Instead we will redirect to our index route.


@app.route('/show')
def show_user():
    print(request.form)
    return render_template('show.html', name_on_template=session['username'],
                            email_on_template=session['useremail'])




if __name__ == "__main__":
    app.run(debug=True)
