const antonAndDigits=(k2, k3, k5 , k6)=>{
    let n256 = Math.min(k2, Math.min(k5, k6))
	let n32 = Math.min(k3, k2 - n256)
	return 32 * n32 + 256 * n256 
}
console.log(antonAndDigits(5 ,1 ,3 ,4))
