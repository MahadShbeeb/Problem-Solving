b = int(input())
d = int(input())
n = [1]
jucier_size =count = 0
for i in n:
    if i < b and jucier_waste < d:
        jucier_waste += i
    elif i > b:
        break
    if  jucier_waste >= d:
        jucier_waste = 0
        count += 1
print(count)
