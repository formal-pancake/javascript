// crée une fonction appelé 'checkNumber' qui prend en paramètre un nombre
// si le nombre est supérieur a 10 log: Trop grand
// si le nombre est supérieur ou égal a 5  ET  inferieur a 10 log: Parfait
// si le nombre est inférieur a 5 log: Trop petit




function checkNumber(nombre) {
    if (nombre > 10) {
        console.log("Trop grand");
    } else if (nombre >= 5) {
        console.log("Parfait");
    } else {
        console.log("Trop petit");
    }
}




