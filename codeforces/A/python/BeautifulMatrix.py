lst = []
for i in range(5):
    matrix = input().split()
    lst.append(matrix)
    for j in range(0, 5):
        if(lst[i][j] == "1"):
            print(abs( i-2) + abs(j-2))
