import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import './styles.css';




const LoginRegister = () => {
    React.useEffect(() => {
        const fontLink = document.createElement('link');
        fontLink.href = 'https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap';
        fontLink.rel = 'stylesheet';
        document.head.appendChild(fontLink);

        const iconLink = document.createElement('link');
        iconLink.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css';
        iconLink.rel = 'stylesheet';
        document.head.appendChild(iconLink);

    }, []);

    const [isSignUpMode, setIsSignUpMode] = useState(false);
    const [showLoginPassword, setShowLoginPassword] = useState(false);
    const [showRegPassword, setShowRegPassword] = useState(false);

    const toggleSignUpMode = () => {
        setIsSignUpMode(!isSignUpMode);
    };

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const handleLogin = async () => {
        e.preventDefault()
        const newdata = { email, password };
        console.log(newdata);
        

        console.log(response.data.msg);

        toast.success("User Login Succesfully")

        if (response.data.token) {
            localStorage.setItem("Token", response.data.token);
        }
    };

    return (
        <div className={`container ${isSignUpMode ? 'sign-up-mode' : ''}`}>
            <div className="forms-container">
                <div className="signin-signup">
                    {/* Sign In Form */}
                    <form className="sign-in-form">
                        <h2 className="title">Login Here!..</h2>
                        <div className="input-field">
                            <i className="fas fa-user"></i>
                            <input
                                type="text"
                                name="usuario"
                                autoComplete="username"
                                placeholder="Username"
                                required
                                value={email} onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="input-field">
                            <i className="fas fa-lock"></i>
                            <input
                                type={showLoginPassword ? "text" : "password"}
                                name="contraseña"
                                autoComplete="current-password"
                                placeholder="Password"
                                id="id_password"
                                required
                                value={password} onChange={(e) => setPassword(e.target.value)}
                            />
                            <i
                                className={`far ${showLoginPassword ? 'fa-eye-slash' : 'fa-eye'}`}
                                id="togglePassword"
                                onClick={() => setShowLoginPassword(!showLoginPassword)}
                                style={{ cursor: 'pointer' }}
                            ></i>
                        </div>
                        <a href="#" className="pass">Forgot your password?</a>
                        <button className='btn solid' onClick={handleLogin}>Sign in</button>
                    </form>

                    <form className="sign-up-form">
                        <h2 className="title">Register Now!..</h2>
                        <div className="input-field">
                            <i className="fas fa-user"></i>
                            <input
                                type="text"
                                name="usuario"
                                autoComplete="username"
                                placeholder="Username"
                                required
                            />
                        </div>
                        <div className="input-field">
                            <i className="fas fa-envelope"></i>
                            <input
                                type="email"
                                name="correo"
                                autoComplete="email"
                                placeholder="Email"
                                required
                            />
                        </div>
                        <div className="input-field">
                            <i className="fas fa-lock"></i>
                            <input
                                type={showRegPassword ? "text" : "password"}
                                name="contraseña"
                                autoComplete="current-password"
                                placeholder="Password"
                                id="id_reg"
                                required
                            />
                            <i
                                className={`far ${showRegPassword ? 'fa-eye-slash' : 'fa-eye'}`}
                                id="toggleReg"
                                onClick={() => setShowRegPassword(!showRegPassword)}
                                style={{ cursor: 'pointer' }}
                            ></i>
                        </div>
                        <input type="submit" value="Create account" className="btn solid" />
                    </form>
                </div>
            </div>

            <div className="panels-container">
                <div className="panel left-panel">
                    <div className="content">
                        <h3>You don't have an account?</h3>
                        <p>Create your account right now to follow people and like publications</p>
                        <button className="btn transparent" onClick={toggleSignUpMode}>
                            Register
                        </button>
                    </div>
                    <img src="img/log.svg" className="image" alt="" />
                </div>

                <div className="panel right-panel">
                    <div className="content">
                        <h3>Already have an account?</h3>
                        <p>Login to see your notifications and post your favorite photos</p>
                        <button className="btn transparent" onClick={toggleSignUpMode}>
                            Sign in
                        </button>
                    </div>
                    <img src="img/register.svg" className="image" alt="" />
                </div>
            </div>
        </div>
    );
};

export default LoginRegister;