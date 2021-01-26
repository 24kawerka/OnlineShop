import { InitialReviewsType, ReviewsTypeAction } from '../../Types/types';
import { GET_REVIEWS } from '../Utils/actionTypes';


const InitialState: InitialReviewsType = {
    reviews: []

}
const ReviewsReducer = (state = InitialState, action: ReviewsTypeAction): InitialReviewsType => {
    switch (action.type) {
        case GET_REVIEWS:
            return {
                ...state,
                reviews: action.reviews.map(p => p)
            };

        default: return state
    }
}
const getReviews = (reviews: ReviewsTypeAction) => {
    return {
        type: GET_REVIEWS,
        reviews

    }
}

export { InitialState, ReviewsReducer, getReviews }