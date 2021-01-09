const littleElephantAndRozdil=(n,time)=>{
    time=time.split(" ").map(t=>parseInt(t))
    let min=10000000,count=0,index=0
    for (let i = 1; i <= n; ++i){
        if (time[i] < min){
            min = time[i];
            index = i+1;
            count = 1;
        }else if (time[i] === min){
            count += 1;
        }
    }
    count ===1?console.log(index):console.log('Still Rozdil')
}
console.log(littleElephantAndRozdil(7,'7 4'))