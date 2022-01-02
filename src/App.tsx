import React from 'react';
import { Counter } from './Counter';
import { ReducerExample } from './ReducerExample';
import { TextField } from './TextField';

const App: React.FC = () => {
  return <div>
    <div>Yo Ts!</div>
    <TextField text='hey' person={{firstName:'Jonathan',lastName:'Buttigieg'}} 
    />
    <ReducerExample />
     <Counter>
      {(count, setCount)=> (
        <div>
          {count}<button onClick={() => setCount(count + 1)}>+</button>
        </div>
      )}
    </Counter> 
  </div>
};

export default App;
