import React from 'react';
import styled from 'styled-components';
import CustomRadioButton from '../custom-radio-button/custom-radio-button.component';







const IncentiveTitle = styled.h3.attrs(props => ({
    className: "incentiveTitle"
}))`
     color: black;
     
     font-weight: 700;
     //margin: .4rem 0rem .4rem 0;
     align-self: center;
     flex: 0 0 content;
     margin: 0rem 0rem 0rem 0;
     
`;

const IncentiveRange = styled.h3`
    flex-basis: content;
    color: #3CB3AB;
    font-weight: 70;
    margin: 0 0rem 0 0rem;
    
`;

const isDisabled = (remaining) => {

    let disabled = false;
    if(remaining === 0){
        disabled = true;
    }
    return disabled;

}

const IncentiveHeader = styled.header`
   display: flex;
   flex: 1 1 100%;
   justify-content: flex-start;
   flex-direction: row;
   align-items: center;
   flex-wrap: wrap;
   gap: 1.7rem;
   margin: 0 0 1.2rem 0;
   & > ${IncentiveTitle}{
       margin-left: .7rem;
   }
   
   :hover{
       &  .radio_control{
            color: var(--color-primary-moderate-cyan);
       }
       &  h3{      
            color: var(--color-primary-moderate-cyan);
            font-weight: 500;
       }
   }
`;


const DonationDetailHeading = ({item,currentLevelID,chooseLevel,remaining}) => (

    <IncentiveHeader className='donate-heading'>
        <CustomRadioButton id={item.id} isSelected={item.id===currentLevelID} chooseLevel={chooseLevel} disabled={isDisabled(remaining)}></CustomRadioButton>
        <IncentiveTitle >{item.name}</IncentiveTitle>
        {item.donationLevel !== 0 && <IncentiveRange>${item.donationLevel} or more</IncentiveRange> }
    </IncentiveHeader>

)

export default DonationDetailHeading;