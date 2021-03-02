import React from 'react';
import './App.css';
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";
import logo from './logo.svg'
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Oscar',
      people: [],
      searchField: '',
      number : 29 + this.props.increment
    }

    this.props = props 
    // this.searchMonster = this.searchMonster.bind(this) //cach 2
  }

  componentDidUpdate(){
      console.log('componentDidUpdate');
  }

  componentWillUnmount(){
      console.log('componentWillUnmount');
  }

  shouldComponentUpdate(nextProps, nextState){
      console.log('shouldComponentUpdate');
      return true
  }

  componentDidMount() {
    console.log('componentDidMount');
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

  handleClick = () =>{
    // this.setState({
    //   number : this.state.number + 1
    // },
    // () => console.log(this.state.number))
    this.setState((prevState, prevProps) => {
      return {
        number : prevState.number + prevProps.increment
      }
    },
    () => console.log(this.state.number)
    )
  }

  render() {
    console.log('render');
    const {searchField, people} = this.state
    const filterPeople = people.filter(
      people => people.name.toLowerCase().includes(searchField.toLowerCase())
    )

    
    return (
      <div className='App'>
        <header className="App-header">
            <img src={logo} className = "App-logo" alt = "logo"/>
            <p> 
              {this.state.number}
            </p>
            <button
            onClick={
             this.handleClick
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
