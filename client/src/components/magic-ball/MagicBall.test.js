import React from 'react';
import {shallow} from 'enzyme';
import MagicBall from './MagicBall';

//TODO: there should be more test cases here

describe('<MagicBall />', () => {
    const createComponent = () => shallow(<MagicBall/>);

    it('should render without crashing', () => {
        expect(createComponent).not.toThrowError();
    });
});
