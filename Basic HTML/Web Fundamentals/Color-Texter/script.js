var pTags=document.querySelectorAll("p");

function getColor(element){
    console.log(element.value);
    console.log(pTags)
    for(var i = 0; i<pTags.length; i++){
        if(i%2 == 1){

            pTags[i].style.color = element.value;
        }

    }
}
