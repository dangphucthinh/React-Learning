import React from 'react';
import logo from './logo.svg';
import './App.css';
import { CardList } from "./components/card-list/card-list.component";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      string: 'Oscar',
      people: [],
    }
  }

  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({
        people: users
      }))
  }

  render() {
    return (
      <div className='App'>
        {/* <header className="App-header">
            <img src={logo} className = "App-logo" alt = "logo"/>
            <p> 
              {this.state.string}
            </p>
            <button
            onClick={
              () => {this.setState(
                {
                  string:"Thinh Dang"
                }
              )}
            }>
              Click me
            </button>
          </header>         */}

        <CardList people = {this.state.people}/>
      </div>
    );
  }
}

export default App;
