import React from 'react'
import iconKaon from '../assets/img/kaon_icon 1.png'
import menuIcon from '../assets/img/menu.png'
import sales from '../assets/img/sales.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import Auth from '../utils/Auth'
import { useNavigate } from 'react-router-dom'

const Leftbar = () => {
    const navigate = useNavigate()

    const handleLogout = () => {
        Auth.isLoggedOut()
        navigate("/")
    }
    return (
        <div className='leftbar d-flex flex-column align-items-center gap-5 py-3'>
            <img src={iconKaon} alt="icon" style={{ width: '39px' }} />
            <div className="d-flex flex-column align-items-center h-12 fw-bold">
                <img src={menuIcon} alt="icon" style={{ width: '39px' }} />
                MENU
            </div>
            <div className="d-flex flex-column align-items-center h-12 fw-bold">
                <img src={sales} alt="icon" style={{ width: '39px' }} />
                SALES
            </div>
            <div className='button-logout d-flex flex-column align-items-center h-12 fw-bold ' onClick={handleLogout}>
                <FontAwesomeIcon icon={faRightFromBracket} size="2x" rotation={180} />
                Log out
            </div>
        </div>)
}

export default Leftbar