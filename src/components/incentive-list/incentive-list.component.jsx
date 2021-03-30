import React from 'react';
import styled from 'styled-components';
import IncentiveDetail from '../incentive-detail-card/incentive-detail-card.component';
import {connect} from 'react-redux';
import { selectIncentiveList } from '../../redux/incentive-list/incentive-list.selectors';
import { createStructuredSelector } from 'reselect';


const StyledIncentiveList = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;

`;





const IncentiveList = ({incentives, isSelectable, canDonate}) => {

    


    return <StyledIncentiveList>
    {
        incentives.map((item)=>(
        <IncentiveDetail key={item.id} item={item} isSelectable={true} canDonate={true}  />
    ))}
    </StyledIncentiveList>


};


const mapStateToProps = createStructuredSelector({
    incentives: selectIncentiveList
  });
  
  
export default connect(mapStateToProps)(IncentiveList);

