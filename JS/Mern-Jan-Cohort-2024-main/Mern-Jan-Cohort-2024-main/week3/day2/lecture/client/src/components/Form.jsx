import {React, useState} from "react";

const Form = (props) => {
    // const { content, setContent } = props
    const { recipes, setRecipes } = props

    const [errors, setErrors] = useState({
      name: "",
      ingredientOne: "",
      ingredientTwo: ""
    })

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
        // setContent(inputVal) // this is used in part 1 of lecture
        setRecipes([...recipes, recipe])
    }

    const changeHandler = (e) => {
        // setInputVal(e.target.value) // this is used in part 1 of lecture

        // e.target.value.length <= 3 ? setErrors({...errors, [e.target.name]: `${e.target.name} too Short!`}): setErrors({...errors, [e.target.name]: ""})

        const newErr = {...errors}
        if(e.target.name === "name" && e.target.value.length <= 3){
          console.log("1")
          // setErrors({...errors, [e.target.name]: "Too Short!!"})
          newErr[e.target.name] = "Too Short"
        }
        else if( e.target.name === "ingredientOne" && e.target.value.length <=4){
          // setErrors({...errors, ["ingredientTwo"]: "Please type more than 6 char!!"})
          console.log("2")
          newErr[e.target.name] = "Please type more than 4 char!!"
        }
        else if( e.target.name === "ingredientTwo" && e.target.value.length <=6){
          // setErrors({...errors, ["ingredientTwo"]: "Please type more than 6 char!!"})
          console.log("2")
          newErr[e.target.name] = "Please type more than 6 char!!"
        }
        else{
          // setErrors({...errors, [e.target.name]: ""})
          console.log("3")
          newErr[e.target.name] = ""
        }
        
        console.log(newErr)
        setErrors(newErr)
        setRecipe({...recipe, [e.target.name]: e.target.value}) // this is used in part 2 of lecture
        // console.log(e.target.name)
        // console.log(e.target.value)
    }


  return (
    <div>
        {/* first part of lecture  */}
      {/* <form onSubmit={submitHandler}>
        <div>
          <label>Content</label>
        </div>
        <div>
            <input type="text" name="name" onChange={changeHandler}/>
        </div>
        <button>Submit</button>
      </form> */}
      {/* second part of lecture  */}

      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="">Recipe</label>
        </div>
        <div>
            <input type="text" name="name" onChange={changeHandler}/>
            <span className="error">{errors.name}</span>
        </div>
        <div>
          <label htmlFor="">ingredientOne</label>
        </div>
        <div>
            <input type="text" name="ingredientOne" onChange={changeHandler}/>
            <span className="error">{errors.ingredientOne}</span>
        </div>
        <div>
          <label htmlFor="">ingredientTwo</label>
        </div>
        <div>
            <input type="text" name="ingredientTwo" onChange={changeHandler}/>
            <span className="error">{errors.ingredientTwo}</span>
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Form;

    // const [name, setName] = useState("")
    // const [ingredientOne, setIngredientOne] = useState("")
    // const [ingredientTwo, setIngredientTwo] = useState("")
