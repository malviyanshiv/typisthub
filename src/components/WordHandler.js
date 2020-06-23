import React from "react";

class WordHandler extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            targetWord: props.targetWord,
            currentWord: "",
            totalCount: 0,
            isValid: true,
        };
        this.onChange = this.onChange.bind(this);
    }

    onChange = (e) => {
        const currentWord = e.target.value;
        if (currentWord.length === 0) {
            return this.setState(() => ({
                currentWord: currentWord,
                isValid: true,
            }));
        }

        const size = currentWord.length;
        let totalCount = this.state.totalCount;
        let isValid = this.state.isValid;
        if (this.state.currentWord.length < size) {
            totalCount++;
        }
        if (this.state.targetWord.startsWith(currentWord) === false) {
            isValid = false;
        } else {
            isValid = true;
        }

        if (currentWord.substr(0, size) === this.state.targetWord) {
            return this.props.moveNext(totalCount);
        }

        this.setState(() => ({
            totalCount,
            currentWord,
            isValid,
        }));
    };
    render() {
        return (
            <div>
                <form className="word-form">
                    <input
                        type="text"
                        value={this.state.currentWord}
                        onChange={this.onChange}
                        autoFocus={true}
                        className={this.state.isValid ? "" : "error"}
                    />
                </form>
            </div>
        );
    }
}

export default WordHandler;
