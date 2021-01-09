k = int(input())
r = int(input())
for i in range(100):
    num=i*k
    last=list(str(num))[-1]
    if(num!=0 and r == int(last)):
        print(i)
        break
   

