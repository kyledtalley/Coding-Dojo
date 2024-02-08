import {React, useState} from "react";

const Form = (props) => {
    const { content, setContent } = props

    // we did not try to display recipe if anyones trying to see how we displayed it 
    const [recipe, setRecipe] = useState({
        name: "",
        ingredientOne: "",
        ingredientTwo: ""
    })

    // line 14 is used in part 1 of lecture 
    const  [inputVal, setInputVal] = useState("")

    const submitHandler = (e) => {
        e.preventDefault()
        setContent(inputVal) // this is used in part 1 of lecture
    }

    const changeHandler = (e) => {
        setInputVal(e.target.value) // this is used in part 1 of lecture
        // setRecipe({...recipe, [e.target.name]: e.target.value}) // this is used in part 2 of lecture
        // console.log(e.target.name)
        // console.log(e.target.value)
    }


  return (
    <div>
        {/* first part of lecture  */}
      <form onSubmit={submitHandler}>
        <div>
          <label>Content</label>
        </div>
        <div>
            <input type="text" name="name" onChange={changeHandler}/>
        </div>
        <button>Submit</button>
      </form>
      {/* second part of lecture  */}

      {/* <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="">Recipe</label>
        </div>
        <div>
            <input type="text" name="name" onChange={changeHandler}/>
        </div>
        <div>
          <label htmlFor="">ingredientOne</label>
        </div>
        <div>
            <input type="text" name="ingredientOne" onChange={changeHandler}/>
        </div>
        <div>
          <label htmlFor="">ingredientTwo</label>
        </div>
        <div>
            <input type="text" name="ingredientTwo" onChange={changeHandler}/>
        </div>
        <button>Submit</button>
      </form> */}
    </div>
  );
};

export default Form;

    // const [name, setName] = useState("")
    // const [ingredientOne, setIngredientOne] = useState("")
    // const [ingredientTwo, setIngredientTwo] = useState("")
