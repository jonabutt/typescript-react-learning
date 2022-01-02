import React from 'react';
import { TextField } from './TextField';

const App: React.FC = () => {
  return <div>
    <div>Yo Ts!</div>
    <TextField text='hey' person={{firstName:'Jonathan',lastName:'Buttigieg'}} 
      
    />
  </div>
};

export default App;
