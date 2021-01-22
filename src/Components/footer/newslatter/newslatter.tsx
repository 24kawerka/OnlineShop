import React from 'react'
import './newslatter.scss'
import letter from './../../../Pictures/Icons/letter.png'

export const Newslatter = () => {
    return (
        <div className='newslatter'>          
            <img src={letter} alt='letter'className='newslatter__icon'/>
            newslatter
            <input className='newslatter__input' placeholder='email address'></input>
            <button>Subscribe</button>
        </div>
    )
}
