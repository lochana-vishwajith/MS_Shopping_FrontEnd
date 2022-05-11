import React, { Component } from 'react'
import {Link} from 'react-router-dom';

import TextField from '../TextViewComponent/textViewComponent';
import Button from '../ButtonComponent/button';
import axios from 'axios';

export default class itemDescription extends Component {

    constructor(props){
        super(props);
        this.state = {
            isLoaded:false,
            Items : ""
        };
    }
    
    handlerChange = (e) => {
        this.setState({[e.target.name ]: e.target.value});
    }

    onButtonSubmit = (e) => {
        e.preventDefault();

        const addItemCart = {
           productId : this.state.Items._id,
           title : this.state.Items.title,
           price : this.state.Items.price
        }

        const userId = localStorage.getItem("UserID");

        axios.put(`http://localhost:5000/userDetails/${userId}` , addItemCart).then(res => {
            alert("Item is added");
        }).catch(err => {
            console.log(err)
        })
    }

    componentDidMount(){
        
        axios.get(`http://localhost:5000/itemDetails/${this.props.match.params.id}`)
        .then(result => {
            
            console.log(result.data.item);
            this.setState({isLoaded:true , Items : result.data.item});
            
        }).catch(err => {
            console.log(err);
        })
    }

    render() {
        
        return (<ul>
            
            <div className="container">
                
                <div className="itemNameDiv">
               
                    <div className="itemNameSub" >
                    
                        <div className="itemNameSub1">
                            {/* <img src={this.state.item.image} className="itemImage"/> */}
                        </div>
                        <div className="itemNameSub2">
                            <br/>
                            <TextField
                                id={"itemName"}
                                label = {this.state.Items.title}
                                className = {"itemName"}
                                
                            />
                            <br/>
                            <div className="itemDescriptionField">
                                <TextField
                                    id={"itemDes"}
                                    label = {this.state.Items.description}
                                    className = {"itemDes"}
                                />
                            </div>                            
                            <div className="buttonDiv">
                                <div className="buttonDivSub1">
                                    <Link to={`/itemBuy/${this.props.match.params.id}`}><Button
                                        id={"buyNowBtn"}
                                        value ={"Buy Now"}
                                        classname={"btn btn-outline-danger"}
                                        type = {"button"}
                                    /></Link>
                                </div>
                                <div className="buttonDivSub2">
                                    <Link><Button
                                        id={"addCartBtn"}
                                        value ={"Add To Cart"}
                                        classname={"btn btn-outline-warning"}
                                        type = {"button"}
                                        onSubmit={this.onButtonSubmit}
                                    /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                
                </div> 
                
                <div className="itemDesDiv">

                </div>
                        
            </div>
            </ul> )
        }
}
