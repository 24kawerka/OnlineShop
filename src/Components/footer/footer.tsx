import React from 'react'
import s from './footer.module.scss'
import { Newslatter } from './newslatter/newslatter'
import './../../App.scss'
import { Services } from './services/services'
import { Service } from './service/service'
import { Extras } from './extras/extras'
import { ContactUs } from './contact-us/contact-us'


export const Footer = () => {
    return (
        <footer className={s.footer}>
            <ContactUs />
            <Services />
            <Service />
            <Extras />
            <Newslatter />
        </footer>

    )
}

