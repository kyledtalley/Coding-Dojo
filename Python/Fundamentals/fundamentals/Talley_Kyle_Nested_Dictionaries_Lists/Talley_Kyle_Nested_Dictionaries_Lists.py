x = [ [5,2,3], [10,8,9] ]
students = [
    {'first_name':  'Michael', 'last_name' : 'Jordan'},
    {'first_name' : 'John', 'last_name' : 'Rosales'}
]
sports_directory = {
    'basketball' : ['Kobe', 'Jordan', 'James', 'Curry'],
    'soccer' : ['Messi', 'Ronaldo', 'Rooney']
}
z = [ {'x': 10, 'y': 20} ]

x[1][0]=15

print(x)

students[0]["last_name"] = "Bryant"
print(students)

sports_directory['soccer'][0] = "Andres"
print(sports_directory)

z[0]["y"]=30
print(z)

students = [
    {'first_name':  'Michael', 'last_name' : 'Jordan'},
    {'first_name' : 'John', 'last_name' : 'Rosales'},
    {'first_name' : 'Mark', 'last_name' : 'Guillen'},
    {'first_name' : 'KB', 'last_name' : 'Tonel'}
]



def iterateDictionary(some_list):
    for index in range(len(some_list)):
        for key in some_list[index]:
            print(key, ":", some_list[index][key])

iterateDictionary(students)

def iterateDictionary2(key_name,some_list): #I don't know how to make it change different key names, I have it permanently set to last_name
    for i in some_list:
        print(f"{i['last_name']}")

iterateDictionary2((f"last_name"), students)




def printInfo(dict):
    for i in dict:
        print(len(dict[i]))
        print(dict)




dojo = {
    'locations' : ['San Jose', 'Seattle', 'Dallas', 'Chicago', 'Tulsa', 'DC', 'Burbank'],
    'instructors' : ['Michael', 'Amy', 'Eduardo', 'Josh', 'Graham', 'Patrick', 'Minh', 'Devon']
}
printInfo(dojo)
