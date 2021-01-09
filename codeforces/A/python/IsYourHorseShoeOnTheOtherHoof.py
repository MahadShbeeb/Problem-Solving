a = list()
for i in range(0, 4):
    ele = int(input())
    a.append(ele)
res = 0
for i in range(len(a)-1):
    if a[i] == a[i+1]:
        res += 1
print(res)
