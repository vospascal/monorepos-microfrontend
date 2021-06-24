import React from 'react';

import Shell from './Shell';
import Counter from "./components/Counter/Counter";
import Toggle from "./components/Toggle/Toggle";


function App() {
  return (
    <div>
        <Counter></Counter>
        <Toggle></Toggle>
        <Shell />
    </div>
  );
}

export default App;