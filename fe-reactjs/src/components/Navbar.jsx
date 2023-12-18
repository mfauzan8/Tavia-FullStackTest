import React from 'react'

const Navbar = () => {
    return (
        <div className="navbar d-flex justify-content-center gap-4 w-100 px-4">
            <input type="text" className="form-control rounded-pill w-50" placeholder='Input QR Code Number' />
            <button className='btn btn-danger rounded-pill px-5'>Generate</button>
            <div className='d-flex flex-column align-items-center ms-auto'>
                <div className='h-12'>
                    03 April 2023, 15:00PM
                </div>
                <div className='h-23'>
                    Daily Order
                </div>
            </div>
        </div>)
}

export default Navbar