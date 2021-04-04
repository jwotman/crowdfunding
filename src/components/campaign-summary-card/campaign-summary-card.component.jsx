import React from 'react';
import styled from 'styled-components';
import BasicCard from '../basic-card/basic-card.component';
import ProgressBar from '../progress-bar/progress-bar.component';
import {selectCampaignSummaryData} from '../../redux/campaign/campaign.selectors';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';


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

const formatNumber = (number) => {
    let formattedNumber = 'unable to display';
    if(number){
        formattedNumber = number.toLocaleString("en-US");
    }
    return formattedNumber;

}

const CampaignSummary = ({campaignSummaryData}) => (

    <BasicCard>
        <DollarAmount>${formatNumber(campaignSummaryData.totalRaised)}</DollarAmount>
        <Description>of ${formatNumber(campaignSummaryData.campaignGoal)} backed</Description>
        <Separator/>
        <Amount>{formatNumber(campaignSummaryData.totalBackers)}</Amount>
        <Description>total backers</Description>
        <Separator/>
        <Amount>{campaignSummaryData.daysLeft}</Amount>
        <Description>days left</Description>
        <ProgressWrapper><ProgressBar /></ProgressWrapper>
    </BasicCard>

);

const mapStateToProps = createStructuredSelector ({
    campaignSummaryData: selectCampaignSummaryData
});

export default connect(mapStateToProps)(CampaignSummary);
