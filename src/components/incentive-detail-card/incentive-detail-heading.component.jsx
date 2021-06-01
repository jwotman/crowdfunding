import React from 'react';
import styled from 'styled-components';



const IncentiveHeader = styled.header`
   display: flex;
   flex: 1 1 100%;
   justify-content: space-between;
   flex-direction: row;
   align-items: center;
   flex-wrap: wrap;
   
   margin: 0 0 1.2rem 0;

   
`;

const IncentiveTitle = styled.h3.attrs(props => ({
    className: "incentiveTitle"
}))`
     color: black;
     
     font-weight: 700;
     margin: .4rem 0rem .4rem 0;
     align-self: center;
     
`;

const IncentiveRange = styled.h3`
    flex-basis: content;
    color: #3CB3AB;
    font-weight: 70;
    margin: .4rem 0 .4rem 0;
    
`;



const IncentiveDetailHeading = ({item}) => (

    <IncentiveHeader >
        <IncentiveTitle >{item.name}</IncentiveTitle>
        {item.donationLevel !== 0 && <IncentiveRange>${item.donationLevel} or more</IncentiveRange> }
    </IncentiveHeader>

)

export default IncentiveDetailHeading;