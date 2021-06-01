import React from 'react';
import styled from 'styled-components';

export const StyledCard = styled.section`
  
  background-color: white; 
  display:flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: var(--mobile-base-padding);
  border-radius:.8rem;
  max-width: 74rem;
  width: 80vw;

  //whenever two card classes (or two sections) are next to each other then the second one should have a 2.4rem top margin
  //for every parent card that's not in overlay, top and bottom margin ranges from 40 to 48px
  //donation cards when closed have 36px top padding and 32px bottom padding
  //donation cards when open top and bottom margin shrink to 24px. 
  //horizontal padding on donationAcknowledgement is 24px in mobile and 48px in desktop
  //lineheight 24px when font-size is 14px and 30px at 16px
`;



const BasicCard = ({
  children, disabled
}) => (
  
  <StyledCard>
    {children}
  </StyledCard>
  
);

export default BasicCard;