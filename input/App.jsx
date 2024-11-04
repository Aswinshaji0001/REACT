import React from "react";
import { Component } from "react";

class App extends Component{
  constructor(props){
    super(props);
    this.state={
      count:0,
      inputVal:"",
      items:[]
    }
  }
  handleChange=(evnt)=>{
        this.setState({inputVal:evnt.target.value})
  }
  add=()=>{
    this.setState({items:[...this.state.items,this.state.inputVal],inputVal:""})
  }
  delete=(item)=>{
    console.log(item);
    this.setState({items:this.state.items.filter((i)=>{
      return i!=item;
    })})
  }
render(){
  return <div className="main">
    <input type="text"  value={this.state.inputVal} onChange={this.handleChange}/>
    <button onClick={this.add}>Add</button>
    <div>
      <ul>
        {
          this.state.items.map((item,ind)=>
            <li key={ind}>{item} <button onClick={()=>this.delete(item)}>Delete</button></li>
          )
        }
      </ul>
    </div>
  </div>
}
}

export default App