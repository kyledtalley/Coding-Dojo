//before 10am = latte
//10am-4pm = hot chocolate
//4pm-10pm = ice cream
//after 10pm = sleep


function whatTimeOfDay(time){
console.log('The time is ' + time)

var evenRewards = ['ice cream', 'cookies', 'candy']
var oddRewards = ['hot chocolate', 'tea', 'cake']

if(time < 1000){
  console.log('I think I will have a latte')
}
else if(time >= 1000 && time < 1500){
  console.log('I think I will have a hot chocolate')
}
else if(time >= 1500 && time <= 1800){
  if((time % 2)===0){
    var rewardForEven = Math.floor(Math.random() * 2)

    console.log('I want ' + evenRewards[rewardForEven] + '!')
  }
  else{
    var rewardForOdd = Math.floor(Math.random() * 2)
    console.log('I want ' + oddRewards[rewardForOdd] + '!')
  }
}
else if (time > 1800 && time < 2200){
  console.log('I think I will have an ice cream')
}
else if (time >= 2200){
  console.log("I don't want anything other than sleep!")
}
}

var time = Math.floor(Math.random() * 2400)
whatTimeOfDay(time)
