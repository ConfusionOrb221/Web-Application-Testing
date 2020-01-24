import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Dashboard from './components/Dashboard';

class App extends Component {
  constructor(props) {
    super(props);
    
  }

  render() {
    return (
      <>
        <Dashboard />
      </>
    );
  }
}

App.propTypes = {

};

export default App;