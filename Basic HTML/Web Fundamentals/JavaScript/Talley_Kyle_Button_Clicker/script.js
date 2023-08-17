function inOrOut(element){
    if(element.innerText == "Login"){
        element.innerText = "Logout"
    }
    else{
        element.innerText = "Login"
    }
}

function addOne(id){
    var element = document.querySelector(`#${id}`)
    console.log(element)
    element.innerText++
}

function deathToBtn(btn){
    btn.style.display = "none";
}
