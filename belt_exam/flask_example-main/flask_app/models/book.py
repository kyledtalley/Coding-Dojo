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
        self.favorited_by = []

    @classmethod
    def get_books_w_creator(cls):
        query = "SELECT * FROM books JOIN users ON books.user_id = users.id"

        results = connectToMySQL('test-erd').query_db(query)
        print(results)

        all_books = []

        if results:
            for row in results:
                # convert book data from row into class object
                book = cls(row)
                # convert user data from row into class object
                data = {
                    'id':row['users.id'],
                    'first_name':row['first_name'],
                    'last_name':row['last_name'],
                    'email':row['email'],
                    'password':row['password'],
                    'created_at':row['users.created_at'],
                    'updated_at':row['users.updated_at']
                }
                book.creator = user.User(data)
                all_books.append(book)

        return all_books
    
    @classmethod
    def save(cls,data):
        query = "INSERT INTO books (title,author,num_pages,user_id) VALUES (%(title)s,%(author)s,%(num_pages)s,%(user_id)s)"
        return connectToMySQL('test-erd').query_db(query,data)
    
    @classmethod
    def get_book_by_id(cls,data):
        query = "SELECT * FROM books WHERE id = %(id)s;"
        result = connectToMySQL('test-erd').query_db(query,data)
        return cls(result[0]) 
    
    @classmethod
    def update(cls,data):
        query = "UPDATE books SET title=%(title)s,author=%(author)s,num_pages=%(num_pages)s WHERE id = %(id)s"
        return connectToMySQL('test-erd').query_db(query,data)
    
    @classmethod
    def delete(cls,data):
        query = "DELETE FROM books WHERE id = %(id)s"
        return connectToMySQL('test-erd').query_db(query,data)
    
    @classmethod
    def add_favorite(cls,data):
        query = "INSERT INTO favorites (user_id,book_id) VALUES (%(user_id)s,%(book_id)s)"
        return connectToMySQL('test-erd').query_db(query,data)
    
 

    query = "SELECT * FROM users JOIN favorites ON users.id = favorites.user_id JOIN books ON favorites.book_id = books.id WHERE users.id = %(id)s"

"select * FROM books join favorites on books.id= favorites.books_id join users on favorites.users_id = users.id where books.id = 3;"

"select * from favorites join users on favorites.users_id = users.id where favorites.books_id = 3;"













