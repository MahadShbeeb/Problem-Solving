const postcardsAndPhotos=(postsCards)=>{
    let posts=0,cards=0,closet=0
    for (let i of postsCards){
        if(i==='C'){
            posts=0
            cards+=1
            if(cards===5){
               closet+=1 
               cards=0
            }
        }
        else if (i==='P'){
            cards=0
            posts+=1
            if(posts===5){
               closet+=1 
               posts=0
            }
    }
    }
    for (let i=0;i<postsCards.length-1;i++){
        if(postsCards[i]!==postsCards[i+1]){closet+=1}
    }
    return closet+cards%5+posts%5
}
console.log(postcardsAndPhotos('CPCPCPC'))
