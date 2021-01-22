import React from 'react'
import { PreloaderFullScreen } from '../../Other/preloader/preloader'
import { BannerAdvertising } from './banner-advertising/banner-advertising'
import { PopularProducts } from './popular-product/popular-products'
import { PromicesCompany } from './promices-company/promices-company'
import { TopRated } from './top-rated/top-rated'


export const Content = () => {

    return (
        <div>
            <PreloaderFullScreen />
            <BannerAdvertising />
            <PromicesCompany />
            <PopularProducts />
            <TopRated />
        </div>
    )
}
