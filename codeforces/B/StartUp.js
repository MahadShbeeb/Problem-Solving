const startUp=(companyName)=>{
    let mirrorLetters='AHIYUXOTVMW'
    if ( companyName.length === 1 ){ 
        if (mirrorLetters.includes(companyName))
            return 'YES' 
        else{
            return 'NO' 
        }
    }
    let left_char="",right_char=""
    for (let i=0;i<(companyName.length/2)+1;i++){
        left_char = companyName[i]
        right_char = companyName[companyName.length - i - 1]
        if ( !mirrorLetters.includes(left_char) || !mirrorLetters.includes(right_char) || left_char != right_char)
            return "NO"
        }
    return "YES"
}
console.log(startUp('XO'))
