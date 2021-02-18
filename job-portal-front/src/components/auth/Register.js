import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import UserContext from '../../context/UserContext'

export const Register = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [passwordCheck, setPasswordCheck] = useState();
    const [Name, setName] = useState();

    const { setUserData } = useContext(UserContext);
    const history = useHistory();

    const submit = async (e) => {
        e.preventDefault();
        const newUser = { email, password, passwordCheck, Name };
        await axios.post(
            'http://localhost:5000/users/register',
            newUser
        );
        const loginRes = await axios.post('http://localhost:5000/users/login',{
            email,
            password,
        });
        setUserData({
            token: loginRes.data.token,
            user: loginRes.data.user,
        });
        localStorage.setItem('auth-token', loginRes.data.token);
        localStorage.setItem('user_id', loginRes.data.user.id)
        
        history.push('/user')
    };


    return (
        <div className="page">
            <h2>Register</h2>
            <form className="form" onSubmit={ submit }>
                <label htmlFor="register-email">Email</label>
                <input 
                    id="register-email" 
                    type="email" 
                    onChange={(e) => setEmail(e.target.value)}/>

                <label htmlFor="register-password">Password</label>
                <input 
                    id="register-password" 
                    type="password" 
                    onChange={(e) => setPassword(e.target.value)}/>

                <label htmlFor="confirm-password">Confirm Password</label>
                <input 
                    id="confirm-password" 
                    type="password" 
                    placeholder="Confirm Password"
                    onChange={(e) => setPasswordCheck(e.target.value)}/>

                <label htmlFor="register-display-name">Full Name</label>
                <input 
                    id="register-display-name" 
                    type="text" 
                    onChange={(e) => setName(e.target.value)}/>

                <input type="submit" value="Register"/>
            </form>
        </div>
    )
}
