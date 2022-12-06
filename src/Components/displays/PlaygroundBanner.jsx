import React from 'react'
import '../styles/banner-style.css'
import { Link } from 'react-router-dom'
import icon from '../images/icon.png'
import { useNavigate } from 'react-router-dom'

const PlaygroundBanner = () => {
    const navigate = useNavigate()

    const homeHandler = () => {
        navigate("/")
    }   

    return (
        <div className='banner-container'>
            <img src={icon} alt="godzila-icon" className='icon-logo' />
            <div className='logo-container'>
                <h1 className='logo' style={{ fontSize: '60px' }}>Godzillapi
                    <span style={{ fontSize: '15px', fontWeight: '0' }}> A simple project by <Link className='profile'>Jacob Truong</Link></span>
                </h1>
                <h4 className='logo' style={{ fontSize: '35px' }}>PLAYGROUND</h4>
                    <button className='playground' onClick={homeHandler} style={{marginRight: '10px'}}>Home</button>
            </div>
        </div>
    )
}


export default PlaygroundBanner