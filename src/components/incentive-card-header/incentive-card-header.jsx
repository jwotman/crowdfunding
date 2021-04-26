import React from 'react';
import styled from 'styled-components';
import CustomRadioButton from '../custom-radio-button/custom-radio-button.component';
import Remaining from '../remaining/remaining.component';


const HeadingWrapper = styled.span`
    display: flex;
    align-items: center;
    flex-direction: row;
    //align-items: center;
    border-radius: 50%;
    width: 100%;
`;

const IncentiveHeading = styled.div`
   display: flex;
   flex-basis: 100%;
   justify-content: space-between;
   flex-direction: row;
   align-items: center;
   flex-wrap: wrap;
   margin: 0 0 1.2rem 0;
`;

const IncentiveTitle = styled.span`
  //   font-size: 1.4rem;
    flex: 0 0 200px;
     color: black;
     font-weight: bold;
     margin: .4rem 0rem .4rem 0;
     align-self: center;
`;

const IncentiveRange = styled.span`
    flex-basis: content;
    color: #3CB3AB;
    font-weight: 70;
    margin: .4rem 0 .4rem 0;
`;







const IncentiveCardHeader = ({item: {id, name,donationLevel,remaining}, isSelectable,currentLevelID, disabled }) => (

    <HeadingWrapper>
    {isSelectable &&  <CustomRadioButton id={id} isSelected={currentLevelID===id} disabled={disabled}></CustomRadioButton>  }
        <IncentiveHeading>
            <IncentiveTitle>{name}</IncentiveTitle>
            {donationLevel !== 0 && <IncentiveRange>${donationLevel} or more</IncentiveRange> }
        </IncentiveHeading>
        {isSelectable && <Remaining remainingAmount={remaining} isSelectable={isSelectable} />}
    </HeadingWrapper>



)

export default IncentiveCardHeader;