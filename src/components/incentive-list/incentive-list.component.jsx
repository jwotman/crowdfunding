import React from 'react';
import styled from 'styled-components';
import IncentiveDetail from '../incentive-detail-card/incentive-detail-card.component';
import {connect} from 'react-redux';
import { selectCampaignIncentives } from '../../redux/campaign/campaign.selectors';
import { createStructuredSelector } from 'reselect';


const StyledIncentiveList = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
`;



const IncentiveList = ({incentives}) => (

    <StyledIncentiveList>
    {incentives.map((item)=>(
        <IncentiveDetail key={item.id} item={item}  />
    ))}
    </StyledIncentiveList>


);


const mapStateToProps = createStructuredSelector({
    incentives: selectCampaignIncentives
  });
  
  
export default connect(mapStateToProps)(IncentiveList);

