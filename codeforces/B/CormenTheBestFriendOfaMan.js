const cormenTheBestFriendOfaMan=(n,k,walks)=>{
    let i=0,sum=walks.reduce((ele,acc)=>acc+ele)
    while(i<n-1){
        walks[i+1]=walks[i+1]>k-walks[i]?walks[i+1]:k-walks[i]
        i+=1
    }
    console.log(walks.reduce((ele,acc)=>acc+ele)-sum)
    return walks
}
console.log(cormenTheBestFriendOfaMan(3, 5,[ 2 ,0 ,1]))
