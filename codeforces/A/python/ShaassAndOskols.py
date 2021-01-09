a = [10, 10, 10, 10, 10]
killed = [[2, 5], [3, 13], [2, 12], [1, 13], [4, 6]]
c=0
for i in killed:
    box_num = i[0]-1
    bird_num = i[-1]-1
    for j in range(0, a[box_num]):
        if(box_num == 0 and j > bird_num):
            a[box_num+1] += 1
        elif(box_num == 0 and j < bird_num):
            a[box_num] -= 1
        elif(j < bird_num and a[box_num] > 0):
            a[box_num-1] += 1
        elif(j > bird_num and a[box_num] > 0):
            a[box_num+1] += 1
        elif(j == bird_num):
            continue
    a[box_num] = 0
    print(a)
