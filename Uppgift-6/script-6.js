let resultat = document.querySelector("#resultat")
let inputNr = document.querySelector("input")

function dubbla(){

    if(inputNr.value * 2)
    {
        var result = inputNr.value * inputNr.value;
    }
    else
    {
        result = "Värdet är inte ett nummer döööh"
    }

    console.log("hej");
    resultat.innerText = result;
}