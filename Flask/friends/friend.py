from mysqlconnection import connectToMySQL

class Friend:
    DB = "friends"
    def __init__(self, data):
        self.id = data['id']
        self.first_name = data['first_name']
        self.last_name = data['last_name']
        self.occupation = data['occupation']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']

    # the save method will be used when we need to save a new friend to our database
    @classmethod
    def save(cls, data):
        query = """
                INSERT INTO friends (first_name, last_name, occupation)
                VALUES (%(first_name)s %(last_name)s %(occupation)s)
            """
        results = connectToMySQL(cls.DB).query_db(query, data)
        return results



    #READ
    @classmethod
    def get_one(cls, friend_id):
        query = "SELECT * FROM friends WHERE id = %(id)s"
        results = connectToMySQL(cls.DB).query_db(query , {"id": id})
        return cls(results[0])

    #this get_all method will be used when we need to retrieve alll the rows of the table
    @classmethod
    def get_all(cls):
        query = "SELECT * FROM friends;"
        results = connectToMySQL(cls.DB).query_db(query)
        friends = []
        for friend in results:
            friends.append(cls(friend))
        return friends
#UPDATE
    @classmethod
    def update(cls,data):
        query = """
                UPDATE friends
                SET first_name = %(first_name)s, last_name=%(last_name)s, occupation = %(occupation)s
                WHERE id = %(id)s;
        """
        results = connectToMySQL(cls.DB).query_db(query, data)
        return results

#DELETE
    @classmethod
    def delete(cls,id):
        query = """
                DELETE FROM friends
                WHERE id = %(id)s;
        """
        data = {"id": id}
        results = connectToMySQL(cls.DB).query_db(query, data)
        return results
