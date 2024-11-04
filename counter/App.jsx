import React from "react";
import { Component } from "react";

class App extends Component{
  constructor(props){
    super(props);
    this.state={
      count:0
    }
  }
render(){
  const increment=()=>{
    this.setState({count:this.state.count+=1})
  }
  const decrement=()=>{
    if(this.state.count>0)
    this.setState({count:this.state.count-=1})
  }
  return <div className="main">
          <button onClick={decrement}>-</button>
          <h1>Count is {this.state.count}</h1>
          <button onClick={increment}>+</button>
         </div>
}
}

export default App