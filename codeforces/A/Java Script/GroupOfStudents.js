const groupOfStudents=(m,c,x,y)=>{
    let firstGroup=0,count=0,secondGroup=c.reduce((acc,ele)=>acc+ele,0)
    for (let i=0;i<m;i++){
        firstGroup+=c[i]
        secondGroup-=c[i]
        if (firstGroup>=x&&firstGroup<=y&&secondGroup>=x&&secondGroup<=y){
            count=i+2
            break
        }
    }
    return count
}
console.log(groupOfStudents(2,[2 ,5],3,6))