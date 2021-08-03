import React from 'react';
import styled from 'styled-components';
import {StyledCard} from '../basic-card/basic-card.component';
import ProgressBar from '../progress-bar/progress-bar.component';
import {selectCampaignSummaryData} from '../../redux/campaign/campaign.selectors';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';




const SummaryCard = styled(StyledCard)`
     flex-flow: row wrap;
    @media screen and (min-width: 700px) {
        flex-flow: row wrap;
    }

`;

const Amount = styled.p`

    font-size: 3.2rem;
    font-weight: bold;
    text-align: center;

`;

const DollarAmount = styled(Amount)`
`;

const Description = styled.p`
    font-size: clamp(1.4rem, 1.2500rem + 0.4167vw, 1.5rem);
    //TODO: use media query instead for font size
    color: #7A7A7A;
    //margin: .9rem 0 1.2rem 0;
    text-align: center;

`;

const Separator = styled.div`

    background-color: lightgray;
    width: 8rem;
    height: .2rem;
`;

const ContentGroup = styled.li.attrs(props => ({
    className: "content-group"
}))`
    //padding-bottom: 2rem;
   // padding-top: 2rem;
    & > * {
        margin-left: auto;
        margin-right: auto;
    }

    & > div {
        margin-top: 2.4rem;
        margin-bottom: 2.4rem;
    }

    & > p + p{
        margin-top: .9rem;
        @media screen and (min-width: 700px){
            margin-top: .8rem;
        }
    }

    

    @media screen and (min-width: 700px) {
        //flex-direction: column;
        border-bottom: none;
        border-right: solid 2px lightgrey;
        //flex: 1 0 30%;
        margin: 2rem 0 2rem 0;
        padding-bottom: 0;
        padding-top: 0;
        display:inline-block;
       
        
        //justify-content: center;
        //align-items: flex-start;
        
        & > ${Separator} {
            display: none;
        }
        & > p {
            text-align: left;
            line-height: 100%;
            
        }

        p:last-of-type {
        margin-bottom: 0;
    }
        
    }


`;

const Content = styled.ul`
    display: flex;
    flex-flow: column nowrap;
    margin-bottom: 2rem;
    @media screen and (min-width: 700px) {
        flex-flow: row nowrap;
        justify-content: center;
        align-content: center;
        flex: 0 0 100%;
        
        li{
            padding-left: 7.2%;
            padding-right: 14%;
        }
        li:first-of-type {
            padding-left: 0;
            padding-right: 6.5%;
        }
        
        li:last-of-type {
            border-right: none;
        }
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
        
        <Content>
            <ContentGroup>
                <DollarAmount>${formatNumber(campaignSummaryData.totalRaised)}</DollarAmount>
                <Description>of ${formatNumber(campaignSummaryData.campaignGoal)} backed</Description>
                <Separator />
            </ContentGroup>
            <ContentGroup>
                <Amount>{formatNumber(campaignSummaryData.totalBackers)}</Amount>
                <Description>total backers</Description>
                <Separator/>
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
