import { act, renderHook } from "@testing-library/react-hooks"
import { useForm } from "../../hooks/useForm"


describe('pruebas en el hook useForm', () => {
  
  const initialForm = {
    name:"gabriel",
    email: "gabriel@email.com"
  }

  test('debe de regresar un formulario por defecto ', () => {
    const { result } = renderHook(() => useForm( initialForm ) );

    const [ values, handleInputChange, reset ] = result.current

    expect( values ).toEqual( initialForm );
    expect( typeof handleInputChange ).toBe( 'function' )
    expect( typeof reset ).toBe( 'function' )

  })

  test('debe de cambiar el valor del formulario ( cambiar name ) ', () => {
    const { result } = renderHook(() => useForm( initialForm ) );

    const [ , handleInputChange ] = result.current

    act(() => {
      //para poder modificar la data y simular el onchange del formulario hacemos uso del act, para despues acceder al target y modificar sus propiedades
      handleInputChange({
        target: {
          name: "email",
          value: "pepe@email.com"
        }
      })
    })

    const [ values ] = result.current

    expect( values ).toEqual( { ...initialForm, email: "pepe@email.com" } )

  })

  test('debe de resetear el esatado del campo', () => {
    const { result } = renderHook(() => useForm( initialForm ) );

    const [ , handleInputChange, reset ] = result.current

    act(() => {
      //para poder modificar la data y simular el onchange del formulario hacemos uso del act, para despues acceder al target y modificar sus propiedades
      handleInputChange({
        target: {
          name: "email",
          value: "pepe@email.com"
        }
      })

      //llamamos a nustra funcion reset para asignar de nuevo el valor por defecto
      reset();
    })


    const [ values ] = result.current

    expect( values ).toEqual( initialForm )

  })
  
})
