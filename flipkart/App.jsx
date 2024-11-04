import React,{Component} from 'react'
import './App.css'


class App extends Component{
  constructor(props){
    super(props);
    this.state={
      inputVal:"",
      items:[]
    }
  }
  async componentDidMount(){
    const res=await fetch('https://dummyjson.com/products');
    const data=await res.json();
    this.setState({items:[...data.products]})
  }
  render(){
    
    console.log(this.state.items);
    return <>
    <nav>
      <div className="n1">
      <h1>Flipkart.com</h1>
      </div>
      <div className="n2">
        <input type="text" className='search'/>
      </div>
      <div className="n3">
        <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/profile-52e0dc.svg" alt=""/>
        <h3>Login</h3>
      </div>
      <div className="n4">
        <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/header_cart-eed150.svg" alt="" />
        <h3>Cart</h3>
      </div>
    </nav>
    <div className="main">
      {this.state.items.map((item)=>{
        return <div className="item">
          <h1>{item.title.substring(0,15)}</h1>
          <img src={item.thumbnail} alt="" />
          </div>
      })}
    </div>
    </> 
  }
}

export default App