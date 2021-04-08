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

const isIncluded = (includeCustom,item) => {

    let isIncluded = true;
    if(!includeCustom){
        if(item.id === 1){
            isIncluded = false;
        }
    } 
    return isIncluded;

}

const IncentiveList = ({incentives, isSelectable, canDonate,includeCustom}) => {

    


    return <StyledIncentiveList>
    {
        
        incentives.filter(item => isIncluded(includeCustom,item)).map((item)=>(
       <IncentiveDetail key={item.id} item={item} isSelectable={isSelectable} canDonate={canDonate}  />
    ))}
    </StyledIncentiveList>


};


const mapStateToProps = createStructuredSelector({
    incentives: selectIncentiveList
  });
  
  
export default connect(mapStateToProps)(IncentiveList);

