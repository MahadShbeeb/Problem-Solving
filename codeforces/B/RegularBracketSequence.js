const regularBracketSequence=(str)=>{
    let i=0,count=0
    while(i<str.length){
        if(str[i]==='('){
            str=str.substring(i)
            if (str.includes(')')){
                str[i]='.'
                str[str.lastIndexOf(')')]='.'
                count+=1
            }
        }
        i+=1
    }
    return count*2
}
console.log(regularBracketSequence('()()'))
