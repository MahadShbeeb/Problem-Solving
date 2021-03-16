const vasyaAndWrestling=(n,arr)=>{
    let first=0,second=0,a=[],b=[],flag=0
    for (let i=0;i<n;i++){
        if(arr[i]>0) {
            a.push(arr[i])
            first+=arr[i]
            flag=1
        }else{
            b.push(-arr[i])
            second+=-arr[i]
            flag=2
        }
    }
    const comparison=()=>{
        for (let i=0;i<n;i++){
            if (a[i]>b[i]){return 1}
            if (a[i]<b[i]){return 2}
        }  
        return 0 
    }
    let res=comparison()
    if (first>second ){
        return 'first' 
    }else if (first<second){ 
        return 'second'
    }else {
        if (res===1){
            return 'first' 
        }else if (res===2){ 
            return 'second'
        }else{
            if (flag===1){
                return 'first'
            }else{
                return 'second'
            }
        }
    }
}
console.log(vasyaAndWrestling(5,[1,2,-3,-4,3]))
