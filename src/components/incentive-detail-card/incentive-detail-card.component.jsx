import React from 'react';
import styled from 'styled-components';
import {StyledButton} from '../custom-button/custom-button.component';
import {StyledChildCard} from '../child-card/child-card.component';

import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import {selectCurrentDonationLevel} from '../../redux/campaign/campaign.selectors';
import { chooseDonationLevel} from '../../redux/campaign/campaign.actions'; 
import { toggleDonateOverlayHidden, toggleBodyScroll } from '../../redux/ui_control/ui_control.actions';
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


const RewardButton = styled(StyledButton)`
    
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: center;
   // font-size: 1.4rem;
    width: 15.7rem;
    height: 4.8rem;
    margin: 1.2rem 0 1.2rem 0;
    ${props => props.disabled && 'background-color:black;'}
    

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


const IncentiveDetail = ({item,isSelectable,canDonate,currentLevelID,toggleDonateOverlayHidden,chooseLevel,toggleBodyScroll}) => {
    let cardClass= "cantDonate";
    if(canDonate){
        cardClass = "canDonate";
    }
   
return (
    
            <IncentiveCard id={'card_'+ item.id} currentDonationLevel={currentLevelID} className={cardClass} >
            <DisabledOverlay disabled={isDisabled(item.remaining)} />
            <GlobalCardStyle currentLevelID={currentLevelID} />
               <IncentiveCardHeader item={item} isSelectable={isSelectable} currentLevelID={currentLevelID} disabled={isDisabled(item.remaining)} />
                <IncentiveDescription>
                    {item.description}
                </IncentiveDescription>
                <ActionLine>
            {item.remaining !== -1 && <Remaining remainingAmount={item.remaining} isSelectable={isSelectable} isMobileSpecific={true} /> }
                {canDonate
                    ? currentLevelID === item.id && <DonateBox donationLevel={item.donationLevel} disabled={isDisabled(item.remaining)} />
                    :<RewardButton disabled={isDisabled(item.remaining)} onClick={() => { toggleDonateOverlayHidden();chooseLevel(item.id);toggleBodyScroll()}}>Select Reward</RewardButton>
                } 
                </ActionLine>  
                
            </IncentiveCard>    
    )
};

const mapStateToProps = createStructuredSelector ({
    currentLevelID: selectCurrentDonationLevel
});

const mapDispatchToProps = dispatch => ({
    toggleDonateOverlayHidden: () => dispatch(toggleDonateOverlayHidden()),
    toggleBodyScroll: () => dispatch(toggleBodyScroll()),
    chooseLevel: (id) => dispatch(chooseDonationLevel(id)),
 });




export default connect(mapStateToProps, mapDispatchToProps)(IncentiveDetail);