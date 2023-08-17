function switchBtn(element){
    console.log(element)
    element.innerText = "Off"
if(element.innerText == "On"){
    element.innerText = "Off"
}else{
    element.innerText = "On"
}



}

function disappear(element){
    element.style.display == "none"
    osetTimeout(reappear, 5000)
}

function reappear(){
    var btn = document.querySelector('#timeBtn')
    btn.style.display = "inline"
}


function changeImg(element){
    element.src = "./images./CG2011.jpg"
}
function changeBack(element){
    element.src= ".images./fdjsakfldsa.jpg"
}

function dropDown(event){
    event.preventDefault()
    var input = document.querySelector('#input')
    alert('You picked ${input.value} city')
}
