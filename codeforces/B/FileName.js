const fileName=(n,str)=>{
    let count=0
    for (let i=0;i<str.length;i++){
        if (str.substring(i,i+3)==='xxx'){
           count+=1
        }
    }
    return count
}
console.log(fileName(5,'xxoxx'))
