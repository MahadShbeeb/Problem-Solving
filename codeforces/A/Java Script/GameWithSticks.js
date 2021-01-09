const gameWithSticks=(n,m)=>{
    // let i=0
    // n>m?i=m:i=n
    // i%2===0?'Malvika':'Akshat'
    let winner=false,sticks=n*m
    while(sticks>0){
        sticks>3?sticks-=3:sticks=0
        winner=!winner
   }
   console.log(winner?'Akshat':'Malvika')
}
console.log(gameWithSticks(3 ,3))
