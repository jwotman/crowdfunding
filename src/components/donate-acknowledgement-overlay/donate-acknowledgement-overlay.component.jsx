import React from 'react';
import styled from 'styled-components';
import {StyledButton} from '../custom-button/custom-button.component';
import {StyledCard} from '../basic-card/basic-card.component';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import { toggleAcknowledgementOverlayHidden, toggleBodyScroll } from '../../redux/ui_control/ui_control.actions';
import { selectAcknowledgementOverlayHidden } from '../../redux/ui_control/ui_control.selectors';




const OverlayContainer = styled.div`

  position: fixed; /* Sit on top of the page content */
  display: ${props => props.acknowledgementOverlayHidden ? 'none' : 'flex'}; /* Hidden by default */
  width: 100%; /* Full width (cover the whole page) */
  height: 100%; /* Full height (cover the whole page) */
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0,0,0,0.5); /* Black background with opacity */
  z-index: 2; /* Specify a stack order in case you're using a different order for other elements */
  cursor: pointer; /* Add a pointer on hover */
  justify-content: center;

`;

const AcknowledgementCard = styled(StyledCard)`

    display: flex;
    justify-content: center;
    margin: 14.3rem 2.4rem 14.2rem 2.4rem;
    max-width: 54rem;
    padding: 0;


`;

const CheckIcon = styled.div`
    background-image: url('/icon-check.svg');
    background-repeat: no-repeat;
    background-size: cover;
    width: clamp(6.4rem, 17vw, 9rem);
    height: clamp(6.4rem, 17vw, 9rem);
    align-self: center;
    margin-top: clamp(3.2rem, 8.5vw, 4.8rem);
    margin-bottom: clamp(3.2rem, 8.5vw, 4.8rem);
`;

const AcknowledgementHeading = styled.div`

    font-size: clamp(1.8rem, 1.3500rem + 1.2500vw, 2.4rem);
    font-weight: bold;
    color: black;
    text-align: center;

`;

const AcknowledgementContent = styled.span`

    margin: 1.2rem 2.4rem 1.9rem 2.4rem;
    text-align: center;
    max-width: 44.4rem;

`;

const AcknowledgmentButton = styled(StyledButton)`

    height: 4.8rem;
    width: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: center;
    

`;







const DonationAcknowledgementOverlay = ({acknowledgementOverlayHidden,toggleOverlayHidden,toggleBodyScroll}) => (
    <OverlayContainer acknowledgementOverlayHidden={acknowledgementOverlayHidden}>
        <AcknowledgementCard>
            <CheckIcon />
            <AcknowledgementHeading>Thanks for your support!</AcknowledgementHeading>
            <AcknowledgementContent>Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. You will get an email once our campaign is completed.</AcknowledgementContent>
            <AcknowledgmentButton onClick={ (event) => {toggleOverlayHidden(); toggleBodyScroll();}}>Got it!</AcknowledgmentButton>
        </AcknowledgementCard>
    </OverlayContainer>
);

const mapStateToProps = createStructuredSelector ({
    acknowledgementOverlayHidden: selectAcknowledgementOverlayHidden
});

const mapDispatchToProps = dispatch => ({
    toggleOverlayHidden: () => dispatch(toggleAcknowledgementOverlayHidden()),
    toggleBodyScroll: () => dispatch(toggleBodyScroll())
 });


export default connect(mapStateToProps,mapDispatchToProps)(DonationAcknowledgementOverlay);