import React, { useState } from "react";

const Form = ({ dispatch }) => {
    const [todo, setTodo] = useState("");
    const [completed, setCompleted] = useState(false);

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch({ type: 'addItem', payload: { todo, completed } });
        setTodo("");
        setCompleted(false);
    };

    return (
        <div className="form-container">
            <h1>To-Do List</h1>
            <form onSubmit={submitHandler}>
                <label>To-Do Item: </label>
                <input type="text" value={todo} onChange={(e) => setTodo(e.target.value)} />
                <button type="submit">Submit!</button>
            </form>
        </div>
    );
};

export default Form;
