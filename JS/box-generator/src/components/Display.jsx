import React from 'react';

const Display = (props) => {

    const { boxColorArray } = props;


    return (
        <div className="boxDisplay">
            {
                boxColorArray.map((color, index) => (
                    <div key={index} style={{
                        display: "inline-block",
                        margin: "10px",
                        height: "50px",
                        width: "50px",
                        backgroundColor: color
                    }}>
                    </div>
                ))
            }
        </div>
    );
}

export default Display;
