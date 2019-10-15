import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import vodQAReducer from '../reducers';
import { createStore } from 'redux';
import { AppRouter } from '../App';
import { Provider } from 'react-redux';
import {
    createHistory,
    createMemorySource,
    LocationProvider,
} from '@reach/router';

describe('Sample test', () => {
    it('Validate the login Button Text', async () => {
        const {
            history: { navigate },
            getByLabelText, getByText } = renderWithRouter(
            <Provider store={createReduxStore()}>
                <AppRouter />
            </Provider>
        );

        expect(getByText('Welcome to VodQA')).toBeDefined();
        fireEvent.change(getByLabelText('Username:'), { target: { value: 'chuck' } });
        fireEvent.change(getByLabelText('Password:'), { target: { value: 'password' } });
        fireEvent.click(getByText('Login'));

        await navigate('/schedule');
        // const alert = await getByText('VodQA 2019 Schedule'); //Works only if it is in the same page
        expect(getByText('VodQA 2019 Schedule')).toBeDefined();
    });
});

function renderWithRouter(
    ui,
    { route = '/', history = createHistory(createMemorySource(route)) } = {}
) {
    return {
        ...render(<LocationProvider history={history}>{ui}</LocationProvider>),
        // adding `history` to the returned utilities to allow us
        // to reference it in our tests (just try to avoid using
        // this to test implementation details).
        history,
    };
}


const initialState = {};
export const createReduxStore = (overiddenState = {}) => {
    const allReducers = Object.assign(vodQAReducer);
    const actualState = Object.assign({}, initialState, overiddenState);

    return createStore(allReducers, actualState);
};


// component.find('#username').simulate('change', {target: {value: 'user'}});
//         component.find('#password').simulate('change', {target: {value: 'password'}});
//         component.find('#submit').simulate('click');

//         await waitForElementToAppear(component,'#header');
//         expect(component.find('#header').text()).toContain('2019');