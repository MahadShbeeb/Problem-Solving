x = int(input())
y = int(input())
probility = (6-max(x, y))+1
if probility % 2 == 1:
    if(probility == 3):
        print("1/2")
    else:
        print(probility)
else:
    if(probility == 4):
        print("2/3")
    else:
        print(6/probility)
