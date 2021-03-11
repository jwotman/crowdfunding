import React from 'react';
import styled from 'styled-components';

export const StyledCard = styled.div`
 
  
  background-color: white;
  height: auto;
  width:auto;
  display:flex;
  justify-content: center;
  flex-direction: column;
  border-radius:.8rem;
  margin-left: 2.4rem;
  margin-right: 2.4rem;
  margin-bottom: 1.2rem;
  
`;

const BasicCard = ({
  children
}) => (
  
  <StyledCard>
    {children}
  </StyledCard>
  
);

export default BasicCard;