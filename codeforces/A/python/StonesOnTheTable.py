count = 0
n = int(input())
a = str(input())
for i in range(0, len(a)-1):
    if a[i] == a[i+1]:
        count += 1
print(count)
