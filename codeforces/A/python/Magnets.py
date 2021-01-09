n = int(input())
a = list()
for i in range(0, n):
    ele = int(input())
    a.append(ele)

count = 0
for i in range(len(a)-1):
    if (a[i] == a[i+1]):
        count += 1
print(count)
