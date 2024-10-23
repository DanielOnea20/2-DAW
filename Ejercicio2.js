function opinion(){
    const opinion = prompt("Cual es tu opinion sobre esta receta: ");
    const newOpinion = document.getElementById('opinion');
    newOpinion.innerHTML += opinion + "<br>";
}