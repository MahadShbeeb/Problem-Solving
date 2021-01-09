const brain_sPhotos = (photosColor) => {
    photosColor.map((photo) => {
        photo.includes('G') || photo.includes('B') || photo.includes('W') && !photo.includes('C') && !photo.includes('M') && !photo.includes('Y') ? console.log('#Black&White') :
            photo.includes('C') || photo.includes('M') || photo.includes('Y') ? console.log('#Color') : ' '
    })
}
console.log(brain_sPhotos([
    ['W', 'W'],
    ['W', 'W'],
    ['B', 'B']
]))