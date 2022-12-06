import React from 'react'
import '../styles/banner-style.css'
import icon from '../images/icon.png'
import { useNavigate } from 'react-router-dom'


const Banner = () => {
    const navigate = useNavigate()


    const playgroundHandler = () => {
        navigate('/playground')
    }

    return (
        <div className='banner-container'>
            <img src={icon} alt="godzila-icon" className='icon-logo' />
            <div className='logo-container'>
                <h1 className='logo' style={{ fontSize: '60px' }}>Godzillapi
                    <span style={{ fontSize: '15px', fontWeight: '0' }}> A simple project by <a className='profile' href='https://jacobtruong.com'>Jacob Truong</a></span>
                </h1>
                <h4 className='logo' style={{ fontSize: '30px' }}>ゴジラのAPI</h4>
                    <button className='playground' onClick={playgroundHandler}>Go to API Playground</button>
            </div>
        </div>
    )
}

export default Banner