import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = { words: "" }
    this.repeat = this.repeat.bind(this)
  }

  repeat(e){
    this.setState({
      words: e.target.value
    })
  }

  render() {
    return (
      <div>
        <h1>Un repetidor</h1>
        <input type="text" placeholder="Empieza a escribir algo" onChange={this.repeat} />
        <p className="repeater">{this.state.words}</p>
      </div>
    );
  }
}

export default App;
