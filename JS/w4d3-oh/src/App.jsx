import React, { useState } from "react"
import "./App.css"
import Holidays from "./components/Holidays"
import Display from "./components/Display"

const App = () => {
	const [holidays, setHolidays] = useState([
		{
			holiday: "Halloween",
			content: "Happy Halloween!",
			image: "https://img.freepik.com/free-photo/halloween-background-with-scary-pumpkins-candles-graveyard-night-with-castle-background_123827-25820.jpg"
		},
		{
			holiday: "Thanksgiving",
			content: "Happy Thanksgiving!",
			image: "https://atmosfx.com/cdn/shop/products/TurkeyTomfoolery4KKeyArtUpdate20220209_341x@2x.png?v=1667506043"
		},
		{
			holiday: "St Patrick's Day",
			content: "Happy St Patrick's Day!",
			image: "https://www.daysoftheyear.com/cdn-cgi/image/dpr=1%2Cf=auto%2Cfit=cover%2Cheight=675%2Cq=85%2Cwidth=1200/wp-content/uploads/saint-patricks-day.jpg"
		},
	])
  const[isActive, setIsActive] = useState(false)
	return (
      <>
        <Holidays holidays = {holidays} setHolidays = {setHolidays} isActive = {isActive} setIsActive = {setIsActive}/>
        <Display holidays = {holidays} isActive = {isActive} />
      </>
    )
}

export default App
