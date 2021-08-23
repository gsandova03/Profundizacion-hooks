import React from 'react';
import { shallow } from 'enzyme';
import HooksApp from '../HooksApp';


describe('Preubas en el componente <HookApp/>', () => {
  test("debe de renderizar el componente correctamente", () => {
    const wrapper = shallow( <HooksApp /> )
    expect( wrapper ).toMatchSnapshot();
  })
})