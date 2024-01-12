import styled from 'styled-components';
import React from 'react';

// Interfaces
interface SplitScreenProps {
  left: React.ReactNode;
  right: React.ReactNode;
  leftWeight?: number;
  rightWeight?: number;
}

// Style
const Container = styled.div`
  display: flex;
  width: 100%;
`;

const Pane = styled.div<{ weight?: number }>`
  flex: ${props => props.weight};
`;

export const SplitScreen: React.FC<SplitScreenProps> = ({
  left,
  right,
  leftWeight,
  rightWeight,
}) => {
  return (
    <Container>
      <Pane weight={leftWeight}>{left}</Pane>
      <Pane weight={rightWeight}>{right}</Pane>
    </Container>
  );
};
