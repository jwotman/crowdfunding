import React from 'react';
import styled from 'styled-components';
import {StyledChildCard} from '../child-card/child-card.component';

import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import {selectCurrentDonationLevel} from '../../redux/campaign/campaign.selectors';
import { createGlobalStyle } from 'styled-components';
import DonateBox from '../donate-box/donate-box.component';
import Remaining from '../remaining/remaining.component';
import IncentiveCardHeader from '../incentive-card-header/incentive-card-header';


const GlobalCardStyle = createGlobalStyle`
    .canDonate:nth-of-type(${props => props.currentLevelID}){
        border: .1rem solid  var(--color-primary-dark-cyan) ;
    } 
`;


const IncentiveCard = styled(StyledChildCard)`
    border: .1rem solid  lightgray ;
    justify-content: flex-start;  
    flex-direction: row;
    flex-wrap: wrap;
    position: relative;  
    padding: 2.4rem 2.4rem 3.2rem 2.4rem;
`;



const IncentiveDescription = styled.p`
    margin: 2rem 0 1.2rem 0;
    text-align: left;
   // font-size: 1.4rem;
`;

const ActionLine = styled.div`

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 0 0 0 0; 
    flex-basis: 100%;
    justify-content: space-between;
    align-items: center;

`;


export const DisabledOverlay = styled.div`
 width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  mix-blend-mode: normal;
  opacity: ${props => props.disabled ? '0.5' : '0'};
  background: white;
  display: ${props => props.disabled ? 'flex' : 'none'};
`;

const isDisabled = (remaining) => {

    let disabled = false;
    if(remaining === 0){
        disabled = true;
    }
    return disabled;

}


const DonateDetailCard = ({item,isSelectable,currentLevelID}) => {
   
return (
    
            <IncentiveCard id={'card_'+ item.id} currentDonationLevel={currentLevelID} className="canDonate" >
            <DisabledOverlay disabled={isDisabled(item.remaining)} />
            <GlobalCardStyle currentLevelID={currentLevelID} />
               <IncentiveCardHeader item={item} isSelectable={isSelectable} currentLevelID={currentLevelID} disabled={isDisabled(item.remaining)} />
                <IncentiveDescription>
                    {item.description}
                </IncentiveDescription>
                <ActionLine>
                    {item.remaining !== -1 && <Remaining remainingAmount={item.remaining} isSelectable={isSelectable} isMobileSpecific={true} /> }
                    <DonateBox donationLevel={item.donationLevel} disabled={isDisabled(item.remaining)} />
                </ActionLine>  
                
            </IncentiveCard>    
    )
};

const mapStateToProps = createStructuredSelector ({
    currentLevelID: selectCurrentDonationLevel
});





export default connect(mapStateToProps,null)(DonateDetailCard);