const littleElephantAndMagicSquare=(grid)=>{
    let sum=(grid[0][1]+grid[0][2]+grid[1][0]+grid[1][2]+grid[2][0]+grid[2][1])/2
    grid[0][0]=sum-grid[0][1]-grid[0][2]      
    grid[1][1]=sum-grid[1][0]-grid[1][2]  
    grid[2][2]=sum-grid[2][0]-grid[2][1] 
    return grid
}
console.log(littleElephantAndMagicSquare([[0 ,3 ,6],[5 ,0 ,5],[4, 7, 0]]))
