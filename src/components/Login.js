import React, { useState } from 'react';
import PropType from 'prop-types';

const Login = ({onLogin, errorMessage}) => {
    const [username, setUsername] = useState(0);
    const [password, setPassword] = useState(0);
    return (
        <div>
            Welcome to VodQA
            <div>
                <label>Username: 
                    <input type="text" onChange={(event)=> setUsername(event.target.value)}/>
                </label>
            </div>
            <div>
                <label>Password: 
                    <input type="password" onChange={(event)=> setPassword(event.target.value)}/>
                </label>
            </div>
            <div>
                <button id='submit' onClick={() => onLogin({username, password})}>Login</button>
            </div>
            <div>
                {errorMessage}
            </div>
        </div>
    );
};

Login.propTypes = {
    onLogin: PropType.func.isRequired,
    errorMessage: PropType.string
};

export default Login;
