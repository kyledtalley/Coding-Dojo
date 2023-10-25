from flask_app.config.mysqlconnection import connectToMySQL
from flask_app.models import user


class Recipe:
    def __init__(self, data):
        self.id = data['id']
        self.name = data['name']
        self.under = data['under']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
        self.user_id = data['user_id']
        self.creator = None

    @classmethod
    def save(cls, data):
        query = " INSERT INTO recipes (name, under, created_at, updated_at, user_id) VALUES (%(name)s, %(under)s, NOW(), NOW(), %(user_id)s);"
        result = connectToMySQL('recipe_share').query_db(query, data)
        return result

    @classmethod
    def get_all(cls):
        query = "SELECT * FROM recipes JOIN users ON users.id = recipes.user_id"

        recipes_in_db = connectToMySQL('recipe_share').query_db(query)
        recipes = []

        for recipe in recipes_in_db:
            recipes.append(cls(recipe))

        return recipes

    @classmethod
    def get_recipes_w_creator(cls):
        query = "SELECT * FROM recipes JOIN users ON users.id = recipes.user_id"

        results = connectToMySQL('recipe_share').query_db(query)

        all_recipes = []

        if results:
            for row in results:
#convert recipe data from raw into class object
                recipe = cls(row)
#convert user data from raw into class object

                data = {
                    "id": row['users.id'],
                    "first_name": row['first_name'],
                    "last_name": row['last_name'],
                    "email": row['email'],
                    "password": row['password'],
                    "created_at" :row['users.created_at'],
                    "updated_at": row['users.updated_at']
                }
                recipe.creator = user.User(data)
                all_recipes.append(recipe)

        return all_recipes
