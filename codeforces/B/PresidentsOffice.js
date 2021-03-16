const presidentsOffice=(n,m,office,grid)=>{
    let count=0,letters=[]
    for(let i=1;i<n-1;i++){
        for(let j=1;j<m-1;j++){
            if (grid[i][j]===office){
                if (grid[i-1][j]!=='.' && grid[i-1][j]!==office && !letters.includes(grid[i-1][j]) ){
                    count+=1
                    letters.push(grid[i-1][j])}
                if (grid[i+1][j]!=='.'&& grid[i+1][j]!==office&& !letters.includes(grid[i+1][j])){
                    count+=1
                    letters.push(grid[i+1][j])}
                if (grid[i][j-1]!=='.'&& grid[i][j-1]!==office&& !letters.includes(grid[i][j-1])){
                    count+=1
                    letters.push(grid[i][j-1])}
                if (grid[i][j+1]!=='.'&& grid[i][j+1]!==office&& !letters.includes(grid[i][j+1])){
                    count+=1
                    letters.push(grid[i][j+1])}
            }
        }
    }
    return count
}
console.log(presidentsOffice(3 ,4 ,'R',
[['G','.','B','.'],
['.','R','R','.'],
['T','T','T','.']]))