const kanaAndDragonQuestGame=(h,n,m)=>{
    while (h>0 && n>0 && h/2+10<h ){
        h=Math.floor(h/2)+10
        n-=1
    }
    return h<=m*10?"YES":"NO"
}
console.log(kanaAndDragonQuestGame(100 ,3 ,4))
