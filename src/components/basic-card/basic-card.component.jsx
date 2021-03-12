import React from 'react';
import styled from 'styled-components';

export const StyledCard = styled.div`
  
  background-color: white;
  
  display:flex;
  justify-content: center;
  flex-direction: column;
  border-radius:.8rem;
  margin: 1.2rem 2.4rem 1.2rem 2.4rem;

`;

const BasicCard = ({
  children
}) => (
  
  <StyledCard>
    {children}
  </StyledCard>
  
);

export default BasicCard;