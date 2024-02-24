import React from "react";

const List = ({ items, dispatch }) => {
    const toggleCompletion = (index) => {
        dispatch({ type: 'toggleItem', payload: index });
    };

    return (
        <div className="todo-list-header">
            <h1>To-Do:</h1>
            {items.map((item, index) => (
                <div className="todo-list-item" key={index}>
                    <input
                        type="checkbox"
                        checked={item.completed}
                        onChange={() => toggleCompletion(index)}
                    />
                    <p className={item.completed ? "completed-item" : ""}>
                        {item.todo}
                    </p>
                    <button onClick={() => dispatch({ type: 'deleteItem', payload: index })}>
                        Delete
                    </button>
                </div>
            ))}
        </div>
    );
};

export default List;
