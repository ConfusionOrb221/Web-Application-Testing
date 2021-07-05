import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Display extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
                <div className="Balls"> Balls: {this.props.data.balls}  </div>
                <div className="Strikes"> Strikes: {this.props.data.strikes} </div>
            </div>
        );
    }
}

export default Display;