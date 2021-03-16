const Barcode=(n,m,x,y,grid)=>{
    let black=0,white=0,roadMap=[],count=0
    for (let i=0;i<m;i++){
        black=0
        white=0
        for (let j=0;j<n;j++){grid[j][i]==='#'?black+=1:white+=1}
        roadMap.push([black,white])
    }
    for (let row of roadMap){
             
    }
    return roadMap
}
console.log(Barcode(6, 5, 1, 2,['##.#.','.###.','###..','#...#','.##.#','###..']))
