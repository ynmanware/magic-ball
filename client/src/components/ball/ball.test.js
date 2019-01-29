import React from 'react';
import {shallow} from 'enzyme';
import Ball from './Ball';

describe('<Ball />', () => {
    let props;
    const createComponent = () => {
        shallow(<Ball {...props}/>);
    };

    it('should render without crashing', () => {
        props = {
            answer: 'You are lucky'
        };
        expect(createComponent).not.toThrowError();
    });

    it('should render number 8 while loading the page initially when there is not answer', () => {
        props = {};
        const wrapper = shallow(<Ball {...props}/>);
        expect(wrapper).toMatchSnapshot();
    });

    it('should render supplied answer', () => {
        props = {
            answer: 'You are lucky'
        };
        const wrapper = shallow(<Ball {...props}/>);
        expect(wrapper).toMatchSnapshot();
    });
});