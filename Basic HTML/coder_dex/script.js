var currentUsername = "";


function getUsername(element){
    console.log(element);
    currentUsername = element.value;
}

async function search(){
    var response= await fetch();
    var coderData = await response.json();
    console.log(coderData);
}
