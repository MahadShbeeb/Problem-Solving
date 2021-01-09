const HQ9plus=(str)=>{
    if (str.includes('H')||str.includes('Q')||str.includes('9')||str.includes('+')){
       return 'YES'
    }
    return 'NO'
}
console.log(HQ9plus('Codeforces'))