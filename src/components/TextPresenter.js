import React from "react";

export default (props) => {
    return (
        <div>
            {props.text.map((word, idx) => (
                <span key={idx} className={props.idx === idx ? "focused" : ""}>
                    {word}
                </span>
            ))}
        </div>
    );
};
