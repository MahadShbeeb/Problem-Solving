const dimaAndFriends=(n,fingers)=>{
    let sum=fingers.split(" ").map(num=>{return parseInt(num)}).reduce((acc,ele)=>acc+ele,0)
    let answer=0
    for (let i = 1; i <= 5; ++i){
        if ((sum + i) % (n + 1) != 1){
            answer += 1;
        }
    }
return answer 
}
console.log(dimaAndFriends(2,'3 5'))
