import React, { Component, useState } from "react";

class Form1 extends Component{
    state = {name:"",age:"",address:"",phone:"",pin:"",details:[]}
    handleSubmit=(event)=>{
        event.preventDefault();
        console.log(this.state.name,this.state.age,this.state.address,this.state.phone,this.state.pin);
        this.setState({
            details:[...this.state.details,{name:this.state.name,age:this.state.age,address:this.state.address,phone:this.state.phone,pin:this.state.pin}]
        })
    }
    onHandleChange1=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }
 
render(){
    return(
        <>
            <form action="">
                <input type="text" name="name"  placeholder="Name" onChange={this.onHandleChange1} value={this.state.name}/>
                <input type="text" name="age"  placeholder="Age" onChange={this.onHandleChange1} value={this.state.age}/>
                <input type="text" name="address"  placeholder="Address" onChange={this.onHandleChange1} value={this.state.address}/>
                <input type="text" name="phone"  placeholder="Phone" onChange={this.onHandleChange1} value={this.state.phone}/>
                <input type="text" name="pin"  placeholder="pincode" onChange={this.onHandleChange1} value={this.state.pin}/>
                <button onClick={this.handleSubmit}>Submit</button>
            </form>
            <div className="details">
                {
                    this.state.details.map((dt,ind)=>{
                        return (
                        
                        <>
                        <div key={ind}>
                            
                       
                        <p>name : {dt.name}</p>
                        <p>age : {dt.age}</p>
                        <p>address : {dt.address}</p>
                        <p>phone : {dt.phone}</p>
                        <p>pin : {dt.pin}</p>
                        </div>
                        </>
                        )
                    })
                }
            </div>
        </>
    )
}
}

export default Form1