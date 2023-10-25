from flask_app.config.mysqlconnection import connectToMySQL
from flask_app.models import user
import json

db='jims_pizzeria'
class Order:
    def __init__(self, data):
        self.id = data['id']
        self.pizza_size = data['pizza_size']
        self.toppings = data['toppings']
        self.delivery_method = data['delivery_method']
        self.total = data['total']
        self.user_id = data['user_id']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
        self.creator=None
    @classmethod
    def create_order(cls,data):
        query = '''INSERT INTO orders (pizza_size, toppings, delivery_method, total, user_id) 
        VALUE( %(pizza_size)s, %(toppings)s, %(delivery_method)s, %(total)s, %(user_id)s)'''
        return connectToMySQL(db).query_db(query,data)
    
    @classmethod
    def order_w_creator(cls, data):
        query = '''SELECT * from orders 
        LEFT JOIN users ON orders.user_id = users.id 
        WHERE orders.id = %(id)s;'''
        result=connectToMySQL(db).query_db(query,data)
        print(result)
        
        """
        WARNING: you will never encounter odd scenarios like the code below in your assignments or exam. Things like this may 
        happen based on a choice you intentional made or it's the only way you knew how to solve an issue. 
        
        result[0]['total']= format(result[0]['total'],'.2f') <---When dealing with decimals Python doesn't allow .00. 
        Even though in the database it shows (ex. 18.00) when comes back, it'll still be 18.00 but when I call it in the template it'll show 18.0
        so I have to format it once again and save the formatted value into the same area to overwrite the previous value. 
        
        
        topping_list=json.loads(result[0]['toppings'])<---- I'm using json to convert the string list back into a list and saving it a variable
        
        result[0]['toppings'] = topping_list <---- I'm overwriting the results value with the converted value of the previous line. 
        
        order = cls(result[0]) <--- Here I'm converting the modified db_data into an Order class object
        
        db_data = result[0] <--- just changing the name because result[0] is more confusing than db_data
        
        """
        result[0]['total']= format(result[0]['total'],'.2f')
        topping_list=json.loads(result[0]['toppings'])
        result[0]['toppings'] = topping_list
        order = cls(result[0])
        db_data = result[0]
        user_data={
            'id': db_data['users.id'],
            'first_name': db_data['first_name'],
            'last_name': db_data['last_name'],
            'email': db_data['email'],
            'password': db_data['password'],
            'address': db_data['address'],
            'city': db_data['city'],
            'state': db_data['state'],
            'zip_code': db_data['zip_code'],
            'created_at': db_data['users.created_at'],
            'updated_at': db_data['users.updated_at']
        }
        order.creator=user.User(user_data)
        
        return order
        
        