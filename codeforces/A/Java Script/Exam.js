const exam=(num)=>{
    console.log(num%2==0?num:num-1)
    let pairs=[]
    for (let i=1;i<=num;i++){
        for (let j=Math.floor(num/2)+1;j>=1;j--){
            if (Math.abs(i-j)>1){
                if(!pairs.includes(i)&& !pairs.includes(j)) {pairs.push(i,j)}
            }
        }
    }
    console.log(...pairs)
}
console.log(exam(3))