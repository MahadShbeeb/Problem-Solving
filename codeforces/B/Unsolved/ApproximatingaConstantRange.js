const approximatingAConstantRange=(n,arr)=>{
    let prev=0,count=1,sizes=[]
    let curr=arr[0]
    let currentContext=new Set()
    for (let i=0;i<n;i++){
        prev=curr
        curr=arr[i+1]
        if (i+1>=n && [...currentContext].includes(prev)){count+=1}
        if (currentContext.size<2 ){  
            currentContext.add(prev)
            currentContext.add(curr)
            count+=1
        }else if (currentContext.size===2  && [...currentContext].includes(curr)){  
            currentContext.add(curr)
            count+=1
        }else{
            sizes.push(count);
            let a=[...currentContext]
            a.shift()
            currentContext=new Set([...a])
            count=0
        }
    }
    return sizes.sort()[sizes.length-1]+1
}
console.log(approximatingAConstantRange(11,[5 ,4, 5, 5, 6, 7, 8, 8 ,8 ,7 ,6]))
