const oRInMatrix=(n,m,B)=>{
    const flip=(arr,RowIndex,colIndex)=>{
    for (let i=0;i<n;i++){arr[i][colIndex]=1}
    for (let j=0;j<m;j++){arr[RowIndex][j]=1}
    return arr
    }
    const clearRowCol=(arr,RowIndex,colIndex)=>{
    for (let i=0;i<n;i++){arr[i][colIndex]=0}
    for (let j=0;j<m;j++){arr[RowIndex][j]=0}
    return arr
    }
    let A=[],C=[]
    for (let i=0;i<n;i++){
        A[i]=[]
        C[i]=[]
    for (let j=0;j<m;j++){
        A[i][j]=1 
        C[i][j]=0 
    }
    }

    for (let i=0;i<n;i++){
        for (let j=0;j<m;j++){
            if(B[i][j]===0){clearRowCol(A,i,j)} 
        }
    }
    for (let i=0;i<n;i++){
        for (let j=0;j<m;j++){
            if (A[i][j]){flip(C,i,j)}
        }
    }
    for (let i=0;i<n;i++){
        for (let j=0;j<m;j++){
            if (C[i][j]!==B[i][j]){return 'NO'}
        }
    }
    console.log('YES')
    return A
}
console.log(oRInMatrix(2, 3,[[1, 1,1],[1, 1,1]]))