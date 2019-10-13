import { LOGIN_FAIL, LOGIN_SUCCESS } from './LoginActions';

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
    case LOGIN_SUCCESS: 
        return {
            ...state,
            errorMessage: ''
        };
    default:
        break;
    }
    return state;
};
export default loginReducer;