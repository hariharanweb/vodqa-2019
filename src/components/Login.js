import React from 'react';

const Login = () => {
    return (
        <div>
            Welcome to VodQA
            <div>
                <label>Username: </label>
                <input type="text"/>
            </div>
            <div>
                <label>Password: </label>
                <input type="password"/>
            </div>
            <div>
                <button>Login</button>
            </div>
        </div>
    );
};

export default Login;
