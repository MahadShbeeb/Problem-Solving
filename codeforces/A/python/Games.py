a = list(input())
b = list(input())
res = 0

for i in range(len(a)):
    for j in range(len(b)):
        if a[i] == b[j]:
            res += 1
print(res)
