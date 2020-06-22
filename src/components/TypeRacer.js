import React from "react";
import WordHandler from "./WordHandler";
import TextPresenter from "./TextPresenter";

export default class TypeRacer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: [
                "This ",
                "case ",
                "sensitive ",
                "data ",
                "is ",
                "impressive ",
                "to ",
                "overcome.",
            ],
            textIndex: 0,
            totalCount: 0,
            characterCount: 0,
            startTime: new Date(),
        };
        this.moveNext = this.moveNext.bind(this);
        this.getWPM = this.getWPM.bind(this);
    }

    moveNext = (cnt) => {
        let { totalCount, textIndex } = this.state;
        this.setState(() => ({
            totalCount: totalCount + cnt,
            textIndex: textIndex + 1,
            characterCount:
                this.state.characterCount + this.state.text[textIndex].length,
        }));
    };

    getWPM = () => {
        const wordCnt = this.state.characterCount / 5;
        const timeInterval = new Date() - this.state.startTime;
        const WPM = parseInt((wordCnt * 60000) / timeInterval);
        return isNaN(WPM) ? 0 : WPM;
    };

    getAccuracy = () => {
        const { totalCount, characterCount } = this.state;
        return parseInt((characterCount * 100) / totalCount);
    };

    render() {
        return (
            <div>
                {this.state.text.length > this.state.textIndex ? (
                    <div>
                        <TextPresenter
                            text={this.state.text}
                            idx={this.state.textIndex}
                        />
                        <h1>{this.state.text[this.state.textIndex]}</h1>
                        <WordHandler
                            key={this.state.textIndex}
                            moveNext={this.moveNext}
                            targetWord={this.state.text[this.state.textIndex]}
                        />
                        <p>{this.getWPM()}</p>
                    </div>
                ) : (
                    <div>
                        <h1> Speed : {this.getWPM()} WPM</h1>
                        <h1> Accuracy : {this.getAccuracy()}%</h1>
                    </div>
                )}
            </div>
        );
    }
}
