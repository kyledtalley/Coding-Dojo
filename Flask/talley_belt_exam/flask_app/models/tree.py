from flask_app.config.mysqlconnection import connectToMySQL
from flask_app.models import user
from flask import flash

class Tree:

    def __init__(self,data):
        self.id = data['id']
        self.species = data['species']
        self.location = data['location']
        self.date_planted = data['date_planted']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
        self.users_id = data['users_id']
        self.creator = None
        # self.favorited_by = []

    @classmethod
    def get_trees_w_creator(cls):
        query = "SELECT * FROM trees JOIN users ON trees.users_id = users.id"

        results = connectToMySQL('arbortrary').query_db(query)
        print(results)

        all_trees = []

        if results:
            for row in results:
                # convert tree data from row into class object
                tree = cls(row)
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
                tree.creator = user.User(data)
                all_trees.append(tree)

        return all_trees

    @classmethod
    def save(cls,data):
        query = "INSERT INTO trees (species,location,date_planted, updated_at, created_at, users_id) VALUES (%(species)s,%(location)s,%(date_planted)s, NOW(), NOW(),%(users_id)s)"
        return connectToMySQL('arbortrary').query_db(query,data)

    @classmethod
    def get_tree_by_id(cls,data):
        query = "SELECT * FROM trees WHERE id = %(id)s;"
        result = connectToMySQL('arbortrary').query_db(query,data)
        return cls(result[0])

    @classmethod
    def update(cls,data):
        query = "UPDATE trees SET species=%(species)s,location=%(location)s WHERE id = %(id)s"
        return connectToMySQL('arbortrary').query_db(query,data)

    @classmethod
    def delete(cls,data):
        query = "DELETE FROM trees WHERE id = %(id)s"
        return connectToMySQL('arbortrary').query_db(query,data)

    @staticmethod
    def validate_tree(tree):

        is_valid = True # we assume this is true

        if len(tree['species']) < 5:
            flash("Specie name must be at least 5 characters")
            is_valid = False
        if len(tree['location']) <2 :
            flash("Location must be at least 2 characters")
            is_valid = False
        return is_valid
