const autocomplete=(s,n,visitedPages)=>{
    let min=1000000,visitedPage=''
    for (let page of visitedPages){
        if (page.substring(0,s.length).includes(s) && min>page.length){
            min=page.length
            visitedPage=page
        }
    }
    return min===1000000?s:visitedPage
}
console.log(autocomplete('find',4,['fondfind','fondfirstof','fondit','fand']))

