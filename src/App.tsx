import React from 'react';
import TestSplitScreen from './pages/TestSplitScreen'

//Interfaces
interface LeftHandComponentProps {
  name: string;
  weight?: number;
}

interface RightHandComponentProps {
  message: string;
  weight?: number;
}

// Style

//Variables
const LeftHandComponent: React.FC<LeftHandComponentProps> = ({ name, weight }) => {
  return <h1 style={{ flex: weight }}>Left {name}</h1>;
};


const RightHandComponent: React.FC<RightHandComponentProps> = ({ message, weight }) => {
  return <h1 style={{ flex: weight }}>Right {message}</h1>;
};

//Hooks

//Effects

function App() {
  return (
    <div className="App">
      <TestSplitScreen />
    </div>
  );
}

export default App;