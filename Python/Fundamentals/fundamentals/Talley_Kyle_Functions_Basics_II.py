
#1 Countdown

def countdown(number):
    for i in range(number, 0, -1):
        print(i)

countdown(7)

#2Print and Return

def printandreturn(lst):
    for i in range(0, (len(lst)-1)):
        print(lst[i])
        continue
    for i in range(1,len(lst)):
        return(lst[i])

lst = [5, 99]
print(printandreturn(lst)) #printed return number too to show that it works


def firstpluslength(lst):
    sum = 0
    sum+=lst[0]
    sum+=len(lst)
    return sum
list = [16,12,15,16,13,13]
print(firstpluslength(list)) #printed sum of lst[0] and len(lst)

def valuesgreaterthansecond(lst):
    sum = 0
    for i in range(0, len(lst)):
        if lst[i] > lst[1]:
            print(lst[i])
            sum+=1
        else:
            continue
    return sum

listylist=[123,15,16,17,9,2,15]
print("There are", valuesgreaterthansecond(listylist), "numbers larger than the second number in listylist")#prints 123, 16, 17


def thislengththatvalue(size, value):
    lst = []
    for i in range(0, size):
        lst.append(value)
    return lst
print(thislengththatvalue(7,4)) #prints new list [4,4,4,4,4,4,4]
