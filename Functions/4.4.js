function pickLearner(inputAr, n){
    inputAr = ["Emre","Eric","Gilles","Jamie","Jason",
    "Jeremy","Martin","Rayane","Rayhan","Ricardo",
    "Steffanie","Sébastien","Tanguy","Tibaud","Zakaria"];
    
    n = Math.floor(Math.random() * inputAr.length-1) + 1;

    return n;
}

console.log(pickLearner());