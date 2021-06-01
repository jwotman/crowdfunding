import React from 'react';
import styled from 'styled-components';





const IncentiveHeader = styled.header`
   display: flex;
   flex: 1 1 100%;
   justify-content: flex-start;
   flex-direction: row;
   align-items: center;
   flex-wrap: wrap;
   gap: 1.2rem;
   margin: 0 0 1.2rem 0;
`;

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


const DonationDetailHeading = ({item}) => (

    <IncentiveHeader className='donate-heading'>
        <IncentiveTitle >{item.name}</IncentiveTitle>
        {item.donationLevel !== 0 && <IncentiveRange>${item.donationLevel} or more</IncentiveRange> }
    </IncentiveHeader>

)

export default DonationDetailHeading;