const romaAndLuckyNumbers = (n,k,s) => {
    let count=0
    s=s.split(" ")
    for (let i = 0; i < s.length;i++){
        let lucky=0
        for (let j=0;j<s[i].length;j++){
            if (s[i][j] == '4' || s[i][j] == '7')
                lucky += 1
            }
            if (lucky <= k)
            count += 1;
        }    
    return count  
}
console.log(romaAndLuckyNumbers(3 ,4,'1 2 4'))