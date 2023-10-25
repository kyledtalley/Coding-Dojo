from flask_app.config.mysqlconnection import connectToMySQL
import re

db='jims_pizzeria'
class User:
    def __init__(self, data):
        self.id = data['id']
        self.first_name = data['first_name']
        self.last_name = data['last_name']
        self.email = data['email']
        self.password = data['password']
        self.address = data['address']
        self.city = data['city']
        self.state = data['state']
        self.zip_code = data['zip_code']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']

    @classmethod
    def create_user(cls,data):
        query = '''INSERT INTO users (first_name, last_name, email, password, address, city,state,zip_code)
        VALUE( %(first_name)s, %(last_name)s, %(email)s, %(password)s, %(address)s, %(city)s, %(state)s, %(zip_code)s )'''
        return connectToMySQL(db).query_db(query,data)

    @classmethod
    def get_one(cls,data):
        query = 'SELECT * FROM users WHERE ID = %(id)s'
        result = connectToMySQL(db).query_db(query,data)
        print(result)
        return cls(result[0])

    @classmethod
    def get_one_by_email(cls,data):
        query = 'SELECT * FROM users WHERE email = %(email)s'
        result = connectToMySQL(db).query_db(query,data)
        print(result)
        return cls(result[0])

    @classmethod
    def update_user(cls, data):
        query = ''' UPDATE users
            SET first_name = %(first_name)s, last_name =  %(last_name)s, email = %(email)s, address = %(address)s, city = %(city)s, state= %(state)s, zip_code= %(zip_code)s WHERE id = %(id)s'''
        return connectToMySQL(db).query_db(query,data)

    @classmethod
    def destroy(cls, data):
        query = 'DELETE FROM users WHERE ID = %(id)s'
        return connectToMySQL(db).query_db(query, data)

