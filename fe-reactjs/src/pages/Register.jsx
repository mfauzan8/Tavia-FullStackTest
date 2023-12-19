import React, { useState } from 'react'
import logo from '../assets/img/logo-kaon.png'
import { axiosInstance } from '../utils/axiosInstance';

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [hp, setHp] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        axiosInstance.post('/register', {
            email: email,
            password: password,
            hp: hp
        }).then((response) => {
            console.log(response)
        }
        ).catch((error) =>
            console.log(error))
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
                                Register
                            </div>
                            <form onSubmit={(e) => handleSubmit(e)}>
                                <div className="mb-3">
                                    <label className="form-label">HP <span>*</span></label>
                                    <input type="text" className="form-control-auth" placeholder='HP' value={hp}
                                        onChange={(e) => setHp(e.target.value)} />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Email <span>*</span></label>
                                    <input type="email" className="form-control-auth" placeholder='Email' value={email}
                                        onChange={(e) => setEmail(e.target.value)} />
                                </div>
                                <div className="mb-5">
                                    <label className="form-label">Password <span>*</span></label>
                                    <input type="password" className="form-control-auth" placeholder='Password' value={password}
                                        onChange={(e) => setPassword(e.target.value)} />
                                </div>
                                <button type="submit" className="btn btn-danger w-100 rounded-pill">Register</button>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Register