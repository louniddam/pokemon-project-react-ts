import styled from 'styled-components';
import React from 'react';

//Interfaces
interface SplitScreenProps {
  left: React.ComponentType<any>; 
  right: React.ComponentType<any>;
  leftWeight?: number;
  rightWeight?: number;
  children: React.ReactElement[];
}

//Style
const Container = styled.div`
  display: flex;
`;

const Pane = styled.div<{ weight?: number }>`
  flex: ${props => props.weight};
`;

export const SplitScreen: React.FC<SplitScreenProps> = ({
  children,
  leftWeight,
  rightWeight,
}) => {

  //Variables
  const [left, right] = children;

  //Hooks

  //Effects

  return (
    <Container>
      <Pane weight={leftWeight}>
        {left}
      </Pane>
      <Pane weight={rightWeight}>
        {right}
      </Pane>
    </Container>
  );
};