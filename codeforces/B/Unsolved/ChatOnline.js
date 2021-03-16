const chatOnline=(p,q,l,r,littleX,littleZ)=>{
    let a=0,b=0,c=0,d=0,max=0,index=0
    for (let x of littleX){
        for (let z of littleZ){
            for (let j=l;j<=r;j++){
                [a,b]=x
                [c+j,d+j]=z
                if (c+j>b){
                    if(max<Math.min(b,d+j)-Math.max(a,c+j)){
                        max=Math.min(b,d+j)-Math.max(a,c+j)
                        index=j
                    }
                }
            }
        }
    }
    return index
}
console.log(chatOnline(2,3,0,20,[[15,17],[23,26],[1,4]],[[7,11],[15,17]]))
