import React from 'react'
import { shallow } from "enzyme"
import { RealExampleRef } from '../../../components/04-useRef/RealExampleRef'

describe('Pruebas en el componente <RealExampleRef />', () => {
  
  const wrapper = shallow( <RealExampleRef/> )

  test('debe mostrarse correctamente', () => {
    expect( wrapper ).toMatchSnapshot();
    expect( wrapper.find('MultipleCustomHooks').exists() ).toBe( false );
  })

  test('debe de mostrar el componente <MultipleCustomHooks />', () => {
    const button = wrapper.find( 'button' )

    //usar simulate en un boton para verificar la renderizacion de un componente condicional
    button.simulate('click')

    expect( wrapper.find('MultipleCustomHooks').exists() ).toBe( true )

  })
  
})
