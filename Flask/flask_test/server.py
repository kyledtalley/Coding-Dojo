from flask_app import app
from flask_app.controller import users, books

if __name__ == "__main__":
    app.run(debug = True)
