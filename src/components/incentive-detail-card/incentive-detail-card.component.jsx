import React from 'react';
import styled from 'styled-components';
import {StyledButton} from '../custom-button/custom-button.component';
import {StyledCard} from '../basic-card/basic-card.component';
import CustomRadioButton from '../custom-radio-button/custom-radio-button.component';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import {selectCurrentDonationLevel} from '../../redux/campaign/campaign.selectors';
import { toggleDonateOverlayHidden, toggleAcknowledgementOverlayHidden, chooseDonationLevel, addDonation } from '../../redux/campaign/campaign.actions'; 
import { createGlobalStyle } from 'styled-components';


const GlobalCardStyle = createGlobalStyle`
    .canDonate:nth-of-type(${props => props.currentDonationLevel}){
        border: .1rem solid  var(--color-primary-dark-cyan) ;
    } 
`;


const IncentiveCard = styled(StyledCard)`
    border: .1rem solid  lightgray ;
    justify-content: flex-start;    
`;



const IncentiveHeading = styled.div`
   display: flex;
   justify-content: flex-start;
   flex-direction: column;
   margin: 2.4rem 2.4rem 1.2rem 2.4rem;
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
    margin: 1.2rem 2.4rem 1.2rem 2.4rem; 


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
    margin: 1.2rem 0 2.4rem 2.4rem;
    

`;

const HeadingWrapper = styled.span`
    display: flex;
    flex-direction: row;
    border-radius: 50%;
`;

const DonateBox = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    border-top: .1rem solid  lightgray ;


`;

const DonateHeading = styled.span`
    font-size: 1.4rem;
    align-self: center;
    margin: 2.4rem 0 .8rem 0;
`;
const DonateWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    padding: 0 1.2rem 0 1.2rem;
    margin-bottom: 2.4rem;
    
    
`;

const CurrencyInputWrapper = styled.div`
    width: 36%;
    height: 4.8rem;
    border-radius: 3.3rem;
    border: .1rem solid  lightgray ;
    font-size: 1.4rem;
    color: lightgray;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

const CurrencySpan = styled.span`
    flex-basis: content;
    margin-right: .3rem;
    opacity: .25;
    color: black;
    font-weight: bold;

`;
const DonateInput = styled.input.attrs({
    type: "text"
  })`    
    width: 2rem;
    border: none;
    font-size: 1.4rem;
    color: black;
    font-weight: bold;
    size: 2;
    margin-left: .3rem;
    :focus{
        outline: none;
    }
`;

const DonateButton = styled(StyledButton)`
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: center;
    font-size: 1.4rem;
    width: 41%;
    height: 4.8rem;
    margin: 0px 0px;

`;



const IncentiveDetail = ({item: { id,name,donationLevel, description,remaining},isSelectable,canDonate,currentDonationLevel,toggleDonateOverlayHidden,chooseLevel, addCurrentDonation,toggleAcknowledgementHidden}) => {
    let cardClass= "cantDonate";
    if(canDonate){
        cardClass = "canDonate";
    }
    let donationAmount = 25;
return (
    
    <IncentiveCard id={'card_'+ id} currentDonationLevel={currentDonationLevel} className={cardClass} >
   
    <GlobalCardStyle currentDonationLevel={currentDonationLevel} />
        <HeadingWrapper>
          {isSelectable && <CustomRadioButton id={id}></CustomRadioButton>}
            <IncentiveHeading>
                <IncentiveTitle>{name}</IncentiveTitle>
                <IncentiveRange>${donationLevel} or more</IncentiveRange>
            </IncentiveHeading>
        </HeadingWrapper>
        <IncentiveDescription>
            {description}
        </IncentiveDescription>
       <ActionLine><AmountWrapper><Amount>{remaining}</Amount><AmountText>left</AmountText></AmountWrapper></ActionLine>
        {canDonate
            ? currentDonationLevel === id && <DonateBox><DonateHeading>Enter your pledge</DonateHeading><DonateWrapper><CurrencyInputWrapper><CurrencySpan>$</CurrencySpan><DonateInput placeholder={25} onChange={(event)=>{donationAmount = event.target.value}}/></CurrencyInputWrapper><DonateButton onClick={() => { addCurrentDonation(donationAmount);toggleDonateOverlayHidden();toggleAcknowledgementHidden()}}>Continue</DonateButton></DonateWrapper></DonateBox>
            :<RewardButton onClick={() => { toggleDonateOverlayHidden();chooseLevel(id)}}>Select Reward</RewardButton>
        }   
        
    </IncentiveCard>    )
};

const mapStateToProps = createStructuredSelector ({
    currentDonationLevel: selectCurrentDonationLevel
});

const mapDispatchToProps = dispatch => ({
    toggleDonateOverlayHidden: () => dispatch(toggleDonateOverlayHidden()),
    toggleAcknowledgementHidden: () => dispatch(toggleAcknowledgementOverlayHidden()),
    chooseLevel: (id) => dispatch(chooseDonationLevel(id)),
    addCurrentDonation: (amount) => dispatch(addDonation(amount))

 });




export default connect(mapStateToProps, mapDispatchToProps)(IncentiveDetail);