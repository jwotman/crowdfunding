import React from 'react';
import styled from 'styled-components';



export const StyledOverlay = styled.div`

  position: fixed; 
  display: ${props => props.isHidden ? 'none' : 'block'}; /* Hidden by default */
  width: 100%; 
  height: 100%; 
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0,0,0,0.5); 
  z-index: 2; 
  cursor: pointer; 
  justify-content: center;

`;


const BasicOverlay = ({isHidden}) => (


    <StyledOverlay isHidden={isHidden} />



);


export default BasicOverlay;