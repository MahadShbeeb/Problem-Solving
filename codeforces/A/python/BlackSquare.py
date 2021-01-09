a = list()
for i in range(0, 4):
    ele = int(input())
    a.append(ele)
boxes = str(input())
waste = 0
for box in boxes:
    waste += a[int(box)-1]
print(waste)
