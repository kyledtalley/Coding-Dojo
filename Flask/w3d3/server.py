from flask import Flask, render_template, request, redirect, session

from models.user import User

app = Flask(__name__)
app.secret_key= "soggy waffle"


@app.route('/')
def main():
    return render_template('form.html')



@app.route('/show')
def html_page():
    # session['user'] = 'Cool Person'
    users = User.get_all()
    print(users)
    return render_template('index.html', users=users)



@app.route('/user', methods = ['POST'])
def create_user():
    print ('this is the form data:', request.form)
    data = {
        "username":request.form['username'],
        "email":request.form['email'],
        "age":request.form['age'],
        "country":request.form['country']
    }
    User.save(data)
    return redirect('/show')





if __name__=="__main__":   # Ensure this file is being run directly and not from a different module
    app.run(debug=True)    # Run the app in debug mode.
