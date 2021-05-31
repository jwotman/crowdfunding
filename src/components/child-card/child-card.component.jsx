import React from 'react';
import styled from 'styled-components';
import {StyledCard} from '../basic-card/basic-card.component';

export const StyledChildCard = styled(StyledCard)`
  
  display: flex;
  flex-direction: column;
  max-width: 54rem;
  align-self: center;
  overflow: visible;
`;



const ChildCard = ({
  children, disabled
}) => (
  
  <StyledChildCard>
    {children}
  </StyledChildCard>
  
);

export default ChildCard;