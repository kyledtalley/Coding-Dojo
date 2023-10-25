from flask_app.config.mysqlconnection import connectToMySQL
from flask import flash
import re

EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')

class User:
    def __init__(self,data):
        self.id = data['id']
        self.first_name = data['first_name']
        self.last_name = data['last_name']
        self.email = data['email']
        self.password = data['password']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
        self.trees = []

    @classmethod
    def get_all(cls):
        query = "SELECT * FROM users"
        # connect to our specific db and query the database
        result = connectToMySQL('arbortrary').query_db(query)
        # convert all results from list of dictionaries
        # to list of class objects
        users = []
        for user in result:
            users.append(cls(user))
        # return list of user class objects
        return users

    @classmethod
    def save(cls,data):
        query = "INSERT INTO users(first_name, last_name, email, password, created_at,updated_at) VALUES (%(first_name)s, %(last_name)s, %(email)s, %(password)s, Now(),Now());"
        return connectToMySQL('arbortrary').query_db(query, data)

    # Get One User by ID
    @classmethod
    def get_one_by_id(cls,data):
        query = "SELECT * FROM users WHERE id = %(id)s"
        result = connectToMySQL('arbortrary').query_db(query,data)
        print("one user:", result)
        return cls(result[0])

    @classmethod
    def get_one_by_email(cls,data):
        query = "SELECT * FROM users WHERE email = %(email)s"
        result = connectToMySQL('arbortrary').query_db(query,data)
        # if user with this email doesn't exist, return false
        if len(result) < 1:
            return False
        # create class instance of user returned
        return cls(result[0])

    # Update User
    @classmethod
    def update(cls,data):
        query = """
            UPDATE users SET first_name = %(first_name)s,
            last_name = %(last_name)s, email = %(email)s,
            updated_at = Now() WHERE id = %(id)s;
        """
        return connectToMySQL("arbortrary").query_db(query,data)

    # Delete User

    @classmethod
    def delete(cls,data):
        query = "DELETE FROM users WHERE id = %(id)s"
        return connectToMySQL('arbortrary').query_db(query,data)

    @classmethod
    def get_users_w_trees(cls):
        query = "SELECT * FROM users JOIN trees ON users.id = trees.user_id"
        results = connectToMySQL('arbortrary').query_db(query)
        print(results)

        if results:
            new_result = []
            for row in results:
                user = cls(row)
                data = {
                    "id":row['trees.id'],
                    "title":row['title'],
                    "author":row['author'],
                    "num_pages":row['num_pages'],
                    'user_id':row['user_id'],
                    "created_at":row['trees.created_at'],
                    "updated_at":row['trees.updated_at']
                }
                user.trees.append(tree.Tree(data))
                new_result.append(user)
            return new_result
    @staticmethod
    def validate_user(user):

        is_valid = True # we assume this is true

        if len(user['first_name']) < 2:
            flash("First Name must be at least 2 characters long.")
            is_valid = False
        if len(user['last_name']) < 2 :
            flash("Last Name must be at least 2 characters long.")
            is_valid = False
        if not EMAIL_REGEX.match(user['email']):
            flash("Invalid email address!")
            is_valid = False
        if len(user['password']) < 8 :
            flash("Password must be at least 8 characters long.")
            is_valid = False
        return is_valid















