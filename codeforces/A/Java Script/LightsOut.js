const lightsOut=(grid)=>{
    console.log((grid[0][0] + grid[0][1] + grid[1][0]) % 2 == 0 ? "1" : "0") 
    console.log((grid[0][0] + grid[0][1] + grid[0][2] + grid[1][1]) % 2 == 0 ? "1" : "0") 
    console.log((grid[0][1] + grid[0][2] + grid[1][2]) % 2 == 0 ? "1" : "0") 
    console.log((grid[0][0] + grid[1][0] + grid[1][1] + grid[2][0]) % 2 == 0 ? "1" : "0") 
    console.log((grid[0][1] + grid[1][0] + grid[1][1] + grid[1][2] + grid[2][1]) % 2 == 0 ? "1" : "0") 
    console.log((grid[0][2] + grid[1][1] + grid[1][2] + grid[2][2]) % 2 == 0 ? "1" : "0") 
    console.log((grid[1][0] + grid[2][0] + grid[2][1]) % 2 == 0 ? "1" : "0") 
    console.log((grid[1][1] + grid[2][0] + grid[2][1] + grid[2][2]) % 2 == 0 ? "1" : "0") 
    console.log((grid[1][2] + grid[2][1] + grid[2][2]) % 2 == 0 ? "1" : "0") 
}
console.log(lightsOut([[1,0,1],[8,8,8],[2,0,3]]))
