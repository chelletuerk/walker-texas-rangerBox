import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';
import sinon from 'sinon'

import App from '../App';
import Button from '../Button/SettingsButton';

describe('<App/>', () => {
  it('should display a single h1 tag', () => {
    const wrapper = shallow(<App/>);
    expect(wrapper.find('h2')).to.have.length(1);
  });

describe('<App/>', () => {
  it('should display a single ul tag', () => {
    const wrapper = shallow(<App/>);
    expect(wrapper.find('ul')).to.have.length(1);
  });

  // it('should trigger our logStuff function', () => {
  //   const logStuff = sinon.spy()
  //   const wrapper = mount(<Button handleClick={logStuff} />);
  //   wrapper.simulate('click');
  //   expect(logStuff.calledOnce).to.equal(true);
  // });

});
