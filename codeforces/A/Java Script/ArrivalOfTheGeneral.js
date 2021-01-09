const  arrivalOfTheGeneral=(n,soldiers)=>{
    soldiers=soldiers.split(" ")
    let max=soldiers.sort((a,b)=>a-b)[soldiers.length-1].toString()
    let min=soldiers.sort((a,b)=>a-b)[0].toString()
    n-=1
    return soldiers.indexOf(max) + (n - 1 - soldiers.indexOf(min)) - (soldiers.indexOf(min) < soldiers.indexOf(max) ? 1 : 0)
}
console.log(arrivalOfTheGeneral(7,'10 10 58 31 63 40 76'))