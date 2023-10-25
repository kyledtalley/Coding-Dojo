num1 = 42 #variable declaration, integer
num2 = 2.3 #variable declaration, float
boolean = True #declaring primitive data value
string = 'Hello World' #logging basic string
pizza_toppings = ['Pepperoni', 'Sausage', 'Jalepenos', 'Cheese', 'Olives'] #declaring list, composite data type
person = {'name': 'John', 'location': 'Salt Lake', 'age': 37, 'is_balding': False} #declaring dictionary, composite data type; declaring string, integer, and boolean primitive data types
fruit = ('blueberry', 'strawberry', 'banana') #declaring tuple of 3 strings
print(type(fruit)) #logging type of data. expected output: tuple
print(pizza_toppings[1]) #printing value from list pizza_toppings. expected value: sausage
pizza_toppings.append('Mushrooms') #adding string 'Mushrooms' to the end of the list pizza_toppings
print(person['name']) #printing key value. expected output: John
person['name'] = 'George' #declaring that John is now named George whether they like it or not
person['eye_color'] = 'blue' #adds key value to dictionary, eye_color: blue is appended
print(fruit[2]) #prints immutable data from tuple. expected output: banana

if num1 > 45: #conditional
    print("It's greater")
else:
    print("It's lower") #prints this

if len(string) < 5: #conditional
    print("It's a short word!")
elif len(string) > 15:
    print("It's a long word!")
else:
    print("Just right!")#string is neither less than 5 nor greater than 15, it will activate else statement

for x in range(5): #loop
    print(x) #I believe it would print 0, 1, 2, 3, 4, 5
for x in range(2,5):
    print(x) #I believe it would print 2, 3, 4, 5
for x in range(2,10,3): #I don't know what this would print at all but my guess would be 2, 3, 4, 5, 6, 7, 8, 9, 10, 9, 8, 7, 6, 5, 4, 3
    print(x)
x = 0
while(x < 5): #while loop
    print(x)#prints: 0,1,2,3,4, but x ends up as 5 in the end anyways
    x += 1 #iterator

pizza_toppings.pop()#removes value 'Olives' from list pizza_toppings but it's okay because olives are gross
pizza_toppings.pop(1)#removes value 'Sasuage' from list pizza_toppings
print(person)#prints dictionary person. expected output: {'name': 'George', 'location': 'Salt Lake', 'age': 37, 'is_balding': False, 'eye_color': 'blue'}
person.pop('eye_color')#takes out George's eyes, he didn't need them anyways
print(person)#{'name': 'George', 'location': 'Salt Lake', 'age': 37, 'is_balding': False}

for topping in pizza_toppings:
    if topping == 'Pepperoni':
        continue    #for loop that would continue immediately and print 'After 1st if statement' and then break upon reaching Olives, but we removed the nasty olives so it will never break
    print('After 1st if statement')
    if topping == 'Olives':
        break

def print_hello_ten_times():#function?
    for num in range(10):
        print('Hello') #it would print Hello 10x

print_hello_ten_times()#yes must be function

def print_hello_x_times(x):#parameter is now passed through to control amount of Hello's, this is also a function
    for num in range(x):
        print('Hello')

print_hello_x_times(4) #because of the argument 4, it would print Hello 4 times

def print_hello_x_or_ten_times(x = 10):#function!
    for num in range(x):
        print('Hello')

print_hello_x_or_ten_times()#prints Hello 10 times
print_hello_x_or_ten_times(4)#prints Hello 4 times for a total of 14 Hello


"""
Bonus section
"""

# print(num3)#won't print anything because num3 is not declared yet. This will result in an error
# num3 = 72#too late
# fruit[0] = #no adding to tuple, tuple is immutable
# print(person['favorite_team']) #John has no favorite team, he just wants everyone to have fun. This will result in an error
# print(pizza_toppings[7]) #will result in error, 7 pizza toppings do not exist
#   print(boolean) #prints True
# fruit.append('raspberry') #tuples are immutable, error
# fruit.pop(1) #tuples are immutable, error
