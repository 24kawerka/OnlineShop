import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useHistory } from 'react-router-dom';
import { getSearchProductsThunk } from '../../../redux/createThunk';
import { setValue } from '../../../redux/searchProductReducer';
import './search-form.scss'

export const SearchForm = () => {
    const history = useHistory()
    const dispatch = useDispatch()
    const resultSearch = useSelector((state: any) => state.searchProduct.resultSearch)
    const newValue: string = useSelector((state: any) => state.searchProduct.value)
    const SearchProduct = (value: any) => {
        dispatch(getSearchProductsThunk(value))
        dispatch(setValue(value))
    }
    const toSearchingResult = (resultSearch: Array<Object>) => {
        history.push(
            '/search_result',
            { resultSearch: resultSearch }
        )
        dispatch(setValue(''))

    }
    const onKeyPressEvent = (e: any, resultSearch: Array<Object>) => {
        if (e.key === 'Enter') {
            e.preventDefault()
        }
    }

    return (
        <div className='search-form'>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <form className="example"
                onKeyPress={(e) => onKeyPressEvent(e, resultSearch)}>
                <div className='search_container'>
                    <input
                        type="text" placeholder="Search..." autoComplete="off"
                        onChange={(e: any) => SearchProduct(e.target.value)}
                        value={newValue} />
                    {newValue !== '' && (
                        <ul className='ul_search'>
                            {resultSearch
                                .map((item: any) => (
                                    <li className='li_search'
                                        key={item.id}>
                                        <NavLink to={`/product/${item.id}`}
                                            onClick={() => dispatch(setValue(''))}>
                                            {item.title}
                                        </NavLink>
                                    </li>
                                )).slice(0, 4)}
                        </ul>

                    )}
                </div>
                <button type='button'
                    onClick={() => toSearchingResult(resultSearch)}>
                    <i className="fa fa-search"></i>
                </button>
            </form>
        </div >
    )
}