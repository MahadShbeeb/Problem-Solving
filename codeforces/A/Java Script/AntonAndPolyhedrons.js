const antonAndPolyhedrons = (numbersOfPolyhedrons, polyhedrons) => {
    let polys = {
        'Icosahedron': 20,
        'Cube': 6,
        'Tetrahedron': 4,
        'Octahedron': 8,
        'Dodecahedron': 12,
    }
    let sum = 0
    Object.keys(polys).map((poly) => {
        polyhedrons.map((polyhedron) => {
            sum += poly.toLowerCase() === polyhedron.toLowerCase() ? polys[poly] : 0
        })
    })
    return sum
}
console.log(antonAndPolyhedrons(3, ['Octahedron', 'Octahedron', 'Dodecahedron']))