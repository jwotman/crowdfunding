import React from 'react';
import styled from 'styled-components';
//import StyledButton from '../custom-button/custom-button.component';
import { connect } from 'react-redux';
import { toggleDonateOverlayHidden, toggleAcknowledgementOverlayHidden } from '../../redux/ui_control/ui_control.actions'; 
import { addDonation } from '../../redux/campaign/campaign.actions';


const DonateDiv = styled.div`

    display: flex;
    flex: 1 1 100%;
    flex-direction: column;
    justify-content: center;
    border-top: .1rem solid  lightgray ;
    margin-top: 2.4rem;

    @media screen and (min-width: 700px) {
        flex-flow: row nowrap;
        justify-content: space-between;
   } 

`;

const DonateHeading = styled.h3`
    
    align-self: center;
    margin-top: 2.4rem;
    //margin: 2.4rem 0 .8rem .8rem;
`;
const DonateWrapper = styled.div`
    display: flex;
    
    flex-direction: row;
    justify-content: center;
    gap: 1.6rem;
    
    margin-top: 2.4rem;
    @media screen and (min-width: 700px) {
        flex-flow: row nowrap;
        justify-content: space-between;
        flex: 0 0 23.3rem;
   } 
    //padding: .8rem 1.2rem 0 1.2rem;
    
    
`;

const CurrencyInputWrapper = styled.div`
    height: 4.8rem;
    border-radius: 3.3rem;
    border: .1rem solid ${props=> props.inputIsValid  ? 'lightgrey': 'red'};
    
    color: lightgray;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex: 0 0 10rem;
`

const CurrencyLabel = styled.label`
    flex-basis: content;
    margin-right: .3rem;
    opacity: .25;
    color: black;
    font-weight: bold;

`;
const DonateInput = styled.input.attrs({
    type: "text", size: "2"
  })`    
    border: none;
    color: black;
    font-weight: bold;
    margin-left: .3rem;
    :focus{
        outline: none;
    }
    
`;

const DonateLink = styled.a.attrs({
    href: "#", "aria-label": "Click to donate"
  })`
  
  `

const DonateButton = styled.div`
    align-items: center;
    background-color: #3CB3AB;
    border-radius: 3.3rem;
    border: none;
    color:  white;
    cursor: pointer;
    display: flex;
    flex-direction: row;
    font-size: 1.4rem;
    font-weight: bold;
    height: 4.8rem;
    justify-content: center;
    margin: 0px 0px;
    overflow: hidden;
    text-align: center;
    text-decoration: none;
    white-space: nowrap;
    flex: 0 0 11.7rem;
    :hover{
        background-color: #147A73;
    }

`;



class DonateBox extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            inputIsValid: true,
            donationAmount: 0
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick = () => {
    
        if(this.state.donationAmount < this.props.donationLevel){
            
            this.setState({
                inputIsValid: false
          });
            return;
        }
    
        this.setState({
            inputIsValid: true
        });
        this.props.addCurrentDonation((this.state.donationAmount).toLocaleString('en-us'));
        this.props.toggleDonateHidden();
        this.props.toggleAcknowledgementHidden();
    }
    
       
       render(){
        return <DonateDiv>
                <DonateHeading>Enter your pledge</DonateHeading>
                <DonateWrapper>
                    <CurrencyInputWrapper inputIsValid={this.state.inputIsValid}>
                        <CurrencyLabel>$</CurrencyLabel>
                        <DonateInput  placeholder={this.props.donationLevel} onChange={(event)=>{this.setState({donationAmount: event.target.value})}}/>
                    </CurrencyInputWrapper>
                    <DonateLink onClick={this.handleClick}><DonateButton>Continue</DonateButton></DonateLink>
                </DonateWrapper>
            </DonateDiv>


       }
}

const mapDispatchToProps = dispatch => ({
    toggleDonateHidden: () => dispatch(toggleDonateOverlayHidden()),
    toggleAcknowledgementHidden: () => dispatch(toggleAcknowledgementOverlayHidden()),
    addCurrentDonation: (amount) => dispatch(addDonation(amount))
});

export default connect(null,mapDispatchToProps)(DonateBox);