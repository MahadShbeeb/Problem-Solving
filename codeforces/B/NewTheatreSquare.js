const newTheatreSquare=(n,m,x,y,grid)=>{
    let twoDotsCount=0,oneDotsCount=0,white='.'
    for (let i=0;i<n;i++){
        for (let j=0;j<m;j++){
            if (grid[i][j]===white && grid[i][j+1]===white){
                twoDotsCount+=1
            }
            if (grid[i][j]===white ){
                oneDotsCount+=1
            }
        }
    }
    return Math.min(oneDotsCount * x , (oneDotsCount - (twoDotsCount *2)) * x + twoDotsCount * y)
}
console.log(newTheatreSquare(1, 1, 10, 1,['.']))
