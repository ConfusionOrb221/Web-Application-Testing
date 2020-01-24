import React, { Component } from 'react';
import Display from './Display';

export const addBall = ({balls, ...state}) =>{
    if(balls >= 3){
        return {
            ...state,
            balls: 0,
            strikes: 0,
        };
    } else {
        return {
            ...state,
            balls: balls + 1
        };
    }
}

export const addStrike = ({strikes, ...state}) =>{
    if(strikes >= 2){
        return {
            ...state,
            balls: 0,
            strikes: 0
        }
    } else {
        return {
            ...state,
            strikes: strikes + 1
        };
    }
}

export const hitBall = () =>{
    return {
        balls: 0,
        strikes: 0
    }
}

export const addFoul = ({strikes, ...state}) =>{
    return {
        ...state,
        strikes: strikes < 2 ? strikes + 1 : strikes
    }
}

class Dashboard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            balls : 0,
            strikes : 0,
        }
        
    }

    componentDidUpdate(){
        console.log(this.state);
    }

    render() {
        return (
            <div>
                <Display data={this.state} />
                <button onClick={() => this.setState(addBall(this.state))}> Add Ball </button>
                <button onClick={() => this.setState(addStrike(this.state))}> Add Strike </button>
                <button onClick={() => this.setState(addFoul(this.state))}> Foul </button>
                <button onClick={() => this.setState(hitBall())}> Hit </button>
            </div>
        );
    }
}

export default Dashboard;