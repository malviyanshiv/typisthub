import React from "react";
import TypeRacer from "./TypeRacer";

const API = "http://localhost:3000/text";

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

        fetch(API)
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
                    <h1>Loading...</h1>
                ) : this.state.seconds === 0 ? (
                    <TypeRacer
                        key={this.state.gameId}
                        user={this.state.user}
                        text={this.state.text}
                        onNewGame={this.loadNewGame}
                    />
                ) : (
                    <div>
                        <h1>Welcome {this.state.user}</h1>
                        <h1>{this.state.seconds}</h1>
                    </div>
                )}
            </div>
        );
    }
}

export default GameLauncher;
