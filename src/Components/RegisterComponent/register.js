import React, { Component } from 'react';
import axios from 'axios';

import TextInput from '../TextInputComponent/textInputComponent';
import Button from '../ButtonComponent/button';
import Logo from '../../Images/sign-up.png'

class register extends Component {

    constructor(props){
        super(props);
        this.state = {
            fullName : '',
            email : '',
            phone : '',
            password : ''
        }
    }

    handlerChange = (e) =>{
		this.setState({[e.target.name] : e.target.value})
	}

    handlerSubmit = (e) => {
        e.preventDefault();
        
        const details = {
            fullName : this.state.fullName,
            email : this.state.email,
            phone : this.state.phone,
            password : this.state.password
        }

        axios.post(`http://localhost:5000/userDetails`, details).then((res)=>{
            alert("User Registration Succeess")
        })

        this.setState({
            fullName : '',
            email : '',
            phone : '',
            password : ''
        })
        this.props.history.push('/login');
    }
    
    render() {
        return (
            <div className="container">
                <h2 className="createAccText">CREATE AN ACCOUNT</h2><hr className = "createAccHr"/><br/>
                <div className="container mt-5">
                <div className="createAccMainDiv">
                    <div className="createAccSubDiv1">
                        <TextInput
                            type={"text"}
                            textFeildName={"Full Name "}
                            name={"fullName"}
                            placeholder={"Enter Your Full Name Here"}
                            onChange={this.handlerChange}
                        />
                        <TextInput
                            type={"email"}
                            textFeildName={"Email "}
                            name = {"email"}
                            placeholder={"Enter Your Email Here"}
                            onChange={this.handlerChange}
                        />
                        <TextInput
                            type={"text"}
                            textFeildName={"Phone Number "}
                            name = {"phone"}
                            placeholder={"Enter Your Phone Number Here"}
                            onChange={this.handlerChange}
                        />
                         <TextInput
                            type={"password"}
                            textFeildName={"Password "}
                            name = {"password"}
                            placeholder={"Enter Your Password Here"}
                            onChange={this.handlerChange}
                        />
                        <Button
                            id ={"registerBtn"}
                            value = {"Register"}
                            classname = {"btn btn-outline-info btn-lg"}
                            type = {"submit"}
                            onSubmit = {this.handlerSubmit}
                        />
                    </div>
                    <div className="createAccSubDiv2">
                        <img className="logoReg" src={Logo}/>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}
export default register;