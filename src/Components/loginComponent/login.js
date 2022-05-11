import React, { useContext,  useState } from 'react';
import {Link, useHistory} from 'react-router-dom';

import TextInput from '../TextInputComponent/textInputComponent';
import Button from '../ButtonComponent/button';
import TextView from '../TextViewComponent/textViewComponent';
import axios from 'axios';


import {UserContext} from '../../App';

function Login() {

    const {state, dispatch} = useContext(UserContext);

    const history = useHistory();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')   


   function handlerSubmit (e)  {
        e.preventDefault();

        const loginDetails = {
            email, 
            password 
        }

        axios.post(`http://localhost:5000/userDetails/login` , loginDetails).then(res => {
            console.log(res.data.id);
            console.log(res.status)
            localStorage.setItem("UserID", res.data.id);
            if(res.status === 200){
                dispatch({type : "USER", payload : true});
                alert("Login Successfull");                
                history.push('/');
            } 
            
        })

        
    }
   
        return (
            <div className = "container">
                <div className = "loginMainDiv">
                    <div className="loginsubDiv1">
                        <br/><h1 className = "loginText">Login to Explore</h1><hr/><br/><br/>
                        <TextInput 
                            type ={"email"}
                            name = {"email"}
                            textFeildName = {"Username/Email"}
                            placeholder = {"abc@gmailcom"}
                            onChange = {e => {
                                setEmail(e.target.value);
                            }}
                        /><br/>
                        <TextInput 
                            type ={"password"}
                            name = {"password"}
                            textFeildName = {"Password"}
                            placeholder = {"********"}
                            onChange = {e => {
                                setPassword(e.target.value);
                            }}
                        /><br/>
                        <Button
                            id ={"login"}
                            value = {"Login"}
                            classname = {"btn btn-secondary btn-lg"}
                            type = {"submit"}
                            onSubmit = {handlerSubmit}
                        />
                    </div>
                    <div className="loginsubDiv2">
                        <TextView
                            label = {"WELCOME...!!"}
                            id ={"welcomeText"}
                            className = {"welcomeText"}
                        /><br/><br/><br/>
                        <TextView
                            label = {"Are You New to Online Shopping Store?"}
                            id ={"welcomeNote"}
                            className = {"welcomeNote"}
                        />
                        <TextView
                            label = {"You Can Register Here"}
                            id ={"regText"}
                            className = {"regText"}
                        />
                        <Link to="/register"><Button
                            id ={"reg"}
                            value = {"Register"}
                            classname = {"btn btn-outline-info btn-lg"}
                            type = {"submit"}
                        /></Link>
                    </div>
                </div>
            </div>
        )
    
}
export default Login;