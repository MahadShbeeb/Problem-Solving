const badPrices=(n,nums)=>{
    let min_price_on_right=0,bad_prices=0
    for (let arr of nums){
        min_price_on_right = arr[arr.length-1]
        bad_prices = 0
        for (let i=arr.length-2;i>-1;i--){
            arr[i] > min_price_on_right?bad_prices += 1:min_price_on_right = arr[i]
        }
        console.log(bad_prices)
    }
}
console.log(badPrices(5,[[3, 9 ,4 ,6 ,7 ,5],[1000000],[2 ,1],[31, 41, 59 ,26 ,53 ,58 ,97 ,93 ,23 ,84],[3 ,2 ,1, 2, 3 ,4 ,5]]))
// 3 0 1 8 2