import React from 'react';
import styled from 'styled-components';
import {StyledButton} from '../custom-button/custom-button.component';
import {StyledCard} from '../basic-card/basic-card.component';
import CustomRadioButton from '../custom-radio-button/custom-radio-button.component';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import {selectCurrentDonationLevel} from '../../redux/campaign/campaign.selectors';
import { chooseDonationLevel} from '../../redux/campaign/campaign.actions'; 
import { toggleDonateOverlayHidden, toggleBodyScroll } from '../../redux/ui_control/ui_control.actions';
import { createGlobalStyle } from 'styled-components';
import DonateBox from '../donate-box/donate-box.component';


const GlobalCardStyle = createGlobalStyle`
    .canDonate:nth-of-type(${props => props.currentLevelID}){
        border: .1rem solid  var(--color-primary-dark-cyan) ;
    } 
`;


const IncentiveCard = styled(StyledCard)`
    border: .1rem solid  lightgray ;
    justify-content: flex-start;  
    position: relative;  
    padding: 2.4rem 0 3.2rem 0;
`;



const IncentiveHeading = styled.div`
   display: flex;
   justify-content: flex-start;
   flex-direction: column;
   margin: 0 2.4rem 1.2rem 2.4rem;
`;

const IncentiveTitle = styled.span`
     font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: .4rem;
`;

const IncentiveRange = styled.span`
    color: #3CB3AB;
    font-size: 1.5rem;
    font-weight: 70;
    margin-top: .4rem;
`;

const IncentiveDescription = styled.p`
    margin: 1.2rem 2.4rem 0 2.4rem;
    text-align: left;
    font-size: 1.4rem;
`;

const ActionLine = styled.div`

    display: flex;
    flex-direction: column;
    margin: 1.2rem 2.4rem 0rem 2.4rem; 


`;

const AmountWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    margin: 1.2rem 0 1.2rem 0; 
`;

const Amount = styled.span`
    font-size: 3.2rem;
    font-weight: bold;
    color: black;


`;

const AmountText = styled.span`
    font-size: 1.5rem;
    vertical-align: middle;
    padding-left: .8rem;

`;

const RewardButton = styled(StyledButton)`
    
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: center;
    font-size: 1.4rem;
    width: 15.7rem;
    height: 4.8rem;
    margin: 0 0 2.4rem 2.4rem;
    ${props => props.disabled && 'background-color:black;'}
    

`;

const HeadingWrapper = styled.span`
    display: flex;
    flex-direction: row;
    align-items: center;
    border-radius: 50%;
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
                {isSelectable && <CustomRadioButton id={id} isSelected={currentLevelID===id}></CustomRadioButton>}
                    <IncentiveHeading>
                        <IncentiveTitle>{name}</IncentiveTitle>
                        {donationLevel !== 0 && <IncentiveRange>${donationLevel} or more</IncentiveRange> }
                    </IncentiveHeading>
                </HeadingWrapper>
                <IncentiveDescription>
                    {description}
                </IncentiveDescription>
            {remaining !== -1 && <ActionLine><AmountWrapper><Amount>{remaining}</Amount><AmountText>left</AmountText></AmountWrapper></ActionLine> }
                {canDonate
                    ? currentLevelID === id && <DonateBox donationLevel={donationLevel} disabled={isDisabled(remaining)} />
                    :<RewardButton disabled={isDisabled(remaining)} onClick={() => { toggleDonateOverlayHidden();chooseLevel(id);toggleBodyScroll()}}>Select Reward</RewardButton>
                }   
                
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