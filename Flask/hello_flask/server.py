#1. create a folder for your project
#2 create a virtual environment using the pipenv command pipenv install flask
#2 pipenv shell turns on the virtual environment or shell
#4. pip list (check to make sure that our dependencies are installed)
#5 server.py that shit
#6 python server.py eventually



from flask import Flask, render_template  # Import Flask to allow us to create our app


app = Flask(__name__)    # Create a new instance of the Flask class called "app"


@app.route('/')          # The "@" decorator associates this route with the function immediately following
def index():
    return render_template("index.html")  # Return the string 'Hello World!' as a response

@app.route('/success')
def success():
    return "Success!"

@app.route('/hello/<string:name>/<int:num>')
def hello(name, num):
    #return f"Hello {name * num}."
    return render_template("hello.html", name = name, num = num)



@app.route('/lists')
def render_lists():
    # Soon enough, we'll get data from a database, but for now, we're hard coding data
    student_info = [
        {'name' : 'Michael', 'age' : 35},
        {'name' : 'John', 'age' : 30 },
        {'name' : 'Mark', 'age' : 25},
        {'name' : 'KB', 'age' : 27}
    ]
    return render_template("lists.html", random_numbers = [3,1,5], students = student_info)






if __name__=="__main__":   # Ensure this file is being run directly and not from a different module
    app.run(debug=True)    # Run the app in debug mode.
