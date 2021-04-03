const Lecture=(lines,str)=>{
    let obj={},string=''
    for (let line of lines){obj[line.split(" ")[0]]=line.split(" ")[1]}
    for (word of str.split(" ")){
        obj[word].length < word.length ? string += obj[word] + ' ' : string += word + ' '
    }
    return string
}
console.log(Lecture(['codeforces codesecrof','contest round',
'letter message'],'codeforces contest letter contest'))
//codeforces round letter round

