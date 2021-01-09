const overlappingRectangles = (x1l, y1l, x1r, y1r, x2l, y2l, x2r, y2r) => {
    return (Math.max(x1l, x2l) < Math.min(x2r, x1r)) && (Math.max(y1l, y2l) < Math.min(y1r, y2r)) ?
        console.log(y1l, y2l, x2r, x1r) : console.log("No Overlapping")
}
console.log(overlappingRectangles(0, 20, 100, 120, 80, 0, 500, 60))