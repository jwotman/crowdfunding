import React from 'react';
import styled from 'styled-components';
import {StyledButton} from '../custom-button/custom-button.component';
import {StyledCard} from '../basic-card/basic-card.component';




const IncentiveCard = styled(StyledCard)`
    border: .1rem solid lightgray;
    justify-content: flex-start;
`;

const IncentiveHeading = styled.div`
   display: flex;
   justify-content: flex-start;
   flex-direction: column;
   margin: 2.4rem 2.4rem 1.2rem 2.4rem;
`;

const IncentiveTitle = styled.span`
     font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: .4rem;

`;

const IncentiveRange = styled.span`

    color: #3CB3AB;
    font-size: 1.5rem;
    font-weight: 70;
    margin-top: .4rem;

`;

const IncentiveDescription = styled.p`
    margin: 1.2rem 2.4rem 0 2.4rem;
    text-align: left;
    font-size: 1.4rem;


`;

const ActionLine = styled.div`

    display: flex;
    flex-direction: column;
    margin: 1.2rem 2.4rem 1.2rem 2.4rem; 


`;

const AmountWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    margin: 1.2rem 0 1.2rem 0; 
`;

const Amount = styled.span`
    font-size: 3.2rem;
    font-weight: bold;
    color: black;


`;

const AmountText = styled.span`
    font-size: 1.5rem;
    vertical-align: middle;
    padding-left: .8rem;

`;

const RewardButton = styled(StyledButton)`
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: center;
    font-size: 1.4rem;
    width: 15.7rem;
    height: 4.8rem;
    

`;


const IncentiveDetail = ({item: { name, donationLevel, description,remaining}}) => (
    <IncentiveCard>
        <IncentiveHeading>
            <IncentiveTitle>{name}</IncentiveTitle>
            <IncentiveRange>${donationLevel} or more</IncentiveRange>
        </IncentiveHeading>
        <IncentiveDescription>
            {description}
        </IncentiveDescription>
       <ActionLine><AmountWrapper><Amount>{remaining}</Amount><AmountText>left</AmountText></AmountWrapper>
        <RewardButton>Select Reward</RewardButton>  </ActionLine> 
    </IncentiveCard>    

);



export default IncentiveDetail;