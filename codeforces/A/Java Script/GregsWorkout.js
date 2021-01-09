const gregsWorkout = (exercises) => {
    let chests = 0
    let biceps = 0
    let backs = 0
    for (let i = 0; i < exercises.length; i++) {
        i % 3 === 0 ? chests += exercises[i] : i % 3 === 1 ? biceps += exercises[i] : backs += exercises[i]
    }
    return chests > Math.max(biceps, backs) ? 'chest' : biceps > Math.max(chests, backs) ? 'biceps' : 'back'

}
console.log(gregsWorkout([2, 8]))