function petTheFurBaby(id){
    var element = document.querySelector(`#${id}`)
    console.log(element)
    element.innerText++
}


function pickFurBaby(element){
    alert("You have changed your search preference to look for (a) " + element.value);
    pickFurBaby = element.value;
}


function deathToBtn(btn){
    btn.style.display = "none";
}
