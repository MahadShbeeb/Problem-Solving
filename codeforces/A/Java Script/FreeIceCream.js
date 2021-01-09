const freeIceCream = (iceCreamArray) => {
    let iceCreamCount = 7,
        childCounter = 0;
    iceCreamArray.map((iceCream) => {
        if (iceCream.split(" ")[0] == "+") {
            iceCreamCount += parseInt(iceCream.split(" ")[1])
        } else { 
            // -
            if (iceCreamCount > parseInt(iceCream.split(" ")[1])) {
                iceCreamCount -= parseInt(iceCream.split(" ")[1])
            } else {
                childCounter += 1;
            }
        }
    });
    return [iceCreamCount, childCounter].join()
}
console.log(freeIceCream(['+ 5', '- 10', '- 20', '+ 40', '- 20']))