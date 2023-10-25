from flask import Flask, render_template, request, redirect, session
from flask_app.models.book import Book
from flask_app import app

@app.route('/books')
def all_books():
    books = Book.get_books_w_creator()
    return render_template('book_list.html', books=books)
