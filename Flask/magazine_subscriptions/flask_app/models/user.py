from flask_app.config.mysqlconnection import connectToMySQL
from flask_app.models import magazine
from flask import flash

class User:
    def __init__(self, data):
        self.id = data['id']
        self.first_name = data['first_name']
        self.last_name = data['last_name']
        self.email = data['email']
        self.password = data['password']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
        self.magazines = []

    @classmethod
    def get_all(cls):
        query = "SELECT * FROM users"
        result = connectToMySQL('subscriptions').query_db(query) #connecting to database and querying

        users = []
        for user in result:
            users.append(cls(user))#list of user class objects

        return users

    @classmethod
    def save(cls,data):
        query = "INSERT INTO users(first_name, last_name, email, password, created_at,updated_at) VALUES (%(first_name)s, %(last_name)s, %(email)s, %(password)s, Now(),Now());"
        return connectToMySQL('subscriptions').query_db(query, data) #coonnecting to db, runnning the "save" query

    @classmethod
    def get_one_by_id(cls,data):
        query = "SELECT * FROM users WHERE id = %(id)s"
        result = connectToMySQL('subscriptions').query_db(query,data)
        return cls(result[0])


    @classmethod
    def get_all_by_id(cls,data):
        query = "SELECT * FROM users WHERE id = %(id)s"
        results = connectToMySQL('subscriptions').query_db(query,data)
        #order = cls(result[0])
        order = []
        for row in results:
            order.append(cls(row))
        return order

    @classmethod
    def get_one_by_email(cls,data):
        query = "SELECT * FROM users WHERE email = %(email)s"
        result = connectToMySQL('subscriptions').query_db(query,data)#connecting to db, running the "get_one_by_email" query

        if len(result) < 1:
            return False #block those who don't have a registered email from entering

        return cls(result[0])

    @classmethod
    def update(cls,data):
        query = """
            UPDATE users SET first_name = %(first_name)s,
            last_name = %(last_name)s,
            updated_at = Now() WHERE id = %(id)s;
        """
        return connectToMySQL("subscriptions").query_db(query,data)#connects to db and runs the "update" query


    @classmethod
    def delete(cls,data):
        query = "DELETE FROM users WHERE id = %(id)s"
        return connectToMySQL('subscriptions').query_db(query,data) #DELETES USER, run with caution


    # @classmethod
    # def get_all_orders_with_likes(cls,data):
    #     query = "SELECT * FROM users LEFT JOIN likes ON users.id = likes.user_id LEFT JOIN orders on likes.order_id WHERE users.id = %(id)s;"
    #     return connectToMySQL('subscriptions').query_db(query,data)

    @classmethod
    def get_users_w_magazines(cls):
        query = "SELECT * FROM users JOIN magazines ON magazines.user_id = users.id "
        results = connectToMySQL('subscriptions').query_db(query)#joining tables in the db
        print(results)

        if results:
            new_result = []
            for row in results:
                user = cls(row)
                data = {
                    "id":row['books.id'],
                    "first_name":row['first_name'],
                    "last_name":row['last_name'],
                    "email":row['email'],
                    "password":row['password'],
                    "created_at":row['books.created_at'],
                    "updated_at":row['books.updated_at']
                }

                user.books.append(magazine.Magazine(data))
                new_result.append(user)
            return new_result





    # @classmethod
    # def get_books_w_creator(cls):
    #     query = "SELECT * FROM books JOIN users ON books.user_id = users.id"

    #     results = connectToMySQL('user-test').query_db(query)
    #     print(results)

    #     all_books = []

    #     if results:
    #         for row in results:
    #             # convert book data from row into class object
    #             book = cls(row)
    #             # convert user data from row into class object
    #             data = {
    #                 'id':row['users.id'],
    #                 'first_name':row['first_name'],
    #                 'last_name':row['last_name'],
    #                 'email':row['email'],
    #                 'password':row['password'],
    #                 'created_at':row['users.created_at'],
    #                 'updated_at':row['users.updated_at']
    #             }
    #             book.creator = user.User(data)
    #             all_books.append(book)

        # return all_books
    # @staticmethod
    # def login_validator(data):
    #     user = User.get_one_by_email(data['email'])

    #     if len(user) < 1 :
    #         flash("Email/Password doesn't match., 'login")



# @classmethod
#     def get_users_w_magazines(cls):
#         query = "SELECT * FROM users JOIN magazines ON magazines.user_id = users.id "
#         results = connectToMySQL('subscriptions').query_db(query)#joining tables in the db
#         print(results)

#         if results:
#             new_result = []
#             for row in results:
#                 user = cls(row)
#                 data = {
#                     "id":row['books.id'],
#                     "title":row['title'],
#                     "description":row['description'],
#                     "created_at":row['books.created_at'],
#                     "updated_at":row['books.updated_at'],
#                     'users_id':row['users_id']
#                 }

#                 user.books.append(magazine.Magazine(data))
#                 new_result.append(user)
#             return new_result
