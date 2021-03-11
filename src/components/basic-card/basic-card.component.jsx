import React from 'react';
import styled from 'styled-components';

export const StyledCard = styled.div`
 
  
  background-color: white;
  height: auto;
  width:37.5rem;
  display:flex;
  justify-content: center;
  flex-direction: column;
  margin: 0 2.4rem;
  border-radius:.8rem;
  
`;

const BasicCard = ({
  children
}) => (
  
  <StyledCard>
    {children}
  </StyledCard>
  
);

export default BasicCard;