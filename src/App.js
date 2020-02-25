import React, {Component} from 'react';

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      title: "Single Count",
      isSingle: true
  }


  }
  //this is where our methods go
  increment = () => {
    if (this.state.count + 1 <= 20) {
      var i = 0
      if (this.state.isSingle == true) {
        i =1
      } else i =2
    this.setState ({
      count: this.state.count + i
    })
  }
  else
  count: this.state.count = 0

  }

  decrement = () => {
      if (this.state.count - 1 >= 0) {
          var i = 0
          if (this.state.isSingle == true) {
            i =1
          } else i =2
    this.setState ({
      count: this.state.count - i
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
        title: this.state.title = "Double Count",
        isSingle: this.state.isSingle = false
      })
    }
    else
    this.setState ({
    title: this.state.title =  "Single Count",
      isSingle: this.state.isSingle = true
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
