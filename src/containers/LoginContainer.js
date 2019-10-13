import { connect } from 'react-redux';
import Login from '../components/Login';
import { LOGIN_FAIL } from '../reducers/LoginActions';

const mapStateToProps = state => ({
    errorMessage: state.loginReducer.errorMessage
});
  
const mapDispatchToProps = dispatch => ({
    onLogin: ({username, password}) => {
        if(!username)
            dispatch(
                {
                    type: LOGIN_FAIL,
                    message: 'Please enter username'
                });
        else if(!password)
            dispatch({
                type: LOGIN_FAIL,
                message: 'Please enter username'
            });
        else if(password !== 'password')
            dispatch({
                type: LOGIN_FAIL,
                message: 'Wrong password'
            });
    }
});
  
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);
