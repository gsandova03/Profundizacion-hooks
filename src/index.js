import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
// import HooksApp from './HooksApp';
// import CounterApp from './components/01-useState/CounterApp';
// import CounterWithCustomHook from './components/01-useState/CounterWithCustomHook';
// import { SimpleForm } from './components/02-useEffect/SimpleForm';
// import { FromWithCustomHook } from './components/02-useEffect/FormWithCustomHook';
// import { MultipleCustomHooks } from './components/03-examples/MultipleCustomHooks';
// import { FocusScreen } from './components/04-useRef/FocusScreen';
// import { RealExampleRef } from './components/04-useRef/RealExampleRef';
// import { Layout } from './components/05-useLayoutEffect/LayoutEffect';
// import { Memorize } from './components/06-Memo/Memorize';
// import { MemoHook } from './components/06-Memo/MemoHook';
// import { CallBackHook } from './components/06-Memo/CallBackHook';
// import { Padre } from './components/07-tarea-memo/Padre';
// import { TodoApp } from './components/08-useReducer/TodoApp';
import { MainApp } from './components/09-useContext/MainApp';

ReactDOM.render(
  <MainApp />,
  document.getElementById('root')
)
