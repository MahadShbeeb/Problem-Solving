const littleGirlAndGame=(str)=>{
    const palindrome=(s)=>{
        let count=0
        for (let i=0;i<Math.floor(s.length/2);i++){
            if (s[i]===s[s.length-1-i]){
                count+=1}
        }
        let len =s.length%2===0?s.length/2:(s.length-1)/2
        return count===len?true:false
    }
    if (palindrome(str)){return 'First'}
    for (let i=0;i<str.length;i++){
        if(palindrome(str.replace(str[i],''))){return i%2===0?'First':'Second'}
    }
    return false
}
console.log(littleGirlAndGame('abca'))
