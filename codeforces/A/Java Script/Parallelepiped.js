const parallelepiped=(a,b,c)=>{
    return (Math.sqrt(a*b/c)+Math.sqrt(a*c/b)+Math.sqrt(b*c/a))*4
}
console.log(parallelepiped(4,6,6))
