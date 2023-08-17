function popup(){
    var popup= document.querySelector('.popup')
    popup.style.display = "block"
}

setTimeout(popup, 5000)


function removeAd(){
    var popup= document.querySelector('.popup')
    popup.remove()
}

function increment(){
    var cart = document.querySelector('#cart')
    cart.innerText++
}

function search(event){
    event.preventDefault()
    var input = document.querySelector('#search')
    alert('You are searching for ${input.value}')
}
