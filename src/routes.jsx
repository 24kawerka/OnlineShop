import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { Catalog } from './Components/Navbar/catalog/catalog'
import { AboutUs } from './Components/Categories/about-us/about-us'
import { BestSeller } from './Components/Categories/best-seller/best-seller'
import { Blog } from './Components/Categories/blog/blog'
import { NewProduct } from './Components/Categories/new-product/new-product'
import { Specials } from './Components/Categories/specials/specials'
import { Content } from './Components/Content/Content'
import { Cart } from './Components/Cart/Cart'
import { Information } from './Components/Footer/services/information/information'
import { PrivacyPolicy } from './Components/Footer/services/privacy-&-policy/privacy-&-policy'
import { TermsConditions } from './Components/Footer/services/terms-&-conditions/terms-&-conditions'
import { ContactUsServices } from './Components/Footer/services/contact-us-services/contact-us-services'
import { Wishlist } from './Components/Footer/service/wishlist/wishlist'
import { Search } from './Components/Footer/service/search/search'
import { AllCollections } from './Components/Footer/service/all-collections/all-collections'
import { News } from './Components/Footer/extras/news/news'
import { SpecialProduct } from './Components/Footer/extras/special-prosuct/special-product'
import { FeaturedProduct } from './Components/Footer/extras/featured-product/featured-product'
import { SomeProduct } from './Components/Content/SomeProduct'
import { Login } from './Components/LoginForm/Login'
import { Register } from './Components/LoginForm/Register'
import { Checkout } from './Components/LoginForm/Checkout'
import { NewReview } from './Utils/NewReview'
import { SearchResult } from './Components/Header/search-form/SearchResult'
import { NavbarContent } from './Components/Navbar/navbarContent.tsx/navbarContent'


export const Routes = () => {

    return (
        <>
            <Switch>
                <Route exact path='/home' component={Content} />
                <Route exact path='/catalog' component={Catalog} />
                <Route exact path='/phones' component={NavbarContent} />
                <Route exact path='/games' component={NavbarContent} />
                <Route exact path='/devices' component={NavbarContent} />
                <Route exact path='/laptops' component={NavbarContent} />

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