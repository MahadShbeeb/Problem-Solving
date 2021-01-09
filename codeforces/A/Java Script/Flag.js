const flag=(n,m,flags)=>{
    let f=1
    for (let i=1;i<n;i++){
        for (let j=0;j<m;j++){
            if (flags[i][j]===flags[i-1][j]){
                f=0
                break
            }
        }
    }
    for(i=0;i<n;i++){
        for(j=1;j<m;j++){
            if(flags[i][j]!=flags[i][j-1]){
                f=0;
                break;
            }
        }
    }
    return f===1?'YES':'NO'
}
console.log(flag(3 ,3,['000','111','222']))