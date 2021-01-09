a = list(input())
count = 0
res = 0
for i in a:
    for j in i:
        if (j == 1):
            count += 1
    if(count >= 2):
        res += 1
    count = 0
print(res)
