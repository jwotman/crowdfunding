import React from 'react';
import styled from 'styled-components';
import {StyledButton} from '../custom-button/custom-button.component';
import {StyledChildCard} from '../child-card/child-card.component';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import { toggleAcknowledgementOverlayHidden, toggleBodyScroll } from '../../redux/ui_control/ui_control.actions';
import { selectAcknowledgementOverlayHidden } from '../../redux/ui_control/ui_control.selectors';
import checkIconPath from '../../images/icon-check.svg';
import BasicOverlay from '../basic-overlay/basic-overlay.component';


//https://www.youtube.com/watch?v=BoAsayPVogE

const AcknowledgementCard = styled(StyledChildCard)`

    position: relative;
    justify-content: flex-start;
    align-self: center;
    padding: var(--flow-space) 2.4rem var(--flow-space) 2.4rem;

    & > * + * { margin-top: var(--flow-space);
   
    

`;

const CheckIcon = styled.img.attrs(props => ({
    src: checkIconPath, alt: "Donation Complete"
}))`
    width: 17vw;
    height: 17vw;
    max-width: 9rem;
    max-height: 9rem;
    align-self: center;
`;

const AcknowledgementHeading = styled.h2`

    font-size: clamp(1.8rem, 1.3500rem + 1.2500vw, 2.4rem);
    font-weight: bold;
    color: black;
    text-align: center;

`;

const AcknowledgementContent = styled.p`

    text-align: center;
    max-width: 44.4rem;
    line-height: 150%;

`;

const AcknowledgmentButton = styled(StyledButton)`

    height: 4.8rem;
    width: 10.7rem;
    display: flex;
    flex-shrink: 0;
    justify-content: center;
    align-items: center;
    align-self: center;
    margin-top: 3.2rem;
    

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