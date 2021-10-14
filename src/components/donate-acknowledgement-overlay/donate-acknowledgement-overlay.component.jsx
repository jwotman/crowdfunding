import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectAcknowledgementOverlayHidden } from '../../redux/ui_control/ui_control.selectors';
import { StyledButton } from '../custom-button/custom-button.component';
import { StyledChildCard } from '../child-card/child-card.component';
import { toggleAcknowledgementOverlayHidden, toggleBodyScroll } from '../../redux/ui_control/ui_control.actions';
import checkIconPath from '../../images/icon-check.svg';
import React from 'react';
import ReactModal from 'react-modal';
import styled from 'styled-components';




const AcknowledgementCard = styled(StyledChildCard).attrs(props => ({
    className: "acknowledgementCard"
}))`

    position: relative;
    justify-content: flex-start;
    align-self: center;
    padding: var(--spacing-modal-flow) 2.4rem;

    & > * + * { margin-top: var(--spacing-modal-flow)};
   
    

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
   <ReactModal 
            isOpen={!acknowledgementOverlayHidden}
            style={{
                    overlay: {
                    position: 'fixed',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(0,0,0, 0.5)',
                    zIndex: 3,
                    paddingTop: '10rem'
                    },
                    content: {
                    position: 'relative',
                    //maxWidth: '73rem', 
                    
                    }}}
            >
   
        <AcknowledgementCard>
            <CheckIcon />
            <AcknowledgementHeading>Thanks for your support!</AcknowledgementHeading>
            <AcknowledgementContent>Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. You will get an email once our campaign is completed.</AcknowledgementContent>
            <AcknowledgmentButton onClick={ (event) => {toggleOverlayHidden(); toggleBodyScroll();}}>Got it!</AcknowledgmentButton>
        </AcknowledgementCard>
    
    </ReactModal>
);

const mapStateToProps = createStructuredSelector ({
    acknowledgementOverlayHidden: selectAcknowledgementOverlayHidden
});

const mapDispatchToProps = dispatch => ({
    toggleOverlayHidden: () => dispatch(toggleAcknowledgementOverlayHidden()),
    toggleBodyScroll: () => dispatch(toggleBodyScroll())
 });


export default connect(mapStateToProps,mapDispatchToProps)(DonationAcknowledgementOverlay);