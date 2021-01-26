import React from 'react'
import './social-networks.scss'
import twitter from './../../../Assets/img/social-networks/twitter.png'
import instagram from './../../../Assets/img/social-networks/instagram.png'
import facebook from './../../../Assets/img/social-networks/facebook.png'
import pinterest from './../../../Assets/img/social-networks/pinterest.png'

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

