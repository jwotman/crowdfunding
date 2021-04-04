import React from 'react';
import styled from 'styled-components';
import StyledButton from '../custom-button/custom-button.component';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import {selectCurrentDonationLevel} from '../../redux/campaign/campaign.selectors';
import { toggleDonateOverlayHidden, toggleAcknowledgementOverlayHidden,  addDonation } from '../../redux/campaign/campaign.actions'; 


const DonateDiv = styled.div`

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



const DonateBox = ({donationLevel, addCurrentDonation,toggleDonateOverlayHidden,toggleAcknowledgementHidden}) =>  {
       let donationAmount = donationLevel; 
       return (

            <DonateDiv><DonateHeading>Enter your pledge</DonateHeading><DonateWrapper><CurrencyInputWrapper><CurrencySpan>$</CurrencySpan><DonateInput placeholder={donationLevel} onChange={(event)=>{donationAmount = event.target.value}}/></CurrencyInputWrapper><DonateButton onClick={() => { addCurrentDonation(donationAmount);toggleDonateOverlayHidden();toggleAcknowledgementHidden()}}>Continue</DonateButton></DonateWrapper></DonateDiv>


        )
}

const mapDispatchToProps = dispatch => ({
    toggleDonateOverlayHidden: () => dispatch(toggleDonateOverlayHidden()),
    toggleAcknowledgementHidden: () => dispatch(toggleAcknowledgementOverlayHidden()),
    addCurrentDonation: (amount) => dispatch(addDonation(amount))
});

export default connect(null,mapDispatchToProps)(DonateBox);