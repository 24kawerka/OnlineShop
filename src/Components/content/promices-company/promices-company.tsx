import React from 'react'
import s from './promices-company.module.scss'
import customerservice from './../../../Pictures/Icons/Promices-company/customer-service.png'
import car from './../../../Pictures/Icons/Promices-company/delivery-truck.png'
import giftbox from './../../../Pictures/Icons/Promices-company/giftbox.png'
import moneybox from './../../../Pictures/Icons/Promices-company/moneybox.png'

export const PromicesCompany = () => {
    return (
        <div className={s.promices_company}>
            <div className={s.promices_company__element}>
                <img src={customerservice} alt='support' className={s.promices_company__icons} />
                <h4>24/7 Support</h4>
                <span>online support 24/7</span>
            </div>
            <div className={s.promices_company__element}>
                <img src={moneybox} alt='payment' className={s.promices_company__icons} />
                <h4> Secure Payment</h4>
                <span>100% secure payment</span>
            </div>
            <div className={s.promices_company__element}>
                <img src={giftbox} alt='gift' className={s.promices_company__icons} />
                <h4> Special Gift Cards</h4>
                <span>
                    give the perfect gift</span>
            </div>
            <div className={s.promices_company__element}>
                <img src={car} alt='shipping' className={s.promices_company__icons} />
                <h4> World Wide Shipping</h4>
                <span>on order over $99</span>


            </div>

        </div>
    )
}