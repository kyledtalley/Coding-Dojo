from flask_app.config.mysqlconnection import connectToMySQL
from flask_app.models import user

class Book:
    def __init__(self,data):
        self.id = data['id']
        self.title = data['title']
        self.author = data['author']
        self.num_pages = data['num_pages']
        self.user_id = data['user_id']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
        self.creator = None

    @classmethod
    def get_books_w_creator(cls):
        query = "SELECT * FROM books JOIN users ON books.user_id = users.id "

        results = connectToMySQL('flask_text').query_db(query)

        all_books= []

        if results:
            for row in results:
                book = cls(row)
                book.creator = user.User(row)
                all_books.append(book)
        return all_books
