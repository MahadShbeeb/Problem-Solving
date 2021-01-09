const cakeminator = (r,c,cake) => {
    let col = []
    for (let i=0;i<c;i++){
        let isColEdible = true
        let isOneCakeAvailable = false
        for (let j=0;j<r;j++){
            cake[j][i]=="."?isOneCakeAvailable = true:cake[j][i]=="S"?isColEdible = false:''
        }      
        if(isOneCakeAvailable && isColEdible){
            col.push(i)
        }  
    }

    let row = []
    let allRowsEdibleCount = 0
    for (let i=0;i<r;i++){
        let thisRowEdibleCount = 0
        let isRowEdible = true
        let isOneCakeAvailable = false
        for (let j=0;j<c;j++){
            if(cake[i][j]=="." &&  col.includes(j)===false){
                isOneCakeAvailable = true
                thisRowEdibleCount+=1
            }else if(cake[i][j]=="S"){
                isRowEdible = false
            }
        }
        if(isOneCakeAvailable && isRowEdible){
        row.push(i)
        allRowsEdibleCount += thisRowEdibleCount
    }   
        }
      
    return col.length*r + allRowsEdibleCount
}
console.log(cakeminator(3, 4, [
    ['S', '.', '.', '.'],
    ['.', '.', '.', '.'],
    ['.', '.', 'S', '.']
]))