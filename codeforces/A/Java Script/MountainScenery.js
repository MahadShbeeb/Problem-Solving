const mountainScenery=(n,k,arr)=>{
    for(let i=0;i<=2*n;i++){  
        if(k && i%2==1 && arr[i]-arr[i-1]>1 && arr[i]-arr[i+1]>1){  
            arr[i]-=1;  
            k-=1;  
        }  
    }
    return arr
}
console.log(mountainScenery(1 ,1,[0 ,2 ,0]))
