const fancyFence = (angels) => {
    let equation = []
    angels.map((angel) => {
        equation.push(Math.round(2 / (1 - (angel / 180)) * 100) % 100 === 0 ? 'Yes' : 'No')
    });
    return equation
}

console.log(fancyFence([30, 60, 90]))