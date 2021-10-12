import React from 'react';
import styled from 'styled-components';
import CustomRadioButton from '../custom-radio-button/custom-radio-button.component';







const IncentiveTitle = styled.h3.attrs(props => ({
    className: "incentiveTitle"
}))`
     color: black;
     font-size: 1.4rem;
     font-weight: 700;
     //margin: .4rem 0rem .4rem 0;
     align-self: center;
     flex: 0 0 content;
     margin: 0rem 0rem 0rem 0;
     
`;

const IncentiveRange = styled.h3`
    flex-basis: content;
    font-size: 1.4rem;
    color: #3CB3AB;
    font-weight: 70;
    margin: 0 0rem 0 0rem;
    align-self: center;
    
`;

const isDisabled = (remaining) => {

    let disabled = false;
    if(remaining === 0){
        disabled = true;
    }
    return disabled;

}

const HeadingTextWrapper = styled.div`
    flex-basis: 70%;
    
    @media screen and (min-width: 550px){
        display: flex;
        flex-flow: row nowrap;
        
    }

`

const IncentiveHeader = styled.header`
   display: flex;
   flex-basis: 100%;
   justify-content: flex-start;
   flex-direction: row;
   align-items: center;
   flex-wrap: wrap;
   gap: 1.7rem;

   @media screen and (min-width: 550px){
    &  ${IncentiveTitle}{
        margin-right: .7rem;
        margin-left: 0rem;
    } 
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
        <HeadingTextWrapper>
                <IncentiveTitle >{item.name}</IncentiveTitle>
                {item.donationLevel !== 0 && <IncentiveRange>${item.donationLevel} or more</IncentiveRange> }
        </HeadingTextWrapper>
    </IncentiveHeader>

)

export default DonationDetailHeading;