const collectingPackages=(steps)=>{
    let x=0,y=0,str=''
    for (let step of steps){
        if ((step[0] > x && step[1] < y )|| (step[0] < x && step[1] > y))
            return "NO"
        x=step[0]
        y=step[1]
    }
    x=0
    y=0
    for (let step of steps){
        str+='R'.repeat(step[0]>x?step[0]-x:0)
        str+='U'.repeat(step[1]>y?step[1]-y:0)
        x=step[0]>x?step[0]:x
        y=step[1]>y?step[1]:y

    }
    console.log('YES')
    return str
}
console.log(collectingPackages([[1 ,3],[1 ,2],[3,3],[5,5],[4,3]]))

