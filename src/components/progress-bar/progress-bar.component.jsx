import React from 'react';
import styled from 'styled-components';

import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { selectCampaignGoal, selectTotalRaised } from '../../redux/campaign/campaign.selectors';


const ProgressBarTrack = styled.div`
  background-color: hsl(0,0%,95.75%);
  border: none;
  height: 1.2rem;
  //width: 100%;
  margin: 0;
  border-radius: 3.35rem;
  
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

const ProgressBar = ({campaignGoal, totalRaised}) => (
  
  <ProgressBarTrack>
    <ProgressBarFill percentage={getPercentage(campaignGoal, totalRaised)} />
  </ProgressBarTrack>
    
  
  
);

const mapStateToProps = createStructuredSelector ({
  campaignGoal: selectCampaignGoal,
  totalRaised: selectTotalRaised
});

export default connect(mapStateToProps)(ProgressBar);