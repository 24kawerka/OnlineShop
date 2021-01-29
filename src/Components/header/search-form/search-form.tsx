import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useHistory } from 'react-router-dom';
import { getSearchProductsThunk } from '../../../redux/Utils/createThunk';
import { setValue } from '../../../redux/Utils/searchProductReducer';
import utilsSelector from './../../../redux/Utils/utilsSelector'

import './search-form.scss'

const SearchForm = () => {
    const history = useHistory()
    const dispatch = useDispatch()
    const resultSearch = useSelector(utilsSelector.resultSearch)
    const inputValue: string = useSelector(utilsSelector.inputValue)
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

    return (
        <div className='search-form'>

            <form className="example"
                onSubmit={(e: any) => { e.preventDefault() }}>
                <div className='search_container'>
                    <input
                        type="text" placeholder="Search..." autoComplete="off"
                        onChange={(e: any) => SearchProduct(e.target.value)}
                        value={inputValue} />
                    {inputValue !== '' && (
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
export { SearchForm }