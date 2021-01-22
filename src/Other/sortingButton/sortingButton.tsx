import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ProductThunk } from '../../redux/createThunk'
import { set_asc_order, set_desc_order, set_desc_rating_order } from '../../redux/sortingReducer'

export const SortingButton = () => {
    const dispatch = useDispatch()
    const paginationState: any = useSelector((state: any) => state.pagination)
    const sortParam: any = useSelector((state: any) => state.sort)

    const sortByInput = (e: any) => {
        console.log(e.target.value);
        if (e.target.value === 'decrease_price') {
            dispatch(set_desc_order())
        } else
            if (e.target.value === 'rating') {
                dispatch(set_desc_rating_order())
            }
            else {
                dispatch(set_asc_order(e.target.value));
            }


    }
    useEffect(() => {
        dispatch(ProductThunk(paginationState.currentPage, paginationState.limitProducts, sortParam.sortParam, sortParam.order))
    }, [sortParam])

    return (
        <div className='form-group' >
            <select onChange={sortByInput} className='form-control' style={{ width: '200px', marginTop: '30px' }}>
                <option hidden>Sort by</option>
                <option value="price">
                    ascending price
                </option>
                <option value="decrease_price">
                    decrease price
                </option>
                <option value="title">
                    name
                </option>
                <option value="rating">
                    rating
                </option>
            </select>
        </div >
    )
}