import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import UserContext from '../../context/UserContext'

export default function Options() {
    const {userData, setUserData} = useContext(UserContext);

    const history = useHistory();

    const register = () => history.push('/register');
    const login = () => history.push('/login');
    const logout = () => {
        setUserData({
            token: undefined,
            user: undefined
        });
        localStorage.setItem("auth-token", "")
        localStorage.setItem("user_id", "");
        history.push('/');
    };

    return (
        <nav>
            {
                userData.user ? 
                (<button onClick={ logout }>Log out</button>) :
                (<>
                    <button id="login" onClick={ login }>Sign in</button>
                    <button id="register" onClick={ register }>Sign up</button>
                </>)
            }
            
        </nav>
    )
}
