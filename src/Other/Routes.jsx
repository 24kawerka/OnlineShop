import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { Catalog } from '../Components/navbar/catalog/catalog'
import { AboutUs } from '../Components/categories/about-us/about-us'
import { BestSeller } from '../Components/categories/best-seller/best-seller'
import { Blog } from '../Components/categories/blog/blog'
import { NewProduct } from '../Components/categories/new-product/new-product'
import { Specials } from '../Components/categories/specials/specials'
import { Content } from '../Components/content/content'
import { Devices } from '../Components/navbar/devices/devices'
import { Games } from '../Components/navbar/games/games'
import { Laptops } from '../Components/navbar/laptops/laptops'
import { Phones } from '../Components/navbar/phones/phones'
import { Cart } from '../Components/cart/cart'
import { Information } from '../Components/footer/services/information/information'
import { PrivacyPolicy } from '../Components/footer/services/privacy-&-policy/privacy-&-policy'
import { TermsConditions } from '../Components/footer/services/terms-&-conditions/terms-&-conditions'
import { ContactUsServices } from '../Components/footer/services/contact-us-services/contact-us-services'
import { Wishlist } from '../Components/footer/service/wishlist/wishlist'
import { Search } from '../Components/footer/service/search/search'
import { AllCollections } from '../Components/footer/service/all-collections/all-collections'
import { News } from '../Components/footer/extras/news/news'
import { SpecialProduct } from '../Components/footer/extras/special-prosuct/special-product'
import { FeaturedProduct } from '../Components/footer/extras/featured-product/featured-product'
import { SomeProduct } from '../Components/content/someProduct'
import { Login } from './LoginForm/Login'
import { Register } from './LoginForm/Register'
import { Checkout } from './LoginForm/Checkout'
import { NewReview } from './newReview'
import { SearchResult } from './../Components/header/search-form/searchResult'


export const Routes = () => {

    return (
        <>
            <Switch>
                <Route exact path='/home' component={Content} />
                <Route exact path='/catalog' component={Catalog} />
                <Route exact path='/phones' component={Phones} />
                <Route exact path='/games' component={Games} />
                <Route exact path='/devices' component={Devices} />
                <Route exact path='/laptops' component={Laptops} />

                <Route exact path='/new_product' component={NewProduct} />
                <Route exact path='/about_us' component={AboutUs} />
                <Route exact path='/blog' component={Blog} />
                <Route exact path='/specials' component={Specials} />
                <Route exact path='/best_seller' component={BestSeller} />

                <Route exact path='/cart' component={Cart} />


                <Route exact path='/services/contact_us' component={ContactUsServices} />
                <Route exact path='/services/information' component={Information} />
                <Route exact path='/services/privacy_&_policy' component={PrivacyPolicy} />
                <Route exact path='/services/terms_&_conditions' component={TermsConditions} />

                <Route exact path='/service/wishlist' component={Wishlist} />
                <Route exact path='/service/search' component={Search} />
                <Route exact path='/service/all_colections' component={AllCollections} />

                <Route exact path='/extras/news' component={News} />
                <Route exact path='/extras/special_product' component={SpecialProduct} />
                <Route exact path='/extras/featured_product' component={FeaturedProduct} />
                <Redirect exact from='/' to='/home' />

                <Route exact path='/account/register' component={Register} />
                <Route exact path='/account/login' component={Login} />
                <Route exact path='/checkout' component={Checkout} />

                <Route exact path='/product/:productId' render={({ match }) => (<SomeProduct productId={match.params.productId} />)} />
                <Route exact path='/product/:productId/new_review' render={({ match }) => (<NewReview productId={match.params.productId} />)} />
                <Route exact path='/search_result' component={SearchResult} />


            </Switch>
        </>
    )
}