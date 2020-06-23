import React from "react";

export default (props) => {
    return (
        <div className="text-container">
            {props.text.map((word, idx) =>
                idx === props.idx ? (
                    <span key={idx} className="text-container__focused">
                        {word}
                    </span>
                ) : (
                    <span key={idx}>{word}</span>
                )
            )}
        </div>
    );
};
