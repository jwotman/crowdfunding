import React from 'react';
import styled from 'styled-components';
import BasicCard from '../basic-card/basic-card.component';
import ProgressBar from '../progress-bar/progress-bar.component';



const Amount = styled.span`

    font-size: 3.2rem;
    font-weight: bold;
    margin: 1.2rem 0 0 0;
    text-align: center;



`;

const DollarAmount = styled(Amount)`
    margin-top: 3.3rem;

`;

const Description = styled.span`

    font-size: 1.4rem;
    color: #7A7A7A;
    margin: .9rem 0 1.2rem 0;
    text-align: center;

`;

const Separator = styled.div`
    background-color: lightgray;
    width: 8rem;
    height: .1rem;
    margin: 1.2rem 0 1.2rem 0;
    align-self: center;
`;

const ProgressWrapper = styled.div`

    margin: 2rem 0 4rem 0;
`;

const CampaignSummary = () => (

    <BasicCard>
        <DollarAmount>$89,914</DollarAmount>
        <Description>of $100,000 backed</Description>
        <Separator/>
        <Amount>5007</Amount>
        <Description>total backers</Description>
        <Separator/>
        <Amount>56</Amount>
        <Description>days left</Description>
        <ProgressWrapper><ProgressBar /></ProgressWrapper>
    </BasicCard>

);


export default CampaignSummary;
