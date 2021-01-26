import React from 'react'
import { PreloaderFullScreen } from '../../Utils/preloader/Preloader'
import { BannerAdvertising } from './banner-advertising/Banner-advertising'
import { PopularProducts } from './popular-product/Popular-products'
import { PromicesCompany } from './promices-company/Promices-company'
import { TopRated } from './top-rated/top-rated'


const Content = () => {

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
export {Content}
