import { Fetch_Posts, New_Post } from '../actions/types';

const initialState = {
    items: [],
    item: {},
};

export default (state = initialState, action) => {
    switch (action.type) {
        case Fetch_Posts: {
            return {
                ...state,
                items: action.payload,
            };
        }
        case New_Post: {
            return {
                ...state,
                item: action.payload,
            };
        }
        default:
            return state;
    }
};
