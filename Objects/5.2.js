function askTvSerie() {
    let tvSerie = {
        nameSerie: '', 
        productionYear: '', 
        castMembers: {}
       };
   
   tvSerie.nameSerie = prompt("Enter a name of a Tv serie : ")
   tvSerie.productionYear = Number(prompt("Enter the year of the Tv serie : "))
   tvSerie.castMembers = prompt("Enter the name fo the cast members : ")
   
   
    return JSON.stringify(tvSerie);
       
   }

function randomizeCast(tvSerie) {

    let cloneTvSerie = [...askTvSerie()];
    let selectTvSerie = [];
    for(let serie of askTvSerie()){
        console.log(serie)
        const index = Math.random() * (cloneTvSerie.length-1) | 0
        selectTvSerie.push(cloneTvSerie[index])
        cloneTvSerie.splice(index,1)
    }
    return selectTvSerie;
}

const tvSerie = {};
alert(randomizeCast(tvSerie));