n = int(input())
a = list()
for i in range(0, n):
    ele = int(input())
    a.append(ele)
hired = 0
untreated = 0
for i in a:
    if(i > 0):
        hired += i
    elif(i < 0 and hired > 0):
        hired -= 1
    elif(i < 0 and hired <= 0):
        untreated += 1
print(untreated)
