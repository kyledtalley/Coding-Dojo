from flask_app.config.mysqlconnection import connectToMySQL
from flask import flash, session

class Ninja:

    def __init__(self, data):
        self.id = data['id']
        self.name = data['name']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
        self.first_name = data['first_name']
        self.last_name = data['last_name']
        self.age = data['age']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']



    @classmethod
    def save(cls, data):
        query = """INSERT INTO ninjas (dojo_id, first_name, last_name, age)
                    VALUES (%(dojo_id)s, %(first_name)s, %(last_name)s, %(age)s)"""

        result = connectToMySQL ('dojos_and_ninjas_schema').query_db(query,data)
        return result

    @classmethod
    def get_all(cls):
        query = "SELECT dojos.name, ninjas.id, ninjas.first_name, ninjas.last_name, ninjas.age, ninjas.created_at, ninjas.updated_at FROM dojos JOIN ninjas ON dojos.id = ninjas.dojo_id;"
        ninjas_in_db = connectToMySQL('dojos_and_ninjas_schema').query_db(query)
        ninjas=[]
        for ninja in ninjas_in_db:
            ninjas.append(cls(ninja))
        return ninjas

    @classmethod
    def get_one(cls,data):
        query = """SELECT dojos.name, ninjas.id, ninjas.first_name, ninjas.last_name, ninjas.age, ninjas.created_at, ninjas.updated_at FROM dojos JOIN ninjas ON dojos.id = ninjas.dojo_id WHERE dojos_and_ninjas_schema.ninjas.id = %(id)s; """

        ninja_from_db = connectToMySQL('dojos_and_ninjas_schema').query_db(query, data)
        return cls(ninja_from_db[0])


    @classmethod
    def get_ninja_with_dojo(cls, data):
        query =  "SELECT dojos.name, ninjas.id, ninjas.first_name, ninjas.last_name, ninjas.age, ninjas.created_at, ninjas.updated_at FROM dojos JOIN ninjas ON dojos.id = ninjas.dojo_id"
        results = connectToMySQL('dojos_and_ninjas_schema').query_db(query, data)

        ninja = cls(results[0])
        for row_from_db in results:
            data = {
                "dojo_id" : row_from_db['dojo_id'],
                "dojo.name": row_from_db['dojo.name']
            }
            Ninja.append(ninja(data))

    @staticmethod
    def validate_ninja(ninja):
        is_valid = True # we assume this is true
        if len(ninja['first_name']) < 3:
            flash("First name must be at least 3 characters.")
            is_valid = False
        if len(ninja['last_name']) < 3:
            flash("Last name must be at least 3 characters.")
            is_valid = False
        if int(ninja['age']) >= 18 :
            flash("Age must be 18 or older.")
            is_valid = False
        return is_valid

    @classmethod
    def update(cls,data):
        query = "UPDATE ninjas SET dojo_id=%(dojo_id)s, first_name=%(first_name)s, last_name=%(last_name)s, age=%(age)s,updated_at = NOW() WHERE id = %(id)s;"
        return connectToMySQL('dojos_and_ninjas_schema').query_db(query,data)

    @classmethod
    def delete(cls, data):
        query = "DELETE FROM ninjas WHERE id = %(id)s;"
        return connectToMySQL('dojos_and_ninjas_schema').query_db(query, data)
