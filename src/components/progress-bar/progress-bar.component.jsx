import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCampaignGoal, selectTotalRaised } from '../../redux/campaign/campaign.selectors';
import React from 'react';
import styled from 'styled-components';


const ProgressBarTrack = styled.figure`
  
  //margin: 2rem 0 4rem -2rem;
  align-self: center;
  flex-basis: 100%;
  background-color: hsl(0,0%,95.75%);
  border: none;
  height: 1.2rem;
 
  border-radius: 3.35rem;
  
`;

const ScreenReaderCaption = styled.figcaption`
  position:absolute;
  left:-10000px;
  top:auto;
  width:1px;
  height:1px;
  overflow:hidden;

`;

const ProgressBarFill = styled.div`
  background-color: hsl(176, 50%, 47%);
  width: ${props => props.percentage}%;
  height: 100%;
  border-radius: 3.35rem;
`;


//TODO add redux and a selector to get the percentage.  Change const percent to let and assign the percent in curlies before rendering the components
const getPercentage = (campaignGoal, totalRaised) => {
  let percentage = totalRaised/campaignGoal * 100;
  percentage = (percentage > 100) ? 100 : percentage;
  return Math.round(percentage);
}

const ProgressBar = ({campaignGoal, totalRaised}) => { 
  const percentage = getPercentage(campaignGoal, totalRaised);
  return (<ProgressBarTrack>
    <ProgressBarFill percentage={percentage} />
    <ScreenReaderCaption>{percentage} percent of campaign goal raised</ScreenReaderCaption>
  </ProgressBarTrack>
)};

const mapStateToProps = createStructuredSelector ({
  campaignGoal: selectCampaignGoal,
  totalRaised: selectTotalRaised
});

export default connect(mapStateToProps)(ProgressBar);