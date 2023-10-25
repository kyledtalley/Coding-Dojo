from flask_app.config.mysqlconnection import connectToMySQL
from flask import flash
import re

EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
class User:
    def __init__(self,data):
        self.id=data['id']
        self.first_name = data['first_name']
        self.last_name = data['last_name']
        self.email = data['email']
        self.password = data['password']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']


    @classmethod
    def save(cls, data):
        query = """ INSERT INTO users (first_name, last_name, email, password, created_at, updated_at)
                    VALUES (%(first_name)s, %(last_name)s, %(email)s, %(password)s, NOW(), NOW());"""
        result = connectToMySQL('recipe_share').query_db(query, data)
        return result

    @classmethod
    def get_by_email(cls, data):
        query = "SELECT * FROM users WHERE email = %(email)s;"
        result = connectToMySQL("recipe_share").query_db(query,data)
        if len(result) < 1:
            return False
        return cls(result[0])

    @classmethod
    def get_by_id(cls, data):
        query = "SELECT * FROM users WHERE id = %(id)s;"

        # SELECT * FROM users JOIN recipes ON users.id = recipes.user_id
        result = connectToMySQL("recipe_share").query_db(query, data)
        if len(result) < 1:
            return False
        return cls(result[0])


    @classmethod
    def get_al_(cls):
        # query = """SELECT recipes.name, recipes.under,recipes.created_at, recipes.updated_at,  users.id, users.first_name, users.last_name FROM recipes JOIN users ON users.id = recipes.user_id;"""
        query = "SELECT * FROM users JOIN recipes ON users.id = recipes.user_id"
        # query = "SELECT * FROM users"
        users_in_db = connectToMySQL('recipe_share').query_db(query)
        users= []


        for user in users_in_db:
            users.append(cls(user))


        return users


    # @classmethod#not finished
    # def update(cls, data):
    #     query = "UPDATE recipes SET name = %(title)s, under = %(under)s WHERE id = %(id)s;"
    #     return connectToMySQL('recipe_share').query_db(query,data)

        # for row_from_db in results:
        #     data = {
        #         "user_id": row_from_db['user_id'],
        #         "recipe.name" : row_from_db['recipe.name'],
        #         "recipe.under": row_from_db['recipe.under'],
        #         # "user.first_name": row_from_db['user.first_name'],
        #         # "user.last_name": row_from_db['user.last_name'],
        #         "recipe.created_at": row_from_db['recipe.created_at'],
        #         "recipe.updated_at": row_from_db['recipe.updated_at']
        #     }
        # User.append(user(data))




# {% if session['user_id'] == {{user.creator.id}}:%}
#                  <a href="/recipe/edit/{{recipe.id}}">Edit</a>
#                  <a href="/recipe/delete/{{recipe.id}}">Delete</a>
#            {%endif%}


# <div class="col-6 mx-auto">
#             <table>
#                 <thead>
#                     <tr>
#                         <th>Recipe Name</th>
#                         <th>Make in under 30?</th>
#                         <th>Posted by:</th>
#                     </tr>
#                     <tr>
#                         <th>{{user.name}}</th>
#                         <th>{{user.under}}</th>
#                         <th>{{user.first_name}} {{user.last_name}}</th>
#                     </tr>
#                 </thead>
#             </table>
#         </div>
