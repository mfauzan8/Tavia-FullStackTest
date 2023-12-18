import React from 'react'
import logo from '../assets/img/logo-kaon.png'

const Register = () => {
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
                            <form>
                                <div className="mb-3">
                                    <label className="form-label">HP <span>*</span></label>
                                    <input type="text" className="form-control" />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Email <span>*</span></label>
                                    <input type="email" className="form-control" />
                                </div>
                                <div className="mb-5">
                                    <label className="form-label">Password <span>*</span></label>
                                    <input type="password" className="form-control" />
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