import React from 'react';
import styled from 'styled-components';
import {StyledButton} from '../custom-button/custom-button.component';
import {StyledChildCard} from '../child-card/child-card.component';
import CustomRadioButton from '../custom-radio-button/custom-radio-button.component';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import {selectCurrentDonationLevel} from '../../redux/campaign/campaign.selectors';
import { chooseDonationLevel} from '../../redux/campaign/campaign.actions'; 
import { toggleDonateOverlayHidden, toggleBodyScroll } from '../../redux/ui_control/ui_control.actions';
import { createGlobalStyle } from 'styled-components';
import DonateBox from '../donate-box/donate-box.component';
import Remaining from '../remaining/remaining.component';


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

const HeadingWrapper = styled.span`
    display: flex;
    align-items: center;
    flex-direction: row;
    //align-items: center;
    border-radius: 50%;
    width: 100%;
`;

const IncentiveHeading = styled.div`
   display: flex;
   flex-basis: 100%;
   justify-content: space-between;
   flex-direction: row;
   align-items: center;
   flex-wrap: wrap;
   margin: 0 0 1.2rem 0;
`;

const IncentiveTitle = styled.span`
  //   font-size: 1.4rem;
    flex: 0 0 200px;
     color: black;
     font-weight: bold;
     margin: .4rem 0rem .4rem 0;
     align-self: center;
`;

const IncentiveRange = styled.span`
    flex-basis: content;
    color: #3CB3AB;
    font-weight: 70;
    margin: .4rem 0 .4rem 0;
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


const IncentiveDetail = ({item: { id,name,donationLevel, description,remaining},isSelectable,canDonate,currentLevelID,toggleDonateOverlayHidden,chooseLevel,toggleBodyScroll}) => {
    let cardClass= "cantDonate";
    if(canDonate){
        cardClass = "canDonate";
    }
   
return (
    
            <IncentiveCard id={'card_'+ id} currentDonationLevel={currentLevelID} className={cardClass} >
            <DisabledOverlay disabled={isDisabled(remaining)} />
            <GlobalCardStyle currentLevelID={currentLevelID} />
                <HeadingWrapper>
                {isSelectable &&  <CustomRadioButton id={id} isSelected={currentLevelID===id} disabled={isDisabled(remaining)}></CustomRadioButton>  }
                    <IncentiveHeading>
                        <IncentiveTitle>{name}</IncentiveTitle>
                        {donationLevel !== 0 && <IncentiveRange>${donationLevel} or more</IncentiveRange> }
                    </IncentiveHeading>
                </HeadingWrapper>
                <IncentiveDescription>
                    {description}
                </IncentiveDescription>
                <ActionLine>
            {remaining !== -1 && <Remaining remainingAmount={remaining} /> }
                {canDonate
                    ? currentLevelID === id && <DonateBox donationLevel={donationLevel} disabled={isDisabled(remaining)} />
                    :<RewardButton disabled={isDisabled(remaining)} onClick={() => { toggleDonateOverlayHidden();chooseLevel(id);toggleBodyScroll()}}>Select Reward</RewardButton>
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