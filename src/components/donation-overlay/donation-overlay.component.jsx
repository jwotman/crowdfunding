import React from 'react';
import styled from 'styled-components';
import { StyledCard } from '../basic-card/basic-card.component';
import IncentiveList from '../incentive-list/incentive-list.component';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import { selectDonateOverlayHidden } from '../../redux/ui_control/ui_control.selectors';
import { toggleDonateOverlayHidden,toggleBodyScroll } from '../../redux/ui_control/ui_control.actions';


const OverlayContainer = styled.div`

position: fixed; /* Sit on top of the page content */
  display: ${props => props.donateOverlayHidden ? 'none' : 'flex'}; /* Hidden by default */
  width: 100%; /* Full width (cover the whole page) */
  height: 100%; /* Full height (cover the whole page) */
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0,0,0,0.5); /* Black background with opacity */
  z-index: 2; /* Specify a stack order in case you're using a different order for other elements */
  cursor: pointer; /* Add a pointer on hover */
  overflow-y: scroll;
  flex-direction: column;

`;


const OverlayCard = styled(StyledCard)`

  position: static;
  margin-top: 12.1rem;
`

const HeadingDiv= styled.div`

    background-color: white;
    display: flex;
    flex-direction: column;


`;

const HeadingWrapper = styled.div`
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

const Content = styled.span`

    font-size: 1.4rem;
    margin: 0 2.4rem 2.4rem 2.4rem;
    

`;

const CloseIcon = styled.div`

    background-image: url('/icon-close-modal.svg');
    width: 1.4rem;
    height: 1.4rem;


`;





const DonationOverlay = ({donateOverlayHidden,toggleOverlay, toggleScroll}) => (

    <OverlayContainer donateOverlayHidden={donateOverlayHidden}>
        <OverlayCard>
            <HeadingDiv>
                <HeadingWrapper><Heading>Back this Project</Heading><CloseIcon onClick={() => {toggleOverlay();toggleScroll();}} /></HeadingWrapper>
                <Content>Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?</Content>
            </HeadingDiv>
            <IncentiveList isSelectable={true} canDonate={true} includeCustom={true}/>
        </OverlayCard>
    </OverlayContainer>

);

const mapStateToProps = createStructuredSelector ({
    donateOverlayHidden: selectDonateOverlayHidden
});

const mapDispatchToProps = dispatch => ({
    toggleOverlay: () => dispatch(toggleDonateOverlayHidden()),
    toggleScroll: () => dispatch(toggleBodyScroll())
 });


 export default connect(mapStateToProps, mapDispatchToProps)(DonationOverlay);
