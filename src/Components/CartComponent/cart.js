import  Button  from '../ButtonComponent/button';
import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import axios from 'axios';

class cart extends Component {

    constructor(props){
        super(props);
        this.state = {
            cartItems : []
        }
    }

    componentDidMount(){

        const id = localStorage.getItem("UserID");

        axios.get(`http://localhost:5000/userDetails/getCart/${id}`).then((res) => {
            console.log(res);
            this.setState({cartItems : res.data.cartItems})
        }).catch(err => {
            console.log(err);
        })
    }

    render() {
        const {cartItems}= this.state;
        return (
          
            <div className="container">                
                    {cartItems.map(cartitem => (
                        <div id="cartCard" className="card" key = {cartitem._id}>
                            <div className="card-header" id="cartDivMain">
                            <div>
                                <h5>{cartitem.title}</h5>
                            </div>
                            <div>
                                <i id="del" className ="fas fa-times" style={{cursor:'pointer',float:'right',color:'red'}} ></i>             
                            </div>
                        </div>
                        <div className="card-body" id="cartDivMain">
                            <div className="cartsub1">
                                <p className="card-text">Price : RS. {cartitem.price}</p>
                            </div>
                            <div className="cartsub1">
                                <Link to ={`/itemDescription/${cartitem.productId}`}><Button
                                    id = {"goDes"}
                                    value = {"Show More"}
                                    classname= {"btn btn-outline-danger"}
                                    type= {"submit"}
                                /></Link>
                            </div>         
                          
                        </div>
                    </div> 
                        
                    ))}
                              
            </div>
        )
    }
}

export default cart;