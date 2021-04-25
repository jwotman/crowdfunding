import React from 'react';
import styled from 'styled-components';
import StyledButton from '../custom-button/custom-button.component';
import { connect } from 'react-redux';
import { toggleDonateOverlayHidden, toggleAcknowledgementOverlayHidden } from '../../redux/ui_control/ui_control.actions'; 
import { addDonation } from '../../redux/campaign/campaign.actions';


const DonateDiv = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    border-top: .1rem solid  lightgray ;
    margin-top: 2.4rem;

`;

const DonateHeading = styled.span`
    
    align-self: center;
    margin: 2.4rem 0 .8rem .8rem;
`;
const DonateWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    padding: .8rem 1.2rem 0 1.2rem;
    
    
`;

const CurrencyInputWrapper = styled.div`
    width: 36%;
    height: 4.8rem;
    border-radius: 3.3rem;
    border: .1rem solid  lightgray ;
    
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
    color: black;
    font-weight: bold;
    size: 2;
    margin-left: .3rem;
    :focus{
        outline: none;
    }
`;

const DonateButton = styled.div`
    align-items: center;
    background-color: #3CB3AB;
    border-radius: 3.3rem;
    border: none;
    color:  white;
    cursor: pointer;
    display: flex;
    flex-direction: row;
    //font-size: 1.4rem;
    font-weight: bold;
    height: 4.8rem;
    justify-content: center;
    margin: 0px 0px;
    overflow: hidden;
    text-align: center;
    text-decoration: none;
    white-space: nowrap;
    width: 41%;

`;



const DonateBox = ({donationLevel, addCurrentDonation,toggleDonateHidden,toggleAcknowledgementHidden}) =>  {
       let donationAmount = donationLevel; 
       return (

            <DonateDiv><DonateHeading>Enter your pledge</DonateHeading><DonateWrapper><CurrencyInputWrapper><CurrencySpan>$</CurrencySpan><DonateInput placeholder={donationLevel} onChange={(event)=>{donationAmount = event.target.value}}/></CurrencyInputWrapper><DonateButton  onClick={() => { addCurrentDonation(donationAmount);toggleDonateHidden();toggleAcknowledgementHidden()}}>Continue</DonateButton></DonateWrapper></DonateDiv>


        )
}

const mapDispatchToProps = dispatch => ({
    toggleDonateHidden: () => dispatch(toggleDonateOverlayHidden()),
    toggleAcknowledgementHidden: () => dispatch(toggleAcknowledgementOverlayHidden()),
    addCurrentDonation: (amount) => dispatch(addDonation(amount))
});

export default connect(null,mapDispatchToProps)(DonateBox);