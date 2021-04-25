import React from 'react';
import styled from 'styled-components';
import {StyledCard} from '../basic-card/basic-card.component';

export const StyledChildCard = styled(StyledCard)`
  
  
  max-width: none;
  min-width: 0;
  width: 86%;
  margin-bottom: 2.4rem;
  align-self: center;
`;



const ChildCard = ({
  children, disabled
}) => (
  
  <StyledChildCard>
    {children}
  </StyledChildCard>
  
);

export default ChildCard;