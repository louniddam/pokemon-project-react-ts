import React from 'react';
import { SplitScreen } from '../components/layouts/screens/SplitScreen'

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

function TestSplitScreen() {
  return (
    <>
      <SplitScreen left={LeftHandComponent} right={RightHandComponent} leftWeight={2} rightWeight={2}>
        <LeftHandComponent name="2" />
        <RightHandComponent message="3" />
      </SplitScreen>
    </>
  );
}

export default TestSplitScreen;