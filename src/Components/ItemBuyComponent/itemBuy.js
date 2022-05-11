import React, { Component } from 'react';
import axios from 'axios';

import TextInput from '../TextInputComponent/textInputComponent';
import image from '../../Images/Rolex.jpeg';
import TextView from '../TextViewComponent/textViewComponent';
import Button from '../ButtonComponent/button';
import { Link } from 'react-router-dom';

class itemBuy extends Component {
    constructor(props){
        super(props);
        this.state = {
            Item : '',
            qty : '',
            price : '',
            BillingName : '',
            email : '',
            phone : '',
            address : '',
            detailsState : false,
            details : ''

        }
    }

    componentDidMount(){

        

        axios.get(`http://localhost:5000/itemDetails/${this.props.match.params.id}`)
        .then(result => {
            this.setState({isLoaded:true , Item : result.data.item});
            console.log(result.data.item);
            
        }).catch(err => {
            console.log(err);
        })

        axios.get(`http://localhost:5000/billingDetails/${localStorage.getItem("UserID")}`)
        .then(result => {
            
            console.log(result.data.item);
            this.setState({isLoaded:true , details : result.data.item});
            this.setState({isLoaded:true , BillingName : result.data.item.BillingName});
            this.setState({isLoaded:true , email : result.data.item.email});
            this.setState({isLoaded:true , phone : result.data.item.phone});
            this.setState({isLoaded:true , address : result.data.item.address});

            if(this.state.details == null){
                this.state.detailsState = true;                
            }
            console.log(this.state.detailsState);
            
        }).catch(err => {
            console.log(err);
        })
    }

    handlerChange = (e) => {
        this.setState({[e.target.name] : e.target.value})
        this.calculatePrice();
    }

    calculatePrice = () => {
        const {qty} = this.state;
        this.setState({ price : this.state.qty * this.state.Item.price});
    }

    saveData = () =>{

        const {BillingName, email, phone, address} = this.state;

        const details = {
            BillingName ,
            email,
            phone,
            address,
            userID : localStorage.getItem("UserID")
        }

        if(this.state.detailsState == false){
            axios.post(`http://localhost:5000/billingDetails/`, details).then((res)=>{
                alert("Billing Details Added")
            })
        }
        else if (this.state.detailsState == false){
            axios.put(`http://localhost:5000/billingDetails/${this.state.details._id}`, details).then((res)=>{
                alert("Billing Details Updated")
            })
        }
       

    }

    render() {
        return (
            <div>
                <div className="AddressDiv">
                    <div className="AddressSub1">
                        <h1 className="AddText">Billing Details</h1><hr className="billingHr"/><br/>
                        <TextInput
                            type = {"text"}
                            textFeildName ={"Biller's Name"}
                            placeholder = {"Enter Your Name"}
                            name = {"BillingName"}
                            value = {this.state.BillingName}
                            onChange = {this.handlerChange}
                        />
                        <TextInput
                            type = {"email"}
                            textFeildName ={"Email"}
                            placeholder = {"Enter Your email"}
                            name = {"email"}
                            value = {this.state.email}
                            onChange = {this.handlerChange}
                        />
                        <TextInput
                            type = {"text"}
                            textFeildName ={"Phone Number"}
                            placeholder = {"Enter Your phone number"}
                            name = {"phone"}
                            value = {this.state.phone}
                            onChange = {this.handlerChange}
                        />
                        <TextInput
                            type = {"text"}
                            textFeildName ={"Billing Address"}
                            placeholder = {"Enter Your address"}
                            name ={"address"}
                            value = {this.state.address}
                            onChange = {this.handlerChange}
                        />
                        <Button
                            id ={"billingSub"}
                            value ={"SAVE DETAILS"}
                            classname = {"btn btn-outline-info"}
                            type={"submit"}
                            onSubmit = {this.saveData}
                        />
                    </div>
                    <div className="OrderSum">
                        <h1 className="AddText">Order Summary</h1><hr className="billingHr"/><br/>
                        <div className="orderSumSub11">
                            <div className="orderSumSub11Sub1">
                                <img src= {image} className="itemImgBuy"/> 
                            </div>
                            <div className="orderSumSub11Sub2">
                            <TextView
                                label={this.state.Item.title}
                                id = {"itemBuyImg"}
                                className = {"itemBuyImg"}
                            />
                            <TextView
                                label={this.state.Item.description}
                                id = {"itemBuyImg"}
                                className = {"itemBuyImg"}
                            />
                            </div><div></div>
                            
                        </div>
                        <div className = "qtyDiv">
                            <TextInput
                                type = {"text"}
                                textFeildName ={"Quantity"}
                                placeholder = {"Enter qty"}
                                name = {"qty"}
                                onChange = {this.handlerChange}
                            />
                            <p className="warnin"><small>*press space to calculate the total</small></p>
                        </div>
                        <div className="PriceTot">
                            <div><h3>Price : Rs. {this.state.price}</h3></div>
                            <div>
                                <Link to ={`/delivery/${this.state.price}`}><Button
                                id ={"proceed"}
                                value ={"PROCEED"}
                                classname = {"btn btn-outline-danger"}
                                type={"submit"}
                            /></Link></div>
                            
                        </div>
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default itemBuy;