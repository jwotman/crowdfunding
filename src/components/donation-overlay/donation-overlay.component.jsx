import './donation_overlay.scss';
import { selectDonateOverlayHidden } from '../../redux/ui_control/ui_control.selectors';
import { StyledCard } from '../basic-card/basic-card.component';
import { toggleDonateOverlayHidden,toggleBodyScroll } from '../../redux/ui_control/ui_control.actions';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import closeIconPath from '../../images/icon-close-modal.svg';
import IncentiveList from '../incentive-list/incentive-list.component';
import React,{ useEffect } from 'react';
import ReactModal from 'react-modal';
import styled from 'styled-components';



const OverlayCard = styled(StyledCard)`

  position: relative;
  padding: 0rem 2.4rem;
  //Question: ask re: X offset in Chrome
  
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

const Heading = styled.h2`

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





const DonationOverlay = ({donateOverlayHidden,toggleOverlay, toggleScroll}) => {

    
    useEffect(() => {    ReactModal.setAppElement('#main');  });


return (

    <ReactModal 
            isOpen={!donateOverlayHidden}
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
                    paddingTop: '10rem',
                    overflowY: '',
                    flexDirection: 'column'
                    },
                    content: {
                    position: 'relative',
                    margin: 'auto'
                    //maxWidth: '73rem', 
                    
                    }}}
            >
        <OverlayCard>
            <HeadingDiv>
                <HeadingWrapper><Heading>Back this Project</Heading><ImageAnchor onClick={() => {toggleOverlay();toggleScroll();}}><CloseIcon  /></ImageAnchor></HeadingWrapper>
                <Content>Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?</Content>
            </HeadingDiv>
            <DonateForm>
                <IncentiveList canDonate={true} includeCustom={true}/>
            </DonateForm>
        </OverlayCard>
    </ReactModal>

)


                };

const mapStateToProps = createStructuredSelector ({
    donateOverlayHidden: selectDonateOverlayHidden
});

const mapDispatchToProps = dispatch => ({
    toggleOverlay: () => dispatch(toggleDonateOverlayHidden()),
    toggleScroll: () => dispatch(toggleBodyScroll())
 });


 export default connect(mapStateToProps, mapDispatchToProps)(DonationOverlay);
