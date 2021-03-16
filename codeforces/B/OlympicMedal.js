const olympicMedal=(n,x,m,y,k,z,A,B)=>{
    let r1=0,p1=0,p2=0,max=0,r2=0
    for (let i=0;i<n;i++){
        r1=x[i]
        for (let j=0;j<m;j++){
            p1=y[j]
            for (let l=0;l<k;l++){
                p2=z[l]
                r2=(B*r1*r1*p1)/(A*p2)+(B*p1)
                if (max<r2){max=r2}
            }
        }
    }
    return Math.sqrt(max).toFixed(10)
}
console.log(olympicMedal(4 ,[2 ,3 ,6 ,4],2,[1,2],3,[10 ,6 ,8],2, 1))