import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Router } from '@reach/router';
import reducer from './reducers';
import LoginContainer from './containers/LoginContainer';
import Schedule from './components/Schedule';

const store = createStore(reducer,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const App = () => {
    return (
        <Provider store={store}>
            <Router>
                <LoginContainer path="/"/>
                <Schedule path="/schedule"/>
            </Router>
        </Provider>
    );
};

export default App;
