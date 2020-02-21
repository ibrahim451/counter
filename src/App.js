import React, {Component} from 'react';

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    }
    this.state = {
        title: "Single Count"
     }
  }
  //this is where our methods go
  increment = () => {
    if (this.state.count + 1 <= 20) {
    this.setState ({
      count: this.state.count + 1
    })
  }
  else
  count: this.state.count = 0

  }

  decrement = () => {
      if (this.state.count - 1 >= 0) {
    this.setState ({
      count: this.state.count - 1
    })
  }
  else
  count: this.state.count = 0


  }

  clearCount = () => {
    this.setState ({
      count: this.state.count = 0
    })

  }

  changeTitle = () => {
    if (this.state.title == "Single Count" ) {
      this.setState ({
        title: this.state.title = "Double Count"
      })
    }
    else
    this.setState ({
    title: this.state.title =  "Single Count"
      })
  };







  render() {
    return(
      <div className="container">
        <div className="navbar">Counter.js </div>
        <div className="counter">
        <h1>{this.state.count}</h1>
        <button type="button" onClick={this.increment}>Increment</button>
        <button type="button" onClick={this.decrement}>Decrement</button>
        <button type="button" onClick={this.clearCount}>Clear Count </button>
        <button type="button" onClick={this.changeTitle}> {this.state.title} </button>
        </div>

      </div>
    );
  }
}

export default Counter
