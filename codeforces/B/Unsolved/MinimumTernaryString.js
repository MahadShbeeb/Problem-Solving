const minimumTernaryString=(str)=>{
    let count=0,s=''
    for (let i=0;i<str.length;i++){i ==='1'?count+=1:s += i}	
	let len = s.length
	let pos = -1
	while (pos + 1 < len && s[pos + 1] == '0') {pos+=1}
	// s.insert(pos + 1, string(cnt, '1'))
    return s+(pos + 1)+String(count,'1')
}
console.log(minimumTernaryString('100210'))
