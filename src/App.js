import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Router } from '@reach/router';
import reducer from './reducers';
import LoginContainer from './containers/LoginContainer';
import ScheduleContainer from './containers/ScheduleContainer';
// import { Router, BrowserRouter } from 'react-router-dom';

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export const AppRouter = () => {
    return (
        <Router>
            <LoginContainer path="/" />
            <ScheduleContainer path="/schedule" />
        </Router>
    );
};

const App = () => {
    return (
        <Provider store={store}>
            <AppRouter />
        </Provider>
    );
};

export default App;
