import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import UserContext from '../../context/UserContext'

export const Login = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const { setUserData } = useContext(UserContext);
    const history = useHistory();

    const submit = async (e) => {
        e.preventDefault();
        const loginUser = { email, password };
        const loginRes = await axios.post(
            'http://localhost:5000/users/login',
            loginUser
        );
        setUserData({
            token: loginRes.data.token,
            user: loginRes.data.user,
        });
        localStorage.setItem('auth-token', loginRes.data.token);
        localStorage.setItem('user_id', loginRes.data.user.id)
        console.log(loginRes.data.user);
        if(loginRes.data.user.role != 'user')
            history.push('/Admin')
        else
            history.push('/user')
    };
    return (
        <div className="page">
            <h2>Login</h2>
            <form className="form" onSubmit={ submit }>
                <label htmlFor="login-email">Email</label>
                <input 
                    id="login-email" 
                    type="email" 
                    onChange={(e) => setEmail(e.target.value)}/>

                <label htmlFor="login-password">Password</label>
                <input 
                    id="login-password" 
                    type="password" 
                    onChange={(e) => setPassword(e.target.value)}/>

                <input type="submit" value="login"/>
            </form>
        </div>
    )
}
