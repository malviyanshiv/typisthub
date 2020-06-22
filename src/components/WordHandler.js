import React from "react";

class WordHandler extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            targetWord: props.targetWord,
            currentWord: "",
            errorCount: 0,
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
        let errorCount = this.state.errorCount;
        let isValid = this.state.isValid;
        if (this.state.targetWord.startsWith(currentWord) === false) {
            if (this.state.currentWord.length < size) {
                errorCount++;
            }
            isValid = false;
        } else {
            isValid = true;
        }

        if (currentWord.substr(0, size) === this.state.targetWord) {
            return this.props.moveNext(this.state.errorCount);
        }

        this.setState(() => ({
            errorCount,
            currentWord,
            isValid,
        }));
    };
    render() {
        return (
            <div>
                <form>
                    <input
                        type="text"
                        value={this.state.currentWord}
                        onChange={this.onChange}
                        autoFocus={true}
                        className={this.state.isValid ? "" : "danger"}
                    />
                </form>
            </div>
        );
    }
}

export default WordHandler;
