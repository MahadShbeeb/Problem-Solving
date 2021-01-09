const amrAndMusic=(n,k,days)=>{
let sum=0,a=[]
for (let i=0;i<days.length;i++){
    if(sum+days[i]<=k){
        sum+=days[i]
        a.push(days.indexOf(days[i])+1)
        days[days.indexOf(days[i])]=0
    }else if (k<sum){
        sum=days[i]
    }
}
console.log(a.length)
console.log (...a)
}
console.log(amrAndMusic(5 ,6,[4, 3, 1, 1, 2]))
