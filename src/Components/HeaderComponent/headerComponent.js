import React, { useContext } from 'react';
import {Link} from 'react-router-dom';

import img from '../../Images/logo.jpeg';
import {UserContext} from '../../App';

export default function HeaderComponent () {
    
    const {state, dispatch} = useContext(UserContext);

    const RenderMenu = () => {
        if(state){
            return(
                <>
                    <li className="nav-item">
                        <Link className="nav-link" to="/"><i className ="fas fa-home" id="acc-icon"/><p>Home</p></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/cart"><i className ="fas fa-cart-plus" id="cart-icon"/><p>Cart</p></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/"><i className ="fas fa-user-circle" id="acc-icon"/><p>Account</p></Link>
                    </li>
                    <li className="nav-item" >
                        <Link className="nav-link" to="/logout"><i className ="fas fa-sign-out-alt" id="acc-icon"/><p>Log-out</p></Link>
                    </li>
                </>
            )
        }else{
            return(
                <>
                    <li className="nav-item">
                        <Link className="nav-link" to="/"><i className ="fas fa-home" id="acc-icon"/><p>Home</p></Link>
                    </li>
                    <li className="nav-item" id="sign-div">
                        <Link className="nav-link" to="/login"><i className ="fas fa-sign-in-alt" id="acc-icon"/><p>Login</p></Link>
                    </li>
                    <li className="nav-item" >
                        <Link className="nav-link" to="/register"><i className ="fas fa-registered" id="acc-icon"/><p>Register</p></Link>
                    </li>
                    <li className="nav-item" >
                        <Link className="nav-link" to="/sellerhome"><i className ="fas fa-sellsy" id="acc-icon"/><p>Seller Profile</p></Link>
                    </li>
                </>
            )
        }
    }
        return (
            <nav className = "navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
                <div className="container">
                    <Link to = "/"><img src = {img} className="hLogo"/><h1 className="navbar-brand" id="hTopic">YoShop</h1></Link>
                    <div className="navbarOthers">
                        <ul className="navbar-nav mr-auto">
                            <RenderMenu/>
                        </ul>
                    </div>
                </div>
            </nav>
            
        )
    
}
