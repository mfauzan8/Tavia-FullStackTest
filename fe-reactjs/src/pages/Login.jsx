import React, { useState } from 'react'
import logo from '../assets/img/logo-kaon.png'
import { Link, useNavigate } from 'react-router-dom'
import { axiosInstance } from '../utils/axiosInstance'
import Auth from '../utils/Auth'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState("");
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        axiosInstance.post('/login', {
            email: email,
            password: password
        }).then((response) => {
            Auth.storeUserInfoToCookie(response.data.token)
            navigate('/homepage')
        })
            .catch((error) => {
                console.log(error)
            })
    }
    return (
        <div className="container-fluid">
            <div className='row'>
                <div className="col-4 p-0">
                    <div className="d-flex flex-column justify-content-evenly align-items-center h-100">
                        <img src={logo} alt="logo" className='img-fluid'
                        />
                        <div className='text-white'>
                            An application that will make your gift sending experience even more memorable
                        </div>
                    </div>
                </div>
                <div className="col-8">
                    <div className="d-flex flex-column h-100 justify-content-center align-items-center">
                        <div className="w-75 p-5 d-flex flex-column gap-2">
                            <div className='heading-font'>
                                Get Started
                            </div>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label className="form-label">Email <span>*</span></label>
                                    <input type="email" className="form-control-auth" placeholder='Email'
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                                <div className="mb-5">
                                    <label className="form-label">Password <span>*</span></label>
                                    <input type="password" className="form-control-auth" placeholder='Password'
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
                                <button type="submit" className="btn btn-danger w-100 rounded-pill">Login</button>
                            </form>

                            <Link to={'/register'} style={{ textDecoration: 'none' }}>
                                <div className="text-register">REGISTER NOW</div>
                            </Link>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Login