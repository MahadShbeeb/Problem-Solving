const marks=(n,m,marks)=>{
    let answer=0
    if (n===1){return n}
    for (let i=0;i<n;i++){
        let tmp_answer = 0
        for (let col=0;col<m;col++){
            let isBest = 1
            for (let j=0;j<n;j++){
                if (marks[j][col] > marks[i][col]){isBest = 0}        
            }  
            if (isBest ===1){tmp_answer = 1}
        }
        if (tmp_answer ===1){answer += 1}    
    }
    console.log(answer)
}

console.log(marks(3 ,5,[[9,1,7,2,8],
                        [1,1,8,2,8],
                        [1,1,1,1,1]]))
