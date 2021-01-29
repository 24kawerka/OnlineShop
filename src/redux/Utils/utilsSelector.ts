export default {
    getCurrentPage: (state: any) => state.pagination.currentPage,
    getLimitProducts: (state: any) => state.pagination.limitProducts,
    isFetching: (state: any) => state.toogleIsFetching.isFetching,
    resultSearch: (state: any) => state.searchProduct.resultSearch,
    inputValue: (state: any) => state.searchProduct.value,
    sortParam: (state: any) => state.sort.sortParam,
    sortOrder: (state: any) => state.sort.order,
    }