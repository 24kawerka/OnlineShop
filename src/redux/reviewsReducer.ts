import { InitialReviewsType, ReviewsTypeAction } from '../Types/types';
import { GET_REVIEWS } from './actionTypes';


export const InitialState: InitialReviewsType = {
    reviews: []

}
export const ReviewsReducer = (state = InitialState, action: ReviewsTypeAction): InitialReviewsType => {
    switch (action.type) {
        case GET_REVIEWS:
            return {
                ...state,
                reviews: action.reviews.map(p => p)
            };

        default: return state
    }
}
export const getReviews = (reviews: ReviewsTypeAction) => {
    return {
        type: GET_REVIEWS,
        reviews

    }
}

