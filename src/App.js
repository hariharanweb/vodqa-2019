import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
import LoginContainer from './containers/LoginContainer';

const store = createStore(reducer);

const App = () => {
    return (
        <Provider store={store}>
            <LoginContainer />
        </Provider>
    );
};

export default App;
