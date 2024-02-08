

const palidrome = (word) => {
    console.log(word)
    return word.split("").reverse().join("") == word
}

const handleSubmit = (e, word) => {
    e.preventDefault()
    document.getElementById("results").innerHTML = "Results: "
    // console.log(document.getElementById(word).value)
    !palidrome(document.getElementById(word).value) ? document.getElementById("results").innerHTML += "Is not palidrome!!" : document.getElementById("results").innerHTML += "Is palidrome!!"

        // document.getElementById("results").innerHTML += "Is not palidrome!!"
        // document.getElementById("results").innerHTML = "Results: Is not palidrome!!"
        // document.getElementById("results").innerHTML += "Is palidrome!!"
    }
