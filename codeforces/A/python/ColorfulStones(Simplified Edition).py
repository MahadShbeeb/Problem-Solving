a = list(input())
b = list(input())
res = j = 0
for i in range(len(b)):
    if a[j] == b[i]:
        res += 1
        j += 1
res += 1
print(res)
