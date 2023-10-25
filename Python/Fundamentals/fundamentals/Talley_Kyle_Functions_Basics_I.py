#1
def number_of_food_groups():
    return 5
print(number_of_food_groups())
#should return 5
#correct!

#2
"""def number_of_military_branches():
    return 5
print(number_of_days_in_a_week_silicon_or_triangle_sides() + number_of_military_branches())"""
#error, that first terribly long named function was never defined
#correct!

#3
def number_of_books_on_hold():
    return 5
    return 10
print(number_of_books_on_hold())
#will print 10
#wrong! oof


#4
def number_of_fingers():
    return 5
    print(10)
print(number_of_fingers())
#will return and print a 5, never get to printing 10
#correct!

#5
def number_of_great_lakes():
    print(5)
x = number_of_great_lakes()
print(x)
#5 will be printed but x will not print anything
#correct!

#6
"""def add(b,c):
    print(b+c)
print(add(1,2) + add(2,3))"""
#print 3 print 5 print 8
#It did print 3 and 5 bu tnot 8, and I'm not too sure why
#now getting an error

#7
def concatenate(b,c):
    return str(b)+str(c)
print(concatenate(2,5))
#print 25
#correct

#8
def number_of_oceans_or_fingers_or_continents():
    b = 100
    print(b)
    if b < 10:
        return 5
    else:
        return 10
    return 7
print(number_of_oceans_or_fingers_or_continents())
#print 100, print 10
#correct!

#9
def number_of_days_in_a_week_silicon_or_triangle_sides(b,c):
    if b<c:
        return 7
    else:
        return 14
    return 3
print(number_of_days_in_a_week_silicon_or_triangle_sides(2,3))
print(number_of_days_in_a_week_silicon_or_triangle_sides(5,3))
print(number_of_days_in_a_week_silicon_or_triangle_sides(2,3) + number_of_days_in_a_week_silicon_or_triangle_sides(5,3))
#print 7, print 14, print 21
#correct!

#10
def addition(b,c):
    return b+c
    return 10
print(addition(3,5))
#print 8


#11
b = 500
print(b)
def foobar():
    b = 300
    print(b)
print(b)
foobar()
print(b)
#500 500 300 500
#correcto

#12
b = 500
print(b)
def foobar():
    b = 300
    print(b)
    return b
print(b)
foobar()
print(b)
#500 500 300 300
#I was bamboozled

#13
b = 500
print(b)
def foobar():
    b = 300
    print(b)
    return b
print(b)
b=foobar()
print(b)
#500 500 300 300
#correct

#14
def foo():
    print(1)
    bar()
    print(2)
def bar():
    print(3)
foo()
#1 3 2

#15
def foo():
    print(1)
    x = bar()
    print(x)
    return 10
def bar():
    print(3)
    return 5
y = foo()
print(y)
#1 3 5 10
#correct





