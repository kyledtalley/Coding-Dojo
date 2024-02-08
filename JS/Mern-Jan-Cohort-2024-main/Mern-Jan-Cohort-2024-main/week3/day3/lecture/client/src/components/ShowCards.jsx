import {React, useState} from 'react'

const ShowCards = (props) => {
    const {cards, setCards} = props

    const destroy = (index) => {
        const newCards = cards.filter( (_, idx) =>  idx !== index )
        setCards(newCards)
    }

  return (
    <div>
     <div className='cardSection'>
        {
            cards.map( (item, index) => (
            <div key={index} className='tradingCard'>
                <img className='cardImg' src={item.image} alt={item.name} />
                <div className='att_container'>
                    <div className='att_group'>
                        <p>{item.name}</p>
                        <p>{item.powerLvl}</p>
                    </div>
                    <div className='att_group'>
                        <p>{item.move}</p>
                        <button onClick={ () => destroy(index)}>Delete</button>
                    </div>
                </div>
            </div>
            ))
        }
    </div>
    </div>
  )
}

export default ShowCards