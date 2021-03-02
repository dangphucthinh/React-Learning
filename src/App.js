import React from 'react';
import './App.css';
import { CardList } from "./components/card-list/card-list.component";
import LifeCycles from './components/Life-cycle/LifeCycles.component';
import { SearchBox } from "./components/search-box/search-box.component";
import logo from './logo.svg'
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Oscar',
      people: [],
      searchField: '',
      number : 29 + this.props.increment,
      text: '',
      showChild : true
    }

    this.props = props 
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

  toggleLifecyle(){
    this.setState(state => ({
      showChild : !state.showChild
    }
    ),
    () => console.log("concasc"))
  }

  onText = () => {
    this.setState(state => ({
      text : !state.text + '_hello'
    }
    ),
    () => console.log("concasc"))
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
            <button
            onClick = {
              this.toggleLifecyle.bind(this)
            }>
              Toggle lifecycle
            </button>

            <button
              onClick = {
               this.onText
              }
            >
              Update text
            </button>

            {this.state.showChild ? <LifeCycles text = {this.state.text} ></LifeCycles> : null}
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
