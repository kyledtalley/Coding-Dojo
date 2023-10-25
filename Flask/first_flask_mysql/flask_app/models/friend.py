# import the function that will return an instance of a connection
from flask_app.config.mysqlconnection import connectToMySQL
# model the class after the friend table from our database
class Friend:
    DB = "friends"
    def __init__( self , data ):
        self.id = data['id']
        self.first_name = data['first_name']
        self.last_name = data['last_name']
        self.occupation = data['occupation']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']

    # Now we use class methods to query our database
    @classmethod
    def get_all(cls):
        query = "SELECT * FROM friends;"
        # make sure to call the connectToMySQL function with the schema you are targeting.
        results = connectToMySQL('friends').query_db(query)
        # Create an empty list to append our instances of friends
        friends = []
        # Iterate over the db results and create instances of friends with cls.
        for friend in results:
            friends.append(cls(friend))
        return friends

    @classmethod
    def save(cls, data):
        query = "INSERT INTO friends (first_name, last_name, occupation, created_at, updated_at) VALUES (%(fname)s, %(lname)s, %(occ)s, NOW(), NOW());"
        # data is a dictionary that will be passed into the save method from server.py
        return connectToMySQL('friends').query_db(query, data)

    @classmethod
    def update(cls, data):
        query= """UPDATE friends
                SET first_name = %(first_name)s, last_name = %(last_name)s, email  = %(emails)s, occupation = %(occupation)s
                WHERE id = %(id)s;
        """
        return connectToMySQL(cls.DB).query_db(query, data)

    @classmethod
    def delete(cls,data):
        query = "DELETE FROM users WHERE id = %(id)s"

        return connectToMySQL('friends').query_db(query,data)
