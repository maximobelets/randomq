import React, { Component } from 'react';
import './App.css';

import { connect } from 'react-redux';

import random from './redux/actions/random';

// const App = () => {
//   return (
//     <section>
//       <h4>RandomQ.</h4>
//       <button>Random</button>
//       <h4>{ this.props.answer }</h4>
//     </section>
//   );
// };

class App extends Component {
  render() {
    return (
        <section>
       <h4>RandomQ.</h4>
       <button onClick={ this.props.random }>Random</button>
       <h4>{ this.props.answer }</h4>
     </section>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    answer: state.answer
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    random: () => dispatch(random())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
