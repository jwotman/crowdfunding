import React from 'react';
import styled from 'styled-components';
import IncentiveDetailCard from '../incentive-detail-card/incentive-detail-card.component';
import DonateDetailCard from '../donate-detail-card/donate-detail-card.component';
import {connect} from 'react-redux';
import { selectIncentiveList } from '../../redux/incentive-list/incentive-list.selectors';
import { createStructuredSelector } from 'reselect';
import { selectRemainingArray } from '../../redux/campaign/campaign.selectors';


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

const withCard = (canDonate, item, remainingArray) => {

    const functionalComponent = canDonate ? DonateDetailCard : IncentiveDetailCard;
    const props = { item: item, key: item.id, remaining: remainingArray[item.id + ''] };
    const reactElement = React.createElement(functionalComponent,props);

    return reactElement;

}

const IncentiveList = ({incentives,  canDonate,includeCustom,remainingArray}) => {

    


    return <StyledIncentiveList>
    {
        
        incentives.filter(item => isIncluded(includeCustom,item)).map((item)=> {

            return withCard(canDonate, item,remainingArray);

        })}
    </StyledIncentiveList>


};


const mapStateToProps = createStructuredSelector({
    incentives: selectIncentiveList,
    remainingArray: selectRemainingArray
  });
  
  
export default connect(mapStateToProps)(IncentiveList);

