function askTvSerie() {
 let serie = {
     nameSerie: '', 
     productionYear: '', 
     castMembers: ''
    };

serie.nameSerie = prompt("Enter a name of a Tv serie : ")
serie.productionYear = prompt("Enter the year of the Tv serie : ")
serie.castMembers = prompt("Enter the name fo the cast members : ")


 return JSON.stringify(serie);
    
}

alert(askTvSerie());
