from flask_app.config.mysqlconnection import connectToMySQL
from flask_app.models import user

class Magazine:
    def __init__(self,data):
        self.id = data['id']
        self.title = data['title']
        self.description = data['description']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
        self.users_id = data['users_id']
        self.creator = None





    @classmethod
    def get_magazines_w_creator(cls ):
        query = "SELECT * FROM magazines JOIN users ON user.id =magazines.users_id"

        results = connectToMySQL('subscriptions').query_db(query)
        print(results)

        all_magazines = []

        if results:
            for row in results:
                # convert magazine data from row into class object
                magazine = cls(row)
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
                magazine.creator = user.User(data)
                all_magazines.append(magazine)

        return all_magazines

    @classmethod
    def save(cls,data):
        query = """INSERT INTO magazines (title,description, created_at, updated_at, users_id)
                VALUES (%(title)s,%(description)s, NOW(), NOW(), %(users_id)s);"""
        result = connectToMySQL('subscriptions').query_db(query,data)
        return result

    @classmethod
    def get_magazine_by_id(cls,data):
        query = "SELECT * FROM magazines WHERE id = %(id)s;"
        result = connectToMySQL('subscriptions').query_db(query,data)
        return cls(result[0])

    @classmethod
    def get_all(cls):
        query = "SELECT * FROM magazines;"
        result = connectToMySQL('subscriptions').query_db(query)
        return cls(result[0])

    @classmethod
    def update(cls,data):
        query = "UPDATE magazines SET title=%(title)s,description = %(description)s WHERE id = %(id)s"
        return connectToMySQL('subscriptions').query_db(query,data)

    @classmethod
    def delete(cls,data):
        query = "DELETE FROM magazines WHERE id = %(id)s"
        return connectToMySQL('subscriptions').query_db(query,data)

    # @classmethod
    # def get_all_subs_of_user(cls,data):
    #     query = 'SELECT * FROM orders JOIN users ON orders.user_id = user.id WHERE id = %(id)s'
    #     results = connectToMySQL('subscriptions').query_db(query,data)
    #     subs = []
    #     for row in results:
    #         subs.append(cls(row))
    #     return subs

    @classmethod
    def create_like(cls,data):
        query = 'INSERT INTO likes (order_id, user_id) VALUE (%(order_id)s, %(user_id)s)'
        return connectToMySQL('subscriptions').query_db(query,data)

    @classmethod
    def delete_like(cls,data):
        query = 'DELETE FROM likes WHERE order_id = %(order_id)s AND user_id =%(user_id)s'
        return connectToMySQL('subscriptions').query_db(query,data)
