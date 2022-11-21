import React from 'react';
import './App.css';
import ClassCounter from './components/ClassCounter'
import ComponentC from './components/ComponentC';
import DataFetching from './components/DataFetching';
import DataFetchingId from './components/DataFetchingId';
import HookCounter from './components/HookCounter';
import HookCounterFive from './components/HookCounterFive';
import HookCounterFour from './components/HookCounterFour';
import HookCounterThree from './components/HookCounterThree';
import HookCounterTwo from './components/HookCounterTwo';
import HookMouse from './components/HookMouse';
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
       <DataFetchingId />
        
      <UserContext.Provider value={'Priyank'}>
      <ChannelContext.Provider value={'Gondaliya'}>
      <ComponentC />
      </ ChannelContext.Provider>
      </ UserContext.Provider>

    </div>
  );
}

export default App;
