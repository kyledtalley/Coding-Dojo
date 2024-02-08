import React from "react";

const List = (props) => {
    const { liftedState, updateState } = props;

    const toggleCompletion = (index) => {
        const updatedState = liftedState.map((item, idx) =>
            idx === index ? { ...item, completed: !item.completed } : item
        );

        updateState(updatedState);
    };

    return (
        <div>
            <h1>Display</h1>
            {liftedState.map((item, index) => (
                <div key={index}>
                    <input
                        type="checkbox"
                        checked={item.completed}
                        onChange={() => toggleCompletion(index)}
                    />
                    <p style={{ textDecoration: item.completed ? 'line-through' : 'none' }}>
                        {item.todo}
                    </p>
                </div>
            ))}
        </div>
    );
};

export default List;
