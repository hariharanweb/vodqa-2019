import { LOGIN_FAIL } from './LoginActions';

const initialState = {
    errorMessage: ''
};

const loginReducer = (state=initialState, action) => {
    switch (action.type) {
    case LOGIN_FAIL:
        return {
            ...state,
            errorMessage: action.message
        };
    default:
        break;
    }
    return state;
};
export default loginReducer;