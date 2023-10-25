from flask import Flask, flash, session

app = Flask(__name__)
app.secret_key = "cellar door"
