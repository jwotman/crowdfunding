import React from 'react';
import styled from 'styled-components';

export const StyledCard = styled.article`
  
  background-color: white; 
  display:flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  
  border-radius:.8rem;
  margin: 1.2rem 2.4rem 1.2rem 2.4rem;
  max-width: 74rem;
  min-width: 35rem;
  width: 80vw;

`;



const BasicCard = ({
  children, disabled
}) => (
  
  <StyledCard>
    {children}
  </StyledCard>
  
);

export default BasicCard;