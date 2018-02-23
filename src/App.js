import React, { Component } from 'react';
import './App.css';

const sports = [
  { id: 'ab123aa', name: 'Baseball' },
  { id: 'ab124aa', name: 'Golf' },
  { id: 'ab125aa', name: 'Hockey' },
  { id: 'ab126bb', name: 'Soccer' },
  { id: 'ab127bb', name: 'Football' },
  { id: 'ab128cc', name: 'Skiing' },
  { id: 'ab129dd', name: 'Ping Pong' },
  { id: 'ab130cc', name: 'Foosball' },
];

class App extends Component {

  state = {
    sports
  }

  removeItem = (sport, i) => {
    const updatedList = this.state.sports.slice();
    updatedList.splice(i, 1);
    if (updatedList.length < 1) {
      alert ('Oh no, you deleted all the sports :(');
    }
    this.setState({ sports: updatedList })
  }

  resetList = () => {
    this.setState({sports: sports})
  }

  componentDidMount = () => {
    console.log(this.state)
  }
  

  render() {
    const list = this.state.sports.map((sport, i) => {
      return (
        <div className="App"
            key={i}
            onClick={() => this.removeItem(sport, i)} >
            {sport.name}
        </div>
      );
    })
   return(
     <div>
       <div>
         
        </div><h1>Click on your least favorite sports below to delete them until you have three left</h1> 
       {list}
       <button type='' className=''onClick={() => this.resetList()} >RESET</button>
     </div> 
   )
  }
}

export default App;
