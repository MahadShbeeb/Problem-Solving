const letter=(n,m,BobSheet)=>{
    let shadow=".",sheetBody='*',shadowCount=0,shadowColumnsIndexes=[],newRow='',res=[]
    //find the shadow columns indexes
    for (let j=0;j<m;j++){
        shadowCount=0
        for (let i=0;i<n;i++){
            if (BobSheet[i][j]===shadow){shadowCount+=1}
            if (shadowCount===n){shadowColumnsIndexes.push(j)}
        }
    }
    // remove the columns with the shadow indexes
    for (let row of BobSheet){
        newRow=''
        for (let j=0;j<row.length;j++){
            if (!shadowColumnsIndexes.includes(j)){newRow+=row[j]}
        }
        res.push(newRow)
    }
    // remove the rows with the shadow indexes
    for (let row of res){
        if (!row.includes(sheetBody)){res=res.filter(r=>r!==row)}
    }
    return res
}
console.log(letter(3,3,['***','*.*','***']))