from flask_app.config.mysqlconnection import connectToMySQL
from flask import flash
import re

EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
class User:
    def __init__(self, data):
        self.id=data['id']
        self.username=data['username']
        self.email=data['email']
        self.password=data['password']
        self.created_at=data['created_at']
        self.updated_at= data['updated_at']

    @classmethod
    def save(cls, data):
        query = " INSERT INTO users (username, email, password) VALUES (%(username)s, %(email)s, %(password)s);"
        result = connectToMySQL('log').query_db(query, data)
        return result

    @classmethod
    def get_all(cls):
        query = "SELECT * FROM users"
        result = connectToMySQL('log').query_db(query)
        users = []
        for user in result:
            users.append(cls(user))
        return users



    @classmethod
    def get_by_email(cls,data):
        query = "SELECT * FROM users WHERE email = %(email)s;"
        result = connectToMySQL("log").query_db(query,data)
        if len(result) < 1:
            return False
        return cls(result[0])

    @classmethod
    def get_by_id(cls,data):
        query = "SELECT * FROM users WHERE id = %(id)s;"
        result = connectToMySQL("log").query_db(query,data)
        if len(result) < 1:
            return False
        return cls(result[0])

    @staticmethod
    def validate_user(user):

        is_valid = True # we assume this is true

        if len(user['username']) < 6:
            flash("Username must be at least 6 characters long.", 'register')
            is_valid = False
        if len(user['username']) <1 :
            flash("Username cannot be blank!")
            is_valid = False
        if not EMAIL_REGEX.match(user['email']):
            flash("Invalid email address!")
            is_valid = False
        if len(user['email']) <1 :
            flash("Email cannot be blank!")
            is_valid = False
        if int(user['age']) < 18 :
            flash("User must be 18 or older.")
            is_valid = False
        if len(user['age']) <1 :
            flash("Age cannot be blank!")
            is_valid = False
        if len(user['country']) <2:
            flash("Country abbreviation must be 2 or 3 characters long.")
            is_valid = False
        if len(user['country']) <1 :
            flash("Country cannot be blank!")
            is_valid = False
        return is_valid
