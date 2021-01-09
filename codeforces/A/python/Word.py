string = str(input())
lower = upper = 0
for i in list(string):
    if i.islower():
        lower += 1
    else:
        upper += 1
if(upper > lower):
    print(string.upper())
else:
    print(string.lower())
