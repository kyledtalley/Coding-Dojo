import {React} from 'react'

const Holidays = (props) => {
    const { holidays, setHolidays, isActive, setIsActive } = props


    const handleClick = (index) => {
      console.log(index)
      const activeHoliday = holidays.filter( (item, idx) => index != idx ? null : item)
      console.log(activeHoliday)
    }

  return (
    <div>
        {
            holidays.map( (item, index) => (
                <button onClick={() => handleClick(index)} key={index}>{item.holiday}</button>
            ))
        }
    </div>
  )
}

export default Holidays