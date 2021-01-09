const vitaliyAndPie=(n,s)=>{
    let count=0
    for (let i=0;i<2*(n-1);i++){
        if (s[i]===s[i].toLowerCase()){
            if(!(s.substring(i+1,2*(n-1)).includes(s[i].toUpperCase())) ){count+=1}
        }
    }
    return count
}
console.log(vitaliyAndPie(5,'xYyXzZaZ'))

