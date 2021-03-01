import React from 'react';
import './App.css';
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";
import logo from './logo.svg'
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      string: 'Oscar',
      people: [],
      searchField: ''
    }

    // this.searchMonster = this.searchMonster.bind(this) //cach 2
  }

  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({
        people: users,
        searchField: ''
      }))
  }

  //cach 1
  searchMonster = (e) => {
    this.setState({
      searchField : e.target.value
    }, ()=> console.log(this.state.searchField)
    )
  }

  //cach 2
  // searchMonster(e) {
  //   this.setState({
  //     searchField : e.target.value
  //   }, ()=> console.log(this.state.searchField)
  //   )
  // }

  render() {
    const {searchField, people} = this.state
    const filterPeople = people.filter(
      people => people.name.toLowerCase().includes(searchField.toLowerCase())
    )

    
    return (
      <div className='App'>
        <header className="App-header">
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
          </header>        
        <SearchBox 
          placeholder ='search monters'
          handleChange = {this.searchMonster}
        />
        <CardList people = {filterPeople}/>
      </div>
    );
  }
}

export default App;
