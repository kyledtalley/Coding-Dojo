import "./App.css"
import ObjectComponent from "./components/ObjectComponent/"

function App() {
	const myString = "Hello, World!"


  const myNumber = 42

  const myArray = [1,2,3,4,5]

const [, , third] = myArray

const myObject = {name: "Kyle", age: 27, statement: "I'm in California!"}
const {name,age,statement} = myObject

const myFunction = (arg1, arg2, arg3) => {
  return(
    arg1+arg2+arg3
  )
}

	return(
	<>
		<div className="stringStyle">
			<h1>String</h1>
			<p>Say Hello: {myString}</p>
		</div>

    <div className = "numberStyle">
      <h1>Number</h1>
      <p>Lucky Number: {myNumber} </p>
    </div>

    <div className = "arrayStyle">
      <h1>Array</h1>
      <p>Five Numbers: {myArray} </p>
      <p>First of five: {myArray[0]}</p>
      <p>Third of five destructured: {third}</p>
    </div>

    <ObjectComponent />

    <p style = {{textAlign: "center"}}>{myFunction("Hello ", "world! ", "let's learn React!")}</p>

	</>
  )
}

export default App
