import React, {useState} from 'react'

//fields for our cards:
//name
//powerLvl
//move
//image


const Card = (props) => {
    const {cards, setCards} = props
    const [name, setName] = useState("")
    const [powerLvl, setPowerLvl] = useState("")
    const [move, setMove] = useState("")
    const [image, setImage] = useState("")

    const submitHandler = (e) =>{
        e.preventDefault()

        setCards([...cards, {name, powerLvl, move, image}])
        setName("")
        setPowerLvl("")
        setMove("")
        setImage("")
    }
  return (
    <div>

        <form onSubmit = {submitHandler} >
            <div>
                <h2>Create trading card</h2>
            </div>
            <div>
                <label>Name</label> <br/>
                <input type="text" name = "name" onChange = {(e) => setName(e.target.value)} value = {name}/>
            </div>
            <div>
                <label>Power LvL</label> <br/>
                <input type="text" name = "powerLvl" onChange = {(e) => setPowerLvl(e.target.value)} value = {powerLvl}/>
            </div>
            <div>
                <label>Move</label> <br/>
                <input type="text" name = "move" onChange = {(e) => setMove(e.target.value)} value = {move}/>
            </div>
            <div>
                <label>Image</label> <br/>
                <input type="text" name = "image" onChange = {(e) => setImage(e.target.value)} value = {image}/>
            </div>
            <button>Submit</button>
        </form>


    </div>
  )
}

export default Card
