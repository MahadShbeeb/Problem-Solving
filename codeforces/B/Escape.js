const Escape=(vp, vd, t, f , c)=>{
    let pMiles= vp * t 
    let dMiles=0,jewelries=0
    while(pMiles + vp < c ){
        pMiles +=vp
        dMiles +=vd
        if(pMiles===dMiles){
            jewelries += 1
            dMiles -= vd * f
            pMiles +=  vd * f / vp
        }
    }
    return jewelries
}
console.log(Escape(1,2,1,1,8))
