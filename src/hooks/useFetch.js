import { useEffect, useRef, useState } from 'react'

export const useFetch = ( url ) => {

  const isMounted = useRef(true);
  const [state, setState] = useState({
    data: null,
    loading: true,
    error: null
  });

  useEffect(() => {
    return () => {
      //Cambiar el valor de nuestra referencia, cuando el componente se desmonte
      isMounted.current = false;
    }
  }, [])

  // const getData = async() => {
  //   await fetch( url )
  //     .then( res => res.json() )
  //     .then( datos => setState({
  //       data: datos,
  //       loading: false,
  //       error: null
  //     }) )
  // }

  // useEffect(() => {
  //   getData();
  // }, [ url ])

  useEffect(() => {

    setState({
      data: null,
      loading: true,
      error: null
    });

    fetch( url )
      .then( res => res.json() )
      .then( data => {

        //condicionar el setState para evitar la fuga de momoria o la asignacion del esatado, cuando el componente este desmontado
        if( isMounted.current ){
          setState({
            data: data,
            loading: false,
            error: null
          })
        }else{
          console.log('setState no se llamo')
        }
      })
  }, [ url ])

  return state;
}
