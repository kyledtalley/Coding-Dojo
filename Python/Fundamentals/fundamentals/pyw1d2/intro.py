list = ['string', 20, False, [], [], {'first name':'Cool'}]

list.append('new value')
print(list[len(list)-1])

list[1] = 25

list.pop(5)

for i in list:
    print(i)


dictionary = {
    'key':20,
    'key2':'string',
    'complex_key':['string',20,40]
}

dictionary['key']=20
print(dictionary['key2'])
dictionary['key2']='updated string'

del dictionary['key2']
#dictionary.pop['key2']
