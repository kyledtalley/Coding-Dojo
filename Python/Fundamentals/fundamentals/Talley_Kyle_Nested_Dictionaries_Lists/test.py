
users = [
    {
        "first_name:": "Sophia",
        "last_name": "Miller",
        "city": "Boston",
        "age": 29,
        "developer": False
    },

    {
        "first_name": "James",
        "last_name": "Davis",
        "city": "San Francisco",
        "age": 31,
        "developer": True

    }
]

def adopt_pet(list, user_name, pet):
    for item in list:
        if item['first_name'] == user_name:
            item['pet'] = pet

adopt_pet(users, 'Sophia', 'cat')

print(users['Sophia'])
