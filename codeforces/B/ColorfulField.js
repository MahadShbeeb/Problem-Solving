const colorfulField=(n, m, k, t,blackCells,coloredCells)=>{
    let blackCellsCount=0,totalCells=0,cellIndex=0
    for (let coloredCell of coloredCells){
        blackCellsCount = countTheBlackCells(blackCells,coloredCell)
        totalCells = (coloredCell[0]-1) * m + coloredCell[1]
        cellIndex = totalCells - blackCellsCount
        if (checkIfItIsaBlackCell(blackCells,coloredCell)){
            console.log('Waste')
        }else if (cellIndex % 3 === 0){
            console.log('Grapes')
        }else if (cellIndex % 3 === 1){
            console.log('Carrots')
        }else{
            console.log('Kiwis')
        }
    }
   
    
}
const countTheBlackCells=(cells,theCell)=>{
    let x=0,y=0,counter=0
    for (let cell of cells){
        [x,y]=cell
        if (theCell[0] > x || theCell[0] === x && theCell[1]>y){
            counter+=1
        }
    } 
    return counter
}
const checkIfItIsaBlackCell = (cells,theCell)=>{
    let x=0,y=0
    for (let cell of cells){
        [x,y]=cell
        if (theCell[0] === x && theCell[1]===y){
            return true
        }
    } 
    return false
}
console.log(colorfulField(4 ,5 ,5 ,6,[[4, 3],[1, 3],[3, 3],[2 ,5],[3, 2]],
[[1, 3],[1, 4],[2, 3],[2, 4],[1, 1],[1, 1]]))


 // for (let i=0;i<n;i++){
    //     grid[i]=[]
    //     for (let j=0;j<m;j++){
    //         grid[i][j]='*'
    //     }
    // }
    // for (let blackCell of blackCells){
    //     [a,b]=blackCell
    //     grid[a-1][b-1]='Wasted'
    // }
    // for (let i=0;i<n;i++){
    //     for (let j=0;j<m;j++){
    //         if(count>2){count=0}
    //         if(grid[i][j]!=='Wasted'){
    //             grid[i][j]=fruites[count]
    //             count+=1
    //         }
    //     }
    // }
    // for (let coloredCell of coloredCells){
    //    [c,d]=coloredCell
    //    console.log(grid[c-1][d-1])
    // }