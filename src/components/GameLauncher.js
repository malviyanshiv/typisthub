import React from "react";
import TypeRacer from "./TypeRacer";

class GameLauncher extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: "",
            user: this.props.user,
            seconds: 3,
            gameId: 0,
            isLoading: false,
        };

        this.loadNewGame = this.loadNewGame.bind(this);
    }

    componentDidMount() {
        this.loadNewGame();
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    loadNewGame = () => {
        this.setState({
            isLoading: true,
        });

        fetch("/text")
            .then((response) => response.json())
            .then((data) =>
                this.setState(
                    {
                        text: this.parseText(data.text),
                        seconds: data.seconds,
                        isLoading: false,
                        gameId: this.state.gameId + 1,
                    },
                    () => {
                        this.interval = setInterval(() => {
                            const seconds = this.state.seconds;
                            if (seconds > 0) {
                                this.setState(() => ({
                                    seconds: seconds - 1,
                                }));
                            }

                            if (seconds === 0) {
                                clearInterval(this.interval);
                            }
                        }, 1000);
                    }
                )
            )
            .catch((e) => console.log(e));
    };

    parseText = (data) => {
        const text = data.split(" ");
        for (let i = 0; i < text.length - 1; i++) text[i] = text[i] + " ";
        return text;
    };

    render() {
        return (
            <div>
                {this.state.isLoading ? (
                    <div className="loader">Loading</div>
                ) : this.state.seconds === 0 ? (
                    <TypeRacer
                        key={this.state.gameId}
                        user={this.state.user}
                        text={this.state.text}
                        onNewGame={this.loadNewGame}
                    />
                ) : (
                    <div className="center-container">
                        <p className="welcome-message">
                            Get ready {this.state.user}
                        </p>
                        <div className="timer-container">
                            {this.state.seconds}
                        </div>
                    </div>
                )}
            </div>
        );
    }
}

export default GameLauncher;
