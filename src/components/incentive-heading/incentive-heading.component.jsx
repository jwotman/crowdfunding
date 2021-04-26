import React from 'react';
import styled from 'styled-components';





const IncentiveHeadingDiv = styled.div`
   display: flex;
   flex: 1 1 100%;
   justify-content: space-between;
   flex-direction: row;
   align-items: center;
   flex-wrap: wrap;
   
   margin: 0 0 1.2rem 0;

   &.donate-heading{
       justify-content: flex-start;
       gap: 1.2rem;
       //flex-wrap: nowrap;
   }
`;

const IncentiveTitle = styled.span`
  //   font-size: 1.4rem;
    flex: 0 0 200px;
     color: black;
     font-weight: bold;
     margin: .4rem 0rem .4rem 0;
     align-self: center;
     .donate-heading > &{
         flex: 0 0 content;
         margin: 0rem 0rem 0rem 0;
     }
`;

const IncentiveRange = styled.span`
    flex-basis: content;
    color: #3CB3AB;
    font-weight: 70;
    margin: .4rem 0 .4rem 0;
    .donate-heading > & {
        margin: 0 0rem 0 0rem;
    }
`;

const getClassName = (donateHeading) => {
    const className = donateHeading ? 'donate-heading' : '';
    return className;
}

const IncentiveHeading = ({item,donateHeading}) => (

    <IncentiveHeadingDiv className={getClassName(donateHeading)}>
        <IncentiveTitle >{item.name}</IncentiveTitle>
        {item.donationLevel !== 0 && <IncentiveRange>${item.donationLevel} or more</IncentiveRange> }
    </IncentiveHeadingDiv>

)

export default IncentiveHeading;