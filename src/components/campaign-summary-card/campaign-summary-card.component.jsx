import React from 'react';
import styled from 'styled-components';
import {StyledCard} from '../basic-card/basic-card.component';
import ProgressBar from '../progress-bar/progress-bar.component';
import {selectCampaignSummaryData} from '../../redux/campaign/campaign.selectors';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import { createGlobalStyle } from 'styled-components';



const GlobalCardStyle = createGlobalStyle`
    .content-group:last-of-type{
        border: none;
    }
    
    .content-group:first-of-type{
        padding-left: 2.4rem;
    }
`;

const SummaryCard = styled(StyledCard)`

    @media screen and (min-width: 700px) {
        flex-flow: row wrap;
        //justify-content: flex-start;
    }
    



`;

const Amount = styled.p`

    font-size: 3.2rem;
    font-weight: bold;
    margin: 1.2rem 0 0 0;
    text-align: center;



`;

const DollarAmount = styled(Amount)`
    //margin-top: 3.3rem;

`;

const Description = styled.p`
    font-size: clamp(1.4rem, 1.2500rem + 0.4167vw, 1.5rem);
    //TODO: use media query instead for font size
    color: #7A7A7A;
    //margin: .9rem 0 1.2rem 0;
    text-align: center;

`;

const ContentGroup = styled.li.attrs(props => ({
    className: "content-group"
}))`
    
    display: flex;
    flex-basis: 100%;
    flex-direction: column;
    border-bottom: solid 2px lightgrey;
    padding-bottom: 2rem;
    padding-top: 2rem;
   
    gap: 1rem;
    position: relative;
    

    &:before {
        content: '';
        width: 40px;
        height: 4px;
        background: white;
        position: absolute;
        right: 0;
        bottom: -4px;
    }
   
    &:after {
        content: '';
        width: 50px;
        height: 4px;
        background: white;
        position: absolute;
        left: 0;
        bottom: -4px;
    }
    

    @media screen and (min-width: 700px) {
        flex-direction: column;
        border-bottom: none;
        border-right: solid 2px lightgrey;
        flex: 0 0 180px;
        margin: 2rem 0 2rem 0;
        padding: 0;
        padding-left: 4.7rem;
        padding-right: 1.8rem;
        justify-content: center;
        align-items: flex-start;
        &:after {
            content: none;
        }

        &:before {
            content: none;
        }
       
        
    }


`;

const Content = styled.ul`
    display: flex;
    flex-flow: column nowrap;
    @media screen and (min-width: 700px) {
        flex-flow: row nowrap;
        justify-content: center;
        flex: 0 0 100%;
    }
`;



const formatNumber = (number) => {
    let formattedNumber = 'unable to display';
    if(number){
        formattedNumber = number.toLocaleString("en-US");
    }
    return formattedNumber;

}

const CampaignSummary = ({campaignSummaryData}) => (

    <SummaryCard>
        <GlobalCardStyle/>
        <Content>
            <ContentGroup>
                <DollarAmount>${formatNumber(campaignSummaryData.totalRaised)}</DollarAmount>
                <Description>of ${formatNumber(campaignSummaryData.campaignGoal)} backed</Description>
            </ContentGroup>
            <ContentGroup>
                <Amount>{formatNumber(campaignSummaryData.totalBackers)}</Amount>
                <Description>total backers</Description>
            </ContentGroup>
            <ContentGroup>
                <Amount>{campaignSummaryData.daysLeft}</Amount>
                <Description>days left</Description>
            </ContentGroup>
        </Content>
       <ProgressBar />
    </SummaryCard>

);

const mapStateToProps = createStructuredSelector ({
    campaignSummaryData: selectCampaignSummaryData
});

export default connect(mapStateToProps)(CampaignSummary);
