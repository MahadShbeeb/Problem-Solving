const hopscotch=(a,x,y)=>{
    if (y % a != 0) {
        let h = Math.ceil( y / a)
        if (h > 1 && (h & 1)) {
            if (x > -1 * a && x < 0) {return ((h - 1) / 2) * 3} 
            else if (x > 0 && x < a) {return 1 + ((h - 1) / 2) * 3}
        } 
        else {
            if (x >  -1 * a / 2 && x <  a / 2) {
                if (h == 1) {return 1} else {return 2 + ((h - 2) / 2) * 3}
            }
        }
    }
    return -1
}
console.log(hopscotch(3 ,0 ,10))
