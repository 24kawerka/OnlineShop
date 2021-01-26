import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ProductThunk } from '../../redux/Utils/createThunk'
import { setCurrentPage } from '../../redux/Utils/paginationReducer'
import s from './pagination.module.scss'
import ReactPaginate from 'react-paginate'
import { rootReducerType } from '../../redux/Utils/reducer'

const PaginationPage = () => {
    const paginationState = useSelector((state: rootReducerType) => state.pagination)
    const totalCount = useSelector((state: rootReducerType) => state.allProducts.totalCount)
    const pagesCount = Math.ceil(totalCount / paginationState.limitProducts)
    const sortParam: any = useSelector((state: rootReducerType) => state.sort)
    const dispatch = useDispatch()

    const handleClick = (p: any) => {
        dispatch(setCurrentPage(p.selected + 1))
        dispatch(ProductThunk(p.selected + 1, paginationState.limitProducts, sortParam.sortParam, sortParam.order))
    }
    if (totalCount < 8) {
        return null
    }
    return (
        <div className={s.container}>
            <ReactPaginate
                pageCount={pagesCount}
                pageRangeDisplayed={8}
                marginPagesDisplayed={5}
                previousLabel={'<'}
                nextLabel={'>'}
                breakLabel={'...'}
                breakClassName={s.break}
                onPageChange={handleClick}
                initialPage={0}
                containerClassName={s.container}
                pageClassName={s.page}
                activeClassName={s.activePage}
                previousClassName={s.buttons}
                nextClassName={s.buttons}
            />
        </div >
    )
}
export { PaginationPage }