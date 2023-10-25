healthy = ["kale chips", "broccoli"]
backpack = ["pizza", "frozen custard", "apple crisp", "kale chips"]

if "pizza" not in healthy:
    backpack.remove("pizza")

backpack.remove("pizza")
print(backpack)
