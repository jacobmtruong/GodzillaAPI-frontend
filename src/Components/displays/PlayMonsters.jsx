import React from 'react'
import '../styles/playmonsters.css'

const PlayMonsters = (props) => {
    const result = props.result;
    const error = props.error;
    
    return (
        <div>
            {
                result.length > 0?
                result.map((item, index) => {
                    return (
                        <div key={index} className='monster-card'>
                            <p style={{fontSize: '32px', fontWeight: '600'}}>{item.name}</p>
                            <img src={item.imgUrl} alt="img" className='monster-image'/>
                            <p><span className='titles'>First Appear</span>: {item.firstAppear}</p>
                            <p><span className='titles'>Year Created</span>: {item.yearCreated}</p>
                            <p><span className='titles'>Level</span>: {item.level}</p>
                            <a href={item.link} style={{ margin: '0' }} className="learnmore-button">Learn more</a>
                        </div>
                    )
                }) : <p>{error}</p>
            }
        </div>
    )
}

export default PlayMonsters