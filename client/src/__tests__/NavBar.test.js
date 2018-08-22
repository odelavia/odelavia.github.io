import React from 'react';
import { mount } from 'enzyme';
// import renderer from 'react-test-renderer';
import NavBar from '../components/common/NavBar';
import OutsideAlerter from '../components/common/OutsideAlerter';

// describe('Component testing', () => {
//   test('App component renders with h1 text and Credit component', () => {
//     const component = renderer.create(<App></App>);
//     const tree = component.toJSON();
//     expect(tree).toMatchSnapshot();
//   });
// });

let wrapped;
beforeEach(()=> {
  wrapped = mount(<NavBar />)
})

it('it has one element with an id of sectionsNav', ()=> {
  expect(wrapper.is('.sectionsNav')).toEqual(true)
  expect(wrapper.is('.sectionsNav').length).toEqual(1)
});

it('it has an navbar container', ()=> {
  expect(wrapped.find('navbar-container')).toEqual(1);
});

it('it has an outside alerter', ()=> {
  expect(wrapper.find('OutsideAlerter')).to.equal(true);
});

