import React from 'react';
import styled from 'styled-components';
import {StyledCard} from '../basic-card/basic-card.component';
import BasicCard from '../basic-card/basic-card.component';
import IncentiveList from '../incentive-list/incentive-list.component';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import { selectDonateOverlayHidden } from '../../redux/campaign/campaign.selectors';


const OverlayContainer = styled.div`

position: fixed; /* Sit on top of the page content */
  display: ${props => props.donateOverlayHidden ? 'none' : 'block'}; /* Hidden by default */
  width: 100%; /* Full width (cover the whole page) */
  height: 100%; /* Full height (cover the whole page) */
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0,0,0,0.5); /* Black background with opacity */
  z-index: 2; /* Specify a stack order in case you're using a different order for other elements */
  cursor: pointer; /* Add a pointer on hover */

`;


const HeadingWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

`;

const Heading = styled.h3`

    font-size: 1.8rem;
    font-weight: bold;
    margin: 4rem  0 1.2rem 2.4rem; 
`;

const Content = styled.span`

    font-size: 1.4rem;
    margin: 0 2.4rem 0 2.4rem;

`;

const CloseIcon = styled.div`

    background-image: url('/icon-close-modal.svg');


`;





const DonationOverlay = ({donateOverlayHidden}) => (

    <OverlayContainer donateOverlayHidden={donateOverlayHidden}>
        <BasicCard>
            <HeadingWrapper><Heading>Support this Project</Heading><CloseIcon/></HeadingWrapper>
            <Content>Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?</Content>
            <IncentiveList selectable={true} canDonate={true}/>
        </BasicCard>
    </OverlayContainer>






);

const mapStateToProps = createStructuredSelector ({
    donateOverlayHidden: selectDonateOverlayHidden
});


export default connect(mapStateToProps)(DonationOverlay);
