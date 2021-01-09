# a = [1 ,2 ,3 ,4 ,5 ,6, 7]
n = int(input())
a = list()
for i in range(0, n):
    ele = int(input())
    a.append(ele)

s_count = d_count = 0
done = False
while(len(a)-1 > 0):
    if(done == False):
        if(a[0] > a[-1]):
            s_count += a[0]
            a.pop(0)
            done = True
        elif(a[0] <= a[-1]):
            s_count += a[-1]
            a.pop(-1)
            done = True
    if (done == True):
        if(a[0] > a[-1]):
            d_count += a[0]
            a.pop(0)
            done = False
        elif(a[0] <= a[-1]):
            d_count += a[-1]
            a.pop(-1)
            done = False
if (len(a)%2==0):
    print(s_count,d_count)
else:
    print(s_count+a[0], d_count)
