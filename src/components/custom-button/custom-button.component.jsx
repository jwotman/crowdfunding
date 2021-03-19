import React from 'react';
import styled from 'styled-components';



export const StyledButton = styled.button`
  background-color: #3CB3AB;
  border: none;
  font-weight: bold;
  font-size: 1.6rem;
  color:  white;
  text-align: center;
  text-decoration: none;
  white-space: nowrap;
  overflow: hidden;
  cursor: pointer;
  width: 21.4rem;
  height: 5.6rem;
  margin: 4px 2px;
  
  
  border-radius: 3.3rem;
`;




const CustomButton=({children})=> (
   
    <StyledButton >
      {children}
    </StyledButton>

  
);

export default CustomButton;