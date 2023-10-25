from flask import Flask, render_template, session

app = Flask(__name__)

app.secret_key="password"

@app.route('/')
def index():
    session['user'] = 'Cool person'
    return "hello"

@app.route('/html')
def html_page():
    return render_template('index.html')

@app.route('/user/new')
def user_form():
    return render_template (form.html)

@app.route('/user', methods = ['POST'])
def create_user():
    print('this is the form data:', request.form)


if __name__ == "__main__":
    app.run(debug=True)
