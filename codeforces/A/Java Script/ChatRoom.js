const chatRoom=(str)=>{
    let word = "hello",index = 0
    for (let i=0;i<str.length;i++){
        if(index==5){return "YES"}
        if(str[i]==word[index]){index+=1}
    }   
    return index<5?"NO":"YES"
    // return [... new Set(hello.split(""))].length>=4?'YES':'NO'
}
console.log(chatRoom('alhelloddd'))

