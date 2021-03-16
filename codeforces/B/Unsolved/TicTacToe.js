const TicTacToe=(grid)=>{

}
const winning=(a)=>{
    for (let row of a){
        if (row.split("").every((ele)=>ele ==='O')){return 'O'}
        else if (row.split("").every((ele)=>ele ==='X')){return 'X'}
    }

    let XCounter=0,OCounter=0
    for (let i=0;i<3;i++){
        XCounter=0
        OCounter=0
        for (let j=0;j<3;j++){
            if (a[j][i]==='X'){XCounter+=1}
            if (a[j][i]==='O'){OCounter+=1}
        }
        if (XCounter===3){return 'X'}
        if (OCounter===3){return 'O'}
    }
        
    let i=0,j=0
    if (a[i][j] === a[i+1][j+1] === a[i+2][j+2] ==='X'){return 'X'}
    if (a[i][j] === a[i+1][j+1] === a[i+2][j+2] ==='O'){return 'O'}
    if (a[i][3-i] === a[i+1][3-i+1] === a[i+2][3-i+2] ==='X'){return 'X'}
    if (a[i][3-i] === a[i+1][3-i+1] === a[i+2][3-i+2] ==='O'){return 'O'}
        
}
console.log(winning(['X.O','OO.','XXX']))
