function pickLearner(inputAr, n) {
    let cloneInput = [...inputAr];
    let selectTabLearner = [];
    for (let i = 0; i < n; i++) {
        const index = Math.random() * (cloneInput.length - 1) | 0;
        selectTabLearner.push(cloneInput[index]);
        cloneInput.splice(index, 1);
    }

    return selectTabLearner;
}

let testAr = ["Emre", "Eric", "Gilles", "Jamie", "Jason",
    "Jeremy", "Martin", "Rayane", "Rayhan", "Ricardo",
    "Steffanie", "Sébastien", "Tanguy", "Tibaud", "Zakaria"];

console.log(pickLearner(testAr, 5));