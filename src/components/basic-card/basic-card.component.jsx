import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
 
  
  background-color: white;
  height: auto;
  width:37.5rem;
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  justify-content: center;
  align-items: center;
  -webkit-box-orient:vertical;
  -webkit-box-direction:normal;
  margin: 0 2.4rem;
  border-radius:.8rem;
  
`;

const BasicCard = ({
  children
}) => (
  
  <Card>
    {children}
  </Card>
  
);

export default BasicCard;