import React from 'react';
import styled from 'styled-components';



export const StyledButton = styled.div`
  background-color: #3CB3AB;
  border: none;
  font-weight: 500;
  color:  white;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  width: 21.4rem;
  height: 5.6rem;
  margin: 4px 2px;
  padding: 2rem 4rem 2rem 4rem;
  
  border-radius: 3.3rem;
`;




const CustomButton=({children})=> (
   
    <StyledButton >
      {children}
    </StyledButton>

  
);

export default CustomButton;