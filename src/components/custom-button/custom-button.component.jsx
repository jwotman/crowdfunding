import React from 'react';
import styled from 'styled-components';



const Button = styled.button`
  background-color: ${props => props.isBookmark ?  `hsl(0, 0%, 48%)` : `hsl(176, 50%, 47%)`};
  border: none;
  font-weight: 500;
  color:  white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display:  ${props => props.isBookmark ?  `none` : `initial`};
  cursor: pointer;
  
  margin: 4px 2px;
  padding: 2rem 4rem 2rem 4rem;
  
  border-radius: 3.3rem;
`;




const CustomButton=({children})=> (
   
    <Button>
      {children}
    </Button>

  
);

export default CustomButton;