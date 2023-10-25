from flask import Flask, render_template
app = Flask(__name__)

@app.route('/')
def index():
    return "Home page"

@app.route('/play/<int:num>')
def play(num):
    return render_template('index.html', num = num)

@app.route('/play/<int:num>/<str:color>')
def play2(num, color):
    return render_template('index.html', num = num, color = color)

if __name__ == "__main__":
    app.run(debug=True)
