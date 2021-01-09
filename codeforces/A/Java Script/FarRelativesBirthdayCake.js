const farRelativesBirthdayCake = (n,chocolatePieces) => {
    let chocolateCounter=0,counter=0
    // count C from columns
    for (let j=0;j<n;j++){
        chocolateCounter=0
        for (let i=0;i<n;i++){
            if (chocolatePieces[i][j]==='C'){chocolateCounter+=1}
            if (chocolateCounter===2){
                counter+=1
                chocolateCounter=0
            }
        }
    }
    // count C from rows
    for (let j=0;j<n;j++){
        chocolateCounter=0
        for (let i=0;i<n;i++){
            if (chocolatePieces[j][i]==='C'){chocolateCounter+=1}
            if (chocolateCounter==2){
                counter+=1
                chocolateCounter=0
            }
        }
    }  
    return counter
}
console.log(farRelativesBirthdayCake(4,['CC..','C..C','.CC.','.CC.']))
