from flask_app.config.mysqlconnection import connectToMySQL
from flask import flash
from flask_app.models import car

class User:
    def __init__(self,data):
        self.id = data['id']
        self.first_name = data['first_name']
        self.last_name = data['last_name']
        self.email = data['email']
        self.password = data['password']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
        self.cars = []

    @classmethod
    def get_all(cls):
        query = "SELECT * FROM users"
        result = connectToMySQL('dealership').query_db(query)
        users = []
        for user in result:
            users.append(cls(user))
        return users

    @classmethod
    def save(cls,data):
        query = "INSERT INTO users(first_name, last_name, email, password, created_at,updated_at) VALUES (%(first_name)s, %(last_name)s, %(email)s, %(password)s, Now(),Now());"
        return connectToMySQL('dealership').query_db(query, data)

    @classmethod
    def get_one_by_id(cls,data):
        query = "SELECT * FROM users WHERE id = %(id)s"
        result = connectToMySQL('dealership').query_db(query,data)
        print("**60 one user:", result)
        return result

    @classmethod
    def get_one_by_email(cls,data):
        query = "SELECT * FROM users WHERE email = %(email)s"
        result = connectToMySQL('dealership').query_db(query,data)
        if len(result) < 1:
            return False
        return cls(result[0])

    @classmethod
    def update(cls,data):
        query = """
            UPDATE users SET first_name = %(first_name)s,
            last_name = %(last_name)s, email = %(email)s,
            updated_at = Now() WHERE id = %(id)s;
        """
        return connectToMySQL("dealership").query_db(query,data)

    @classmethod
    def delete(cls,data):
        query = "DELETE FROM users WHERE id = %(id)s"
        return connectToMySQL('dealership').query_db(query,data)

    @classmethod
    def get_users_w_cars(cls):
        query = "SELECT * FROM users JOIN cars ON users.id = cars.user_id"
        results = connectToMySQL('dealership').query_db(query)
        print(results)

        if results:
            new_result = []
            for row in results:
                user = cls(row)
                data = {
                    "id":row['cars.id'],
                    "make":row['make'],
                    "model":row['model'],
                    "year":row['year'],
                    'price':row['price'],
                    'seller':row['seller'],
                    'description':row['description'],
                    'available':row['available'],
                    "created_at":row['cars.created_at'],
                    "updated_at":row['cars.updated_at']
                }

                user.cars.append(car.Car(data))
                new_result.append(user)
            return new_result










    @staticmethod
    def validate_user(user):
        is_valid = True
        if len(user['username']) < 3:
            flash("Hey username must be more than 3 characters long!")
            is_valid = False
        if len(user['email']) < 4:
            flash("Hey email must be more than 4 characters long!")
            is_valid = False
        return is_valid







