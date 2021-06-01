import React from 'react';
import styled from 'styled-components';


const OverlayDiv = styled.div`

  position: fixed; /* Sit on top of the page content */
  padding: 12.5% 2.4rem 0 2.4rem;
  

  display: ${props => props.isHidden ? 'none' : 'flex'}; /* Hidden by default */
  width: 100%; /* Full width (cover the whole page) */
  height: 100%; /* Full height (cover the whole page) */
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0,0,0,0.5); /* Black background with opacity */
  z-index: 2; /* Specify a stack order in case you're using a different order for other elements */
  cursor: pointer; /* Add a pointer on hover */
  overflow-y: scroll;
  flex-direction: column;
  align-items: center;
  


`;





const BasicOverlay = ({isHidden,children}) => (


    <OverlayDiv isHidden={isHidden}>
        {children}
    </OverlayDiv>






);




export default BasicOverlay;














