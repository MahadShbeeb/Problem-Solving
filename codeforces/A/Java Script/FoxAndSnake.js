const foxAndSnake=(n,m)=>{
    let snakeBody = "#",spaceBody=".",isRight = true
    let snakeBodies = snakeBody.repeat(m)
    let emptyCells =  spaceBody.repeat(m-1)
    for (let i=0;i<=n;i++){
        if (i % 2 === 0){console.log(snakeBodies)}
        else{
            isRight?console.log(emptyCells + snakeBody):console.log(snakeBody + emptyCells)
            isRight = !isRight
        }      
    }
}
console.log(foxAndSnake(5,5))