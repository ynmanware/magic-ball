import React, {Component} from 'react';
import axios from 'axios';
import Ball from '../ball/Ball';
import GetRandomAnswer from '../../utils/getRandomAnswer';

const ANSWERS_URL = 'http://localhost:4000/v1/answers';

class MagicBall extends Component {

    constructor(props) {
        super(props);
        this.state = {
            answers: [],
            randomAnswer: null
        };
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        axios.get(ANSWERS_URL)
            .then(res => {
                const answers = res.data;
                this.setState({answers});
            });
    }

    handleClick() {
        this.setState(() => ({
            randomAnswer: GetRandomAnswer(this.state.answers)
        }));
    }

    render() {
        return (
            <div onClick={this.handleClick}>
                {this.state.answers && this.state.answers.length === 0 ? (<div> Loading... </div>)
                    : (<div>
                        <Ball answer={this.state.randomAnswer}/></div>)}
            </div>
        );
    }
}

export default MagicBall;