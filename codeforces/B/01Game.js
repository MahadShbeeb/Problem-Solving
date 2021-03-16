const game=(n,strings)=>{
    let min=0,zeroes=0,ones=0
    for (let string of strings){
        zeroes=0
        ones=0
        for (let letter of string){
            letter==='0'?zeroes+=1:ones+=1}
            min = Math.min(zeroes, ones)
            console.log(min%2==0?'NET':'DE')
    }
}
console.log(game(3,['01','1111','0011']))
 // while(string.includes('01')||string.includes('10')){
        //     if (string.includes('10')){
        //         string=string.replace('10','')
        //         res+=1
        //     }
        //     if (string.includes('01')){
        //         string=string.replace('01','')
        //         res+=1
        //     }
        // }