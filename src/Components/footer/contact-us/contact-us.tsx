import React from 'react'
import { SocialNetworks } from '../social-networks/social-networks'
import s from './../footer.module.scss'

export const ContactUs = () => {
    return (
        <div className={s.contact_us}>
            <span>contact us</span>
            <ul className={s.footer__ul}>
                <li className={s.footer__li}>location</li>
                <li className={s.footer__li}>063-333-33-33</li>
                <li className={s.footer__li}>getout@gmail.com</li>
            </ul>    
            <SocialNetworks />
        </div>
    )
}