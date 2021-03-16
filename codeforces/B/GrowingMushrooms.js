const growingMushrooms=(n, t1, t2, k,arr)=>{
    let res=[],a=0,b=0,max=0
    for (let row of arr){
        [a,b]=row
        first=a*t1*(k/100)+b*t1
        second=b*t1*(k/100)+a*t1
        console.log(arr.indexOf(row)+1,first>second? first.toFixed(2):second.toFixed(2))
    }
}
console.log(growingMushrooms(4 ,1 ,1 ,1,[[544 ,397],[280 ,101],[280 ,101],[693 ,970]]))
