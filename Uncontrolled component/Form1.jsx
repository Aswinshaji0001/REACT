import React, { Component } from "react";

class Form1 extends Component{
    state = {name:"",age:""}
    handleSubmit=(event)=>{
        event.preventDefault();
        console.log(this.state.name,this.state.age);
    }
    onHandleChange1=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }
 
render(){
    return(
        <>
            <form action="">
                <input type="text" name="name"  placeholder="Name" onChange={this.onHandleChange1}/>
                <input type="text" name="age"  placeholder="Age" onChange={this.onHandleChange1}/>
                <button onClick={this.handleSubmit}>Submit</button>
            </form>
        </>
    )
}
}

export default Form1