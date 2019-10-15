import { renderApp, waitForElementToAppear } from './integHelpers';
import Adapter from 'enzyme-adapter-react-16';
// import configure from 'enzyme';
import { configure } from 'enzyme';

configure({ adapter: new Adapter() });

describe('Sample test', () => {
    let component;
    it('Validate the login Button Text', () => {
        component = renderApp();
        const buttonText = component.find('#submit').text();
        expect(buttonText).toBe('Login');
    });
    it('Validate Submit button navigates to next page', async() => {
        component = renderApp();

        component.find('#username').simulate('change', {target: {value: 'user'}});
        component.find('#password').simulate('change', {target: {value: 'password'}});
        component.find('#submit').simulate('click');

        await waitForElementToAppear(component,'#header');
        expect(component.find('#header').text()).toContain('2019');
    });
});