
from flask import Flask, render_template, redirect, flash

app = Flask(__name__)
app.secret_key = "cellar door"
