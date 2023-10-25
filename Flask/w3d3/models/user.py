from configuration.mysqlconnection import connectToMySQL

class User:
    def __init__(self, data):
        self.id=data['id']
        self.username=data['username']
        self.email=data['email']
        self.age=data['age']
        self.country=data['country']
        self.created_at=data['created_at']
        self.updated_at= data['updated_at']

    @classmethod
    def get_all(cls):
        query = "SELECT * FROM users;"
        #connect to our specific db and query the database
        result = connectToMySQL('userz').query_db(query)
        #convert all results from list of dictionaries to list of class objects
        users = []
        for user in result:
            users.append(cls(user))
            #return list of user class objects
        return users

    @classmethod
    def save(cls, data):
        query = "INSERT INTO users(username, email, age, country, created_at, updated_at) VALUES(%(username)s, %(email)s,%(age)s, %(country)s, NOW(), NOW());"
        return connectToMySQL('userz').query_db(query, data)
