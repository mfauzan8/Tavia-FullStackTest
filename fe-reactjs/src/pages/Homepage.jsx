import React from 'react'
import Leftbar from '../components/Leftbar'
import Navbar from '../components/Navbar'
import img1 from '../assets/img/img-1.png'
import { orderlists } from '../utils/OrderList'

const Homepage = () => {
    return (
        <div className='d-flex'>
            <Leftbar />
            <div className="flex-column w-100">
                <Navbar />
                <div className='content d-flex' style={{ paddingTop: '14px' }}>
                    <div className='d-flex gap-4 flex-wrap' style={{ height: '100%', width: '62%', paddingLeft: '24px' }}>
                        <div className="card" style={{ width: '195px', height: '300px', borderStyle: 'none' }}>
                            <img src={img1} className="card-img-top" alt="menu1" />
                            <div className="card-body">
                                <h5 className="card-title">Strawberry Pancake</h5>
                                <p className="card-text">Rp. 28.000</p>
                            </div>
                        </div>
                        <div className="card" style={{ width: '195px', height: '300px', borderStyle: 'none' }}>
                            <img src={img1} className="card-img-top" alt="menu1" />
                            <div className="card-body">
                                <h5 className="card-title">Strawberry Pancake</h5>
                                <p className="card-text">Rp. 28.000</p>
                            </div>
                        </div>
                        <div className="card" style={{ width: '195px', height: '300px', borderStyle: 'none' }}>
                            <img src={img1} className="card-img-top" alt="menu1" />
                            <div className="card-body">
                                <h5 className="card-title">Strawberry Pancake</h5>
                                <p className="card-text">Rp. 28.000</p>
                            </div>
                        </div>
                        <div className="card" style={{ width: '195px', height: '300px', borderStyle: 'none' }}>
                            <img src={img1} className="card-img-top" alt="menu1" />
                            <div className="card-body">
                                <h5 className="card-title">Strawberry Pancake</h5>
                                <p className="card-text">Rp. 28.000</p>
                            </div>
                        </div>
                    </div>
                    <div className='d-flex flex-column gap-2' style={{ width: '36%' }}>
                        {orderlists.map((list, index) => (
                            <div className="card" key={index} style={{ borderStyle: 'none' }}>
                                <div className="d-flex p-3 gap-2 " style={{ height: '20%' }}>
                                    <div className="h-23">{index + 1}.</div>
                                    <div className="d-flex flex-column">
                                        <div className="h-12">
                                            {list.menu}
                                        </div>
                                        <div className='h-18'>
                                            {list.harga}
                                        </div>
                                    </div>
                                    <div className="d-flex flex-column align-items-center ms-auto">
                                        <div className="h-12">
                                            QTY
                                        </div>
                                        <div className='h-18'>
                                            {list.qty}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}

                        <div className="card mt-auto" style={{ borderStyle: 'none' }}>
                            <div className="d-flex p-3 gap-2 " style={{ height: '30%' }}>
                                <div className="d-flex flex-column">
                                    <div className="h-12">
                                        Total
                                    </div>
                                    <div className='h-23'>
                                        Rp 224.000
                                    </div>
                                </div>
                                <div className="d-flex flex-column align-items-center ms-auto">
                                    <div className="h-12">
                                        QTY
                                    </div>
                                    <div className='h-23'>
                                        16
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div >
    )
}

export default Homepage