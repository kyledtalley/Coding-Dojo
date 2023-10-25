print("\nPrint all integers from 0 to 150:")
for i in range (0, 151):
    print(i)

print("\nPrint all the mltiples of 5 from 5 to 1000:")
for x in range (5, 1001, 5):
    print(x)

print("\nPrint integers 1 to 100. If divisible by 5, print 'Coding' instead. If divisible by 10, print 'Coding Dojo'.")
for y in range (1, 101):
    if y % 10 == 0:
        print("Coding Dojo")
    elif y % 5 == 0:
        print("Coding")
    else:
        print(y)

print("\nAdd odd integers from 0 to 500,000 and print the final sum.")
sum = 0
for z in range (0, 500001):
    sum += z
print(sum)

print("\nPrint positive numbers starting at 2018, counting down by fours.")
for f in range (2018, 0, -4):
    print(f)

print("\nSet three variables: lowNum, highNum, mult...")
lowNum = 2
highNum = 9
mult = 3
for k in range (lowNum, highNum+1):
    if k % mult == 0:
        print(k)

