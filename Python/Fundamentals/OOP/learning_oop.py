class Shoe:
    def __init__(self, brand, shoe_type, price):
        self.brand = brand
        self.type = shoe_type
        self.price = price
        self.in_stock = True
    def on_sale_by_percent(self, percent):
        self.price = self.price * (1 - percent)



skater_shoe = Shoe("Vans", "Low-top Trainers", 59.99)
dress_shoe = Shoe("Jack & Jill Bootery", "Ballet Flats", 29.99)


print("skater shoe price: ", skater_shoe.price)
print("dress shoe price: ", dress_shoe.price)
skater_shoe.on_sale_by_percent(0.2)
dress_shoe.on_sale_by_percent(0.35)
print("skater shoe price 20% off: ", skater_shoe.price)
print("dress_shoe price 35% off", dress_shoe.price)

