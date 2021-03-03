import logo from './logo.svg';
import './App.css';
import Intro from './Component/Intro';
import { connect } from 'react-redux';
import { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          {this.props.data}
          <Intro></Intro>
        </header>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    data: state.num,
    edit: state.editStatus
  }
}

export default connect(mapStateToProps)(App);

