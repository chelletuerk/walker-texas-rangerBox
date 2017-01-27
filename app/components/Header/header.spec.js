import React from 'react';
import { mount, shallow, render } from 'enzyme';
import {expect, assert} from 'chai';
import sinon from 'sinon'

import App from '../App';
import JokeNumInput from '../JokeNumInput';
import Favorites from '../Favorites';
import SettingsButton from '../Button/SettingsButton';
import SetButton from '../Button/SetButton';
import GetJokesButton from '../Button/GetJokesButton'
import ToJokesButton from '../Button/ToJokesButton'
import FavoritesButton from '../Button/FavoritesButton'



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

    it('should have the button text rendered onto the page', function(){
    const wrapper = render(<GetJokesButton/>)
    expect(wrapper.text()).to.contain('New Jokes')
  })

  });
})

describe('Settings', () => {
  const wrapper = shallow(<SetButton />);

  it('should render as a <div>', () => {
    assert.equal(wrapper.type(), 'div');
  });

  it('should have props', () => {
    const wrapper = mount(<SetButton
      fetchNameJokes = 'name'
    />);
    expect(wrapper.prop('fetchNameJokes')).to.equal('name');
  });

  it('should render 1 button', () => {
    expect(wrapper.find('button')).to.be.length(1);
  });
});

describe('Favorites', () => {
  const wrapper = shallow(<SetButton />);

  it('should render as a <div>', () => {
    assert.equal(wrapper.type(), 'div');
  });

  it('should render 1 button', () => {
    expect(wrapper.find('button')).to.be.length(1);
  });
});

describe('ToJokesButton', () => {
  const wrapper = shallow(<ToJokesButton />);

  it('should render as a <button>', () => {
    assert.equal(wrapper.type(), 'button');
  });

  it('should render a submit button', () => {
    expect(wrapper.find('.round-buttons')).to.be.length(1);
  });
});

describe('FavoritesButton', () => {
  const wrapper = shallow(<FavoritesButton />);

  it('should render as a <div>', () => {
    assert.equal(wrapper.type(), 'div');
  });

  describe('ToJokesButton', () => {
    const wrapper = shallow(<ToJokesButton />);

    it('should render as a <button>', () => {
      assert.equal(wrapper.type(), 'button');
    });

    it('should render a submit button', () => {
      expect(wrapper.find('.round-buttons')).to.be.length(1);
    });
  });

  describe('GetJokesButton', () => {
    const wrapper = shallow(<GetJokesButton />);

    it('should render as a <div>', () => {
      assert.equal(wrapper.type(), 'div');
    });

    it('should render a submit button', () => {
      expect(wrapper.find('.get-jokes')).to.be.length(1);
    });
  });




});


describe.skip('Feature Test | AddNewJoke', () => {
  it('submits a joke', () => {
    const buttonClick = sinon.spy()
    const wrapper = shallow(
      <GetJokesButton onClick={buttonClick} />)
    const wrapper2 = shallow(
      <App />)
    wrapper.find('.get-jokes').simulate('')
    expect(wrapper2.state('jokes')).to.eq('click')
  })
})
