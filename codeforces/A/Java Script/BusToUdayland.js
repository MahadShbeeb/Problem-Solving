const busToUdayland = (bus) => {
    let include = false
    for (let pair = 0; pair < bus.length; pair++) {
        if (bus[pair][0].includes('OO')) {
            bus[pair][0] = bus[pair][0].replace('OO', '++')
            include = true
            break
        }
    }
    return include ? ['YES', bus] : 'NO'
}
console.log(busToUdayland([
    ['OO | OX'],
    ['XO | XX'],
    ['OX | OO'],
    ['XX | OX'],
    ['OO | OO'],
    ['OO | XX']
]))