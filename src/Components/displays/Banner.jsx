import React from 'react'
import '../styles/banner-style.css'
import { Link } from 'react-router-dom'
import icon from '../images/icon.png'


const Banner = () => {
    const playgroundHandler = () => {
        window.open('/playground')
    }

    return (
        <div className='banner-container'>
            <img src={icon} alt="godzila-icon" className='icon-logo' />
            <div className='logo-container'>
                <h1 className='logo' style={{ fontSize: '60px' }}>Godzillapi
                    <span style={{ fontSize: '15px', fontWeight: '0' }}> A simple project by <Link className='profile'>Jacob Truong</Link></span>
                </h1>
                <h4 className='logo' style={{ fontSize: '30px' }}>ゴジラのAPI</h4>
                    <button className='playground' onClick={playgroundHandler}>Go to API Playground</button>
            </div>
        </div>
    )
}

export default Banner