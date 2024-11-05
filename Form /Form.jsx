import React, { Component } from "react";

class Form extends Component{
    constructor(props){
        super(props);
        this.inputname=React.createRef();
        this.inputage=React.createRef();

    }
    handleSubmit=(e)=>{
        e.preventDefault();
        console.log(this.inputname.value);
        console.log(this.inputage.value);

        
    }
    render(){
        return(
            <div>
                <form action="">
                    <input type="text" name="name" placeholder="name" ref={input=>this.inputname=input}/>
                    <input type="text" name="age" placeholder="age" ref={input=>this.inputage=input}/><br></br>
                    <button onClick={this.handleSubmit}>Submit</button>
                </form>
            </div>
        )
    }
}
export default Form