import React from 'react'
import './social-networks.scss'
import twitter from './../../../Pictures/Icons/social-networks/twitter.png'
import instagram from './../../../Pictures/Icons/social-networks/instagram.png'
import facebook from './../../../Pictures/Icons/social-networks/facebook.png'
import pinterest from './../../../Pictures/Icons/social-networks/pinterest.png'

export const SocialNetworks = () => {
    return (
        <div className='social-networks'>
            <img src={twitter} alt='twitter_img' className='social-networks__img' />
            <img src={instagram} alt='instagram_img' className='social-networks__img' />
            <img src={facebook} alt='facebook_img' className='social-networks__img' />
            <img src={pinterest} alt='pinterest_img' className='social-networks__img' />
        </div>

    )
}

