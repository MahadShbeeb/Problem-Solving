const twoButtons=(n,m)=>{
    let redButtonCounter=0,blueButtonCounter=0 
    if (n===m){return 0}
    if (n>m){
        while(n!==m){
            n-=1
            blueButtonCounter+=1
        }
    }else{
        while(n!==m){
            if (n*2<=m){
                n*=2
                redButtonCounter+=1
            }else{
                n-=1
                blueButtonCounter+=1
            }
        }
    }
    return redButtonCounter+blueButtonCounter
}
console.log(twoButtons(6 ,12))
