import React from 'react';
import styled from 'styled-components';
import { StyledCard } from '../basic-card/basic-card.component';
import IncentiveList from '../incentive-list/incentive-list.component';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import { selectDonateOverlayHidden } from '../../redux/ui_control/ui_control.selectors';
import { toggleDonateOverlayHidden,toggleBodyScroll } from '../../redux/ui_control/ui_control.actions';
import closeIconPath from '../../images/icon-close-modal.svg';
import BasicOverlay from '../basic-overlay/basic-overlay.component';




const OverlayCard = styled(StyledCard)`

  position: relative;
  top: 45%;
  align-self: center;
  
`

const HeadingDiv= styled.div`

    background-color: white;
    display: flex;
    flex-direction: column;


`;

const HeadingWrapper = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    margin: 2.4rem 2.4rem

`;

const Heading = styled.h3`

    font-size: 1.8rem;
    font-weight: bold;
    color: black;

`;

const Content = styled.p`

    //font-size: 1.4rem;
    margin: 0 2.4rem 2.4rem 2.4rem;
    

`;

const ImageAnchor = styled.a.attrs(props => ({
    href: "#", "aria-label": "Close Dialog"
}))`


`

const CloseIcon = styled.img.attrs(props => ({
    src: closeIconPath,  alt: "Close"
}))`


    width: 1.4rem;
    height: 1.4rem;


`;

const DonateForm = styled.form`


`;





const DonationOverlay = ({donateOverlayHidden,toggleOverlay, toggleScroll}) => (

    <BasicOverlay isHidden={donateOverlayHidden}>
        <OverlayCard>
            <HeadingDiv>
                <HeadingWrapper><Heading>Back this Project</Heading><ImageAnchor onClick={() => {toggleOverlay();toggleScroll();}}><CloseIcon  /></ImageAnchor></HeadingWrapper>
                <Content>Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?</Content>
            </HeadingDiv>
            <DonateForm>
                <IncentiveList canDonate={true} includeCustom={true}/>
            </DonateForm>
        </OverlayCard>
    </BasicOverlay>

);

const mapStateToProps = createStructuredSelector ({
    donateOverlayHidden: selectDonateOverlayHidden
});

const mapDispatchToProps = dispatch => ({
    toggleOverlay: () => dispatch(toggleDonateOverlayHidden()),
    toggleScroll: () => dispatch(toggleBodyScroll())
 });


 export default connect(mapStateToProps, mapDispatchToProps)(DonationOverlay);
