import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import DHeader from '../DeliveryHeaderComponent/DeliveryHeader'

class DeliveryHome extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: "",
      address: "",
      price: 0,
      total : 0,
      itemP: ''
    }
  }
  

  onChange = (e) =>
    this.setState({
      [e.target.name]: e.target.value,
    });

  
  componentDidMount(){
    
    this.setState({itemP : Number(this.props.match.params.id)});
   }

   calcTotal = (p) => {

      this.setState({total : Number(this.state.price + this.state.itemP)})

   }

  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);

    const details = {
      name: this.state.name,
      address: this.state.address,
    };

  
    axios
      .get(`http://localhost:5000/locationDetails/${this.state.address}`)
      .then((res) => {
        console.log(res.data);
        // this.state.price = res.price;
        this.setState({
          price: Number(res.data.price),
        });
        console.log(res.price);
        this.calcTotal(res.data.price)
      });

      
  };

  render() {
    const { name, address, price } = this.state;
    return (
     
      <div className="container">
         <DHeader/>
        <h2 className="mt-2">Delivary information</h2>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={name}
              placeholder="Enter Name"
              onChange={this.onChange}
            ></input>
          </div>
          <div className="form-group">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              className="form-control"
              name="address"
              value={address}
              placeholder="Enter Deliveray Address"
              onChange={this.onChange}
            ></input>
          </div>
          <div className="dilBtnG">
            <div>
              <button type="submit" className="btn btn-primary">
                Add
              </button>
            </div>
            <div>
              <button type="submit" className="btn btn-primary">
                Pay Now
              </button>
            </div>
          </div>
        </form>
        <div className="mt-4">
          <label>Delivary Cost: {price}</label><br/>
          <label>Total Price: {this.state.total}</label>
        </div>
      </div>
    );
  }
}
export default DeliveryHome;