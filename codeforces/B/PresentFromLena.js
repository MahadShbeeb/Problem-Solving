const presentFromLena=(num)=>{
    let subArray=[],count=0,topHalf=[]
    let len=num*2+1
    let roundedNumber=Math.round(len/2)
    for (let i=0;i<=num;i++){
        subArray=[]
        count=0
        for (let j=0;j<len;j++){
            if(j>=Math.abs(roundedNumber-i)-1 && j<=roundedNumber+i-1) {
                if (j>=roundedNumber-1){
                    subArray.push(count)
                    count-=1
                }else {
                    subArray.push(count)
                    count+=1
                }
            }else {
            subArray.push(' ')
            }
        }
        topHalf.push(subArray.join(""))
    }
    let copyArray=[...topHalf]
    copyArray.reverse().shift()
    return [...topHalf,...copyArray]
}
console.log(presentFromLena(3))
