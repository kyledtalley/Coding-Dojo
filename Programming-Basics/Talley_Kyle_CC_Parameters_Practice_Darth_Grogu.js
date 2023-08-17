

//time must be in hhmm format


function greeting(name, time) {
  if (name == "Darth Grogu") {
    console.log("DARTH GROGU WE MEET AGAIN, I SHALL EXACT REVENGE FOR THE WAR CRIMES YOU HAVE COMMITTED!")
  }
  else if (name != "Darth Grogu"){
    console.log("Lucky for you you're not Darth Grogu. Anyways,")

    if(time <= 1200){
      console.log("good morning " + name + "! I hope your day is going great!")
      }
      else if(time >= 1200 && time <= 1800){
        console.log("good afternoon " + name + "! I hope you've accomplished many things today!")

      }
      else if(time >= 1800 >= 2400 ){
        console.log("good evening " + name + "! I hope you finish your day off with some peace!")
      }
      else if(time > 2400){
        console.log("You are not from this planet, please leave this code away.")
      }

  }


}
greeting("George", 1345)//console logs:
//"Lucky for you you're not Darth Grogu. Anyways, good afternoon George! I hope you've accomplished many things today!"


//greeting("Darth Grogu", 1996)//console logs:
//DARTH GROGU WE MEET AGAIN, I SHALL EXACT REVENGE FOR THE WAR CRIMES YOU HAVE COMMITTED!
