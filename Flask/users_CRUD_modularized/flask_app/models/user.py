from flask_app.config.mysqlconnection import connectToMySQL
from flask import flash
import re

EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
class User:
    def __init__(self, data):
        self.id=data['id']
        self.username=data['username']
        self.email=data['email']
        self.age=data['age']
        self.country=data['country']
        self.created_at=data['created_at']
        self.updated_at= data['updated_at']

    @classmethod
    def save(cls, data):
        query = """ INSERT INTO users (username, email, age, country)
                    VALUES (%(username)s, %(email)s, %(age)s, %(country)s)"""
        result = connectToMySQL('userz').query_db(query, data)
        return result

    @classmethod
    def get_all(cls):
        query = "SELECT * FROM users"
        result = connectToMySQL('userz').query_db(query)
        users = []
        for user in result:
            users.append(cls(user))
        return users



    @staticmethod
    def validate_user(user):

        is_valid = True # we assume this is true

        if len(user['username']) < 6:
            flash("Username must be at least 6 characters long.")
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
