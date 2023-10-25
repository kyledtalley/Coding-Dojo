from mysqlconnection import connectToMySQL

class Friend:
    DB = 'friends'
    def __init___(self,data):
        self.id = data['id']
        self.first_name = data['first_name']
        self.last_name = data['last_name']
        self.occupation = data['occupation']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']

    # @classmethod
    # def get_all(cls):
    #     query = "SELECT * FROM friends;"
    #     results = connectToMySQL('friends').query_db(query)

    #     friends = []

    #     for friend in results:
    #         friends.append(cls(friend))
    #     return friends

    @classmethod
    def save(cls, data):
        query = """INSERT INTO friends (first_name, last_name, occupation, created_at, updated_at)
        VALUES (%(fname)s, %(lname)s, %(occ)s, NOW(), NOW());"""

        return connectToMySQL('friends').query_db(query,data)

    @classmethod
    def get_one(cls, id):
        query = "SELECT * FROM friends WHERE id = %(id)s;"
        results = connectToMySQL(cls.DB).query_db(query, {"id": id})

        return cls(results[0])

    @classmethod
    def get_all(cls):
        query = """ SELECT * FROM friends;"""
        results = connectToMySQL(cls.DB).query_db(query)
        all_friends= []
        for row in results:
            #make object, add to list
            all_friends.append(cls(row))
        return all_friends

