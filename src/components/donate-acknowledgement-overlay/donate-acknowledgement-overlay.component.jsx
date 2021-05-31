import React from 'react';
import styled from 'styled-components';
import {StyledButton} from '../custom-button/custom-button.component';
import {StyledCard} from '../basic-card/basic-card.component';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import { toggleAcknowledgementOverlayHidden, toggleBodyScroll } from '../../redux/ui_control/ui_control.actions';
import { selectAcknowledgementOverlayHidden } from '../../redux/ui_control/ui_control.selectors';
import checkIconPath from '../../images/icon-check.svg';
import BasicOverlay from '../basic-overlay/basic-overlay.component';



const AcknowledgementCard = styled(StyledCard)`

    position: relative;
    justify-content: flex-start;
    flex: 1 0 content;
    max-height: 38rem;
    margin: 0 0;
    max-width: 54rem;
    padding: 0;
    align-self: center;


`;

const CheckIcon = styled.img.attrs(props => ({
    src: checkIconPath, alt: "Donation Complete"
}))`
    width: clamp(6.4rem, 17vw, 9rem);
    height: clamp(6.4rem, 17vw, 9rem);
    align-self: center;
    margin-top: clamp(3.2rem, 8.5vw, 4.8rem);
    margin-bottom: clamp(3.2rem, 8.5vw, 4.8rem);
`;

const AcknowledgementHeading = styled.h2`

    font-size: clamp(1.8rem, 1.3500rem + 1.2500vw, 2.4rem);
    font-weight: bold;
    color: black;
    text-align: center;

`;

const AcknowledgementContent = styled.p`

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
    <BasicOverlay isHidden={acknowledgementOverlayHidden}>
        <AcknowledgementCard>
            <CheckIcon />
            <AcknowledgementHeading>Thanks for your support!</AcknowledgementHeading>
            <AcknowledgementContent>Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. You will get an email once our campaign is completed.</AcknowledgementContent>
            <AcknowledgmentButton onClick={ (event) => {toggleOverlayHidden(); toggleBodyScroll();}}>Got it!</AcknowledgmentButton>
        </AcknowledgementCard>
    </BasicOverlay>
);

const mapStateToProps = createStructuredSelector ({
    acknowledgementOverlayHidden: selectAcknowledgementOverlayHidden
});

const mapDispatchToProps = dispatch => ({
    toggleOverlayHidden: () => dispatch(toggleAcknowledgementOverlayHidden()),
    toggleBodyScroll: () => dispatch(toggleBodyScroll())
 });


export default connect(mapStateToProps,mapDispatchToProps)(DonationAcknowledgementOverlay);