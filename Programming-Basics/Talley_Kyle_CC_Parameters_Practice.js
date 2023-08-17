




function greeting(name, time) {
  if (name == "Darth Grogu") {
    console.log("DARTH GROGU WE MEET AGAIN, I SHALL EXACT REVENGE FOR THE WAR CRIMES YOU HAVE COMMITTED!")
  }
  else{
    console.log("Lucky for you you're not Darth Grogu. Anyways,")
  }

  if(time <= 1200 <= 1800){
  console.log("good morning " + name + "! I hope your day is going great!")
  }
  else if(time >= 1200 && time <= 1800){
    console.log("good afternoon " + name + "! I hope you've accomplished many things today!")

  }
  else if(time >= 1800 >= 2400 ){
    console.log("good evening " + name + "! I hope you finish your day off with some peace!)"
  }
}
