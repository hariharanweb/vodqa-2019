import { renderApp } from './integHelpers';
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
})