import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { MultipleCustomHooks } from '../../../components/03-examples/MultipleCustomHooks';
import { useFetch } from '../../../hooks/useFetch';
import { useCounter } from '../../../hooks/useCounter';

//implementacion de mock, lo cual permite evitar llamados a nuestra funcion y nos permite agregar valores de pruebas
jest.mock( '../../../hooks/useFetch' );
// jest.mock( '../../../hooks/useCounter' );

describe('Pruebas en el componente <MultipleCustomHooks/>', () => {
  
  // useCounter.mockReturnValue({
  //   counter: 1,
  //   increment: () => {} 
  // })

  test('debe de renderizarce correctamente', () => {
    
    //mock para fingir que nuestro componente tiene informacion
    //Agregar valores simulados
    useFetch.mockReturnValue({
      data: null,
      loading: true,
      error: null
    })

    const wrapper = shallow( <MultipleCustomHooks /> )

    expect( wrapper ).toMatchSnapshot();

  })

  test('debe de mostrar la informacion', () => {
    useFetch.mockReturnValue({
      data: [{
        author: "gabriel",
        quote: "Hola mundo"
      }],
      loading: false,
      error: null
    })

    const wrapper = shallow( <MultipleCustomHooks /> )

    expect( wrapper.find('.alert').exists() ).toBe( false )
    expect( wrapper.find('.quote').text().trim() ).toBe( "Hola mundo" )
    expect( wrapper.find('.author').text().trim() ).toBe( "gabriel" )
    
  })
  
})
