import React, { Component } from 'react';
import axios from 'axios';

import CardView from '../CardViewComponent/cardView';

class home extends Component {

    constructor(props){
        super(props);
        this.state = {
            items : []
        };
    }    

    componentDidMount(){

        axios.get('http://localhost:5000/itemDetails').then(res => {
            console.log(res);
            this.setState({items : res.data});
        }).catch(err => {
            console.log(err);
        })
    }
   
    render() {
        const {items} = this.state;
        return (
            <div className="container">
            <div className="cardViewDiv">
                {items.map(item =>(
                    
                    <div className = "cardViewSubHome" key={item._id}>
                        
                        <CardView                         
                            title = {item.title}
                            price = {item.price}
                            btnName = {"Show more"}
                            id = {item._id}
                            imgLoc = {item.image}
                            path ={"/itemDescription"}
                        />
                    </div>
                ))}               
            </div>
            </div>
        )
    }
}
export default home;