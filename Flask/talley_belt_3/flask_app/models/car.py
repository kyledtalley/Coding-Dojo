from flask_app.config.mysqlconnection import connectToMySQL
from flask_app.models import user

class Car:

    def __init__(self,data):
        self.id = data['id']
        self.make = data['make']
        self.price = data['model']
        self.year = data['year']
        self.price = data['price']
        self.seller = data['seller']
        self.description = data['description']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
        self.user_id = data['user_id']
        self.creator = None

    @classmethod
    def get_cars_w_creator(cls):
        query = "SELECT * FROM cars JOIN users ON cars.user_id = users.id"

        results = connectToMySQL('dealership').query_db(query)
        print(results)

        all_cars = []

        if results:
            for row in results:
                car = cls(row)
                data = {
                    'id':row['users.id'],
                    'first_name':row['first_name'],
                    'last_name':row['last_name'],
                    'email':row['email'],
                    'password':row['password'],
                    'created_at':row['users.created_at'],
                    'updated_at':row['users.updated_at']
                }
                car.creator = user.User(data)
                all_cars.append(car)

        return all_cars

    @classmethod
    def save(cls,data):
        query = "INSERT INTO cars (make,model,year,price, description, created_at, updated_at, user_id) VALUES (%(make)s,%(model)s,%(year)s,%(price)s, %(description)s, NOW(), NOW(), %(user_id)s)"
        return connectToMySQL('dealership').query_db(query,data)

    @classmethod
    def get_car_by_id(cls,data):
        query = "SELECT * FROM cars WHERE id = %(id)s;"
        result = connectToMySQL('dealership').query_db(query,data)
        return cls(result[0])

    @classmethod
    def update(cls,data):
        query = "UPDATE cars SET make=%(make)s,model=%(model)s,year=%(year)s, price=%(price)s, description=%(description)s WHERE id = %(id)s"
        return connectToMySQL('dealership').query_db(query,data)

    @classmethod
    def delete(cls,data):
        query = "DELETE FROM cars WHERE id = %(id)s"
        return connectToMySQL('dealership').query_db(query,data)












