import { renderHook, act } from '@testing-library/react-hooks';
import { useCounter } from '../../hooks/useCounter';


describe('Pruebas en hook useCounter', () =>{

  test('debe de retornar los valores por defecto', () => {
    const { result } = renderHook( () => useCounter() );

    // console.log( result.current )

    expect( result.current.counter ).toBe( 10 )
    expect( typeof result.current.increment ).toBe( 'function' )
    expect( typeof result.current.decrement ).toBe( 'function' )
    expect( typeof result.current.reset ).toBe( 'function' )
  })
  
  test('debe de retornar el counter en 100', () => {
    const { result } = renderHook( () => useCounter(100) );

    expect( result.current.counter ).toBe( 100 )
  })
  
  test('debe de incrementar el counter en 1', () => {
    const { result } = renderHook( () => useCounter(100) );
    const { increment } = result.current;

    // metodo de la libreria de testing react hooks, la cual permite ejecutar funciones de mi custom hook
    act( () => {
      increment()
    })

    const { counter } = result.current;
    expect( counter ).toBe( 101 )
  })

  test('debe de decrementar el counter en 1', () => {
    const { result } = renderHook( () => useCounter(100) );
    const { decrement } = result.current;

    // metodo de la libreria de testing react hooks, la cual permite ejecutar funciones de mi custom hook
    act( () => {
      decrement()
    })

    const { counter } = result.current;
    expect( counter ).toBe( 99 )
  })

  test('debe de resetear el counter a su valor por defecto', () => {
    const { result } = renderHook( () => useCounter(100) );
    const { decrement, reset } = result.current;

    // metodo de la libreria de testing react hooks, la cual permite ejecutar funciones de mi custom hook
    act( () => {
      decrement();
      reset();
    })

    const { counter } = result.current;
    expect( counter ).toBe( 100 )
  })
})