apples = {
    'cox': 17,
    'braeburn': 21,
    'pink lady': 7,
    'royal garla': 12,
    'fuji': 1
    }

cox_stock = apples['cox']
print(f"We have {cox_stock} cox apples.")

for apple in apples.keys():
    print(apple)

for apple, stock_count in apples.items():
    print(f"We have {stock_count} {apple} apples.")

mac_apples = apples.get('macintosh', 1)
print(mac_apples)

for apple, stock_count in apples.items():
    print(f"Key: {apple}\nValue: {stock_count}")

brae_apples = apples.get('braeburn', 0)
print(brae_apples)
