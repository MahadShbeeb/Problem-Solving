const playingWithDice = (a,b) => {
   let firstWin=0,secondWin=0,draw=0;
    for(let i=1;i<=6;i++){
        Math.abs(i-a)<Math.abs(i-b)?firstWin++:Math.abs(i-a)>Math.abs(i-b)?secondWin++:draw++
    }
   return firstWin+" "+draw+" "+secondWin
}
console.log(playingWithDice(2, 4))