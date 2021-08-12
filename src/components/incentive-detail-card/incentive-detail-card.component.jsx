import React from 'react';
import styled from 'styled-components';
import {StyledButton} from '../custom-button/custom-button.component';
import {StyledChildCard} from '../child-card/child-card.component';

import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { chooseDonationLevel } from '../../redux/campaign/campaign.actions'; 
import {selectCurrentDonationLevel} from '../../redux/campaign/campaign.selectors';
import { toggleDonateOverlayHidden, toggleBodyScroll } from '../../redux/ui_control/ui_control.actions';
import Remaining from '../remaining/remaining.component';
import IncentiveHeading from './incentive-detail-heading.component';



const IncentiveCard = styled(StyledChildCard)`
    border: .1rem solid  lightgray ;
    justify-content: flex-start;  
    flex-direction: row;
    flex-wrap: wrap;
    position: relative;
    width: 100%;
    @media screen and (min-width: 700px){
        padding-top: 3.8rem;
    }
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


const IncentiveDetailCard = ({item,remaining,toggleDonateOverlayHidden,chooseLevel,toggleBodyScroll}) => {
    
return (
    
            <IncentiveCard  >
            <DisabledOverlay disabled={isDisabled(remaining)} />
            
               <IncentiveHeading item={item}/>
                <IncentiveDescription>
                    {item.description}
                </IncentiveDescription>
                <ActionLine>
                    {item.remaining !== -1 && <Remaining remainingAmount={remaining} isSelectable={false} isMobileSpecific={true} /> }
                    
                    <RewardButton disabled={isDisabled(item.remaining)} onClick={() => { toggleDonateOverlayHidden();
                                                                                         chooseLevel(item.id);
                                                                                         toggleBodyScroll();}
                                                                                }>Select Reward</RewardButton>
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




export default connect(mapStateToProps, mapDispatchToProps)(IncentiveDetailCard);