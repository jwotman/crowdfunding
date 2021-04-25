import React from 'react';
import styled from 'styled-components';


const ProgressBarTrack = styled.div`
  background-color: hsl(0,0%,95.75%);
  border: none;
  height: 1.2rem;
  width: 80%;
  margin: 0 2.5rem 0 2.5rem;
  border-radius: 3.35rem;
  
`;
const percent = 75;
const ProgressBarFill = styled.div`
    background-color: hsl(176, 50%, 47%);
    width: ${percent}%;
    height: 100%;
    border-radius: 3.35rem;
    
`;


//TODO add redux and a selector to get the percentage.  Change const percent to let and assign the percent in curlies before rendering the components


const ProgressBar = ({
  progress
  
}) => (
  
  <ProgressBarTrack>
    <ProgressBarFill/>
  </ProgressBarTrack>
    
  
  
);

export default ProgressBar;