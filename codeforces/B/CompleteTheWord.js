const completeTheWord=(str)=>{
    let alphs=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
    if (!str.includes('?')){return -1}
    str=str.split("")
    for (let i=0;i<str.length;i++){
        if (str[i]==='?'){
            for (let j of alphs){
                if (!str.includes(j)){
                    str[i]=j
                    break
                }
            }
        }
    }
    return str.join("")
}
console.log(completeTheWord('??????????????????????????'))
