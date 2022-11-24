import React from 'react';
import './App.css';
import ClassCounter from './components/ClassCounter'
import ComponentC from './components/ComponentC';
import CounterMemo from './components/CounterMemo';
import CounterReduce from './components/CounterReduce';
import CounterReduceThree from './components/CounterReduceThree';
import CounterReduceTwo from './components/CounterReduceTwo';
import DataFetching from './components/DataFetching';
import DataFetchingId from './components/DataFetchingId';
import DataFetchingOne from './components/DataFetchingOne';
import DataFetchingTwo from './components/DataFetchingTwo';
import FocusInput from './components/FocusInput';
import HookCounter from './components/HookCounter';
import HookCounterFive from './components/HookCounterFive';
import HookCounterFour from './components/HookCounterFour';
import HookCounterThree from './components/HookCounterThree';
import HookCounterTwo from './components/HookCounterTwo';
import HookMouse from './components/HookMouse';
import HookTimer from './components/HookTimer';
import IntervalHookCounter from './components/IntervalHookCounter';
import MouseContainer from './components/MouseContainer';

 export const UserContext = React.createContext()
 export const ChannelContext = React.createContext()


function App() {
  return (
    <div className="App">
      {/* <ClassCounter /> */}
       {/* <HookCounter />  */}
       {/* <HookCounterTwo />  */}
       {/* <HookCounterThree />  */}
       {/* <HookCounterFour /> */}
       {/* <HookCounterFive />  */}
       {/* <HookMouse />  */}
       {/* <MouseContainer />  */}
      {/* <IntervalHookCounter />  */}
     {/* <DataFetching />  */}
       {/* <DataFetchingId /> */}
        
      {/* <UserContext.Provider value={'Priyank'}>
      <ChannelContext.Provider value={'Gondaliya'}>
      <ComponentC />
      </ ChannelContext.Provider>
      </ UserContext.Provider> */}
        {/* < CounterReduce/>  */}
        {/* < CounterReduceTwo/>  */}
        {/* < CounterReduceThree/>  */}
     {/* <DataFetchingOne />  */}
     {/* <DataFetchingTwo />  */}
     {/* <CounterMemo />  */}
     {/* <FocusInput /> */}
     <HookTimer /> 




        



    </div>
  );
}

export default App;
