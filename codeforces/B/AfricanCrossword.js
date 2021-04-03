const africanCrossword=(n,m,grid)=>{
    let itemsIndexesToRemove=[]
    // declare the itemsIndexesToRemove array
    for(let i = 0; i < n; i++){
        itemsIndexesToRemove[i]=[]
        for(let j = 0; j < m; j++){
            itemsIndexesToRemove[i][j]=0
        }
    }
    // loop for every element in the array and its column and row
    for(let i = 0; i < n; i++){
        for(let j = 0; j < m; j++){
            let flag = 0
            for(let k = j+1; k < m; k++){
                if(grid[i][k]==grid[i][j]){
                    itemsIndexesToRemove[i][k] = 1
                    flag = 1
                }
            }
            for(let k = i+1; k < n; k++){
                if(grid[k][j]==grid[i][j]){
                    itemsIndexesToRemove[k][j] = 1
                    flag = 1
                }
            }
            if(flag==1) 
                itemsIndexesToRemove[i][j] = 1
        }
    }
    let str=''
    for(let i = 0; i < n; i++){
        for(let j = 0; j < m; j++){
            if(itemsIndexesToRemove[i][j]==0) 
            str+=grid[i][j]
        }
    }
    return str
}
console.log(africanCrossword(5,5,[
['f','c','o','f','d'],
['o','o','e','d','o'],
['a','f','a','o','a'],
['r','d','c','d','f'],
['e','o','f','s','f']
]))
