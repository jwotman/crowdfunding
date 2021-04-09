import React from 'react';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { selectBodyScroll } from './redux/ui_control/ui_control.selectors';


import CampaignSummary from './components/campaign-summary-card/campaign-summary-card.component';
import CustomHeader from './components/header/header.component';
import DonateAcknowledgementOverlay from './components/donate-acknowledgement-overlay/donate-acknowledgement-overlay.component';
import DonationOverlay from './components/donation-overlay/donation-overlay.component';
import ProductPromoCard from './components/product-promo-card/product-promo-card.component';
import ProjectDetail from './components/project-detail/project-detail.component';

const StyledMain = styled.main`

    display: flex;
    flex-direction: column;
    background-color: lightgrey;
    

`;

const BodyScroll = createGlobalStyle`
   
  ${props=>props.bodyScroll ? '' : 'body{overflow:hidden}'}
`;

const resetPage = (bodyScroll) => {
  if(!bodyScroll){
    window.window.scrollTo(0, 0);
  }
}

function App({bodyScroll}) {
    resetPage(bodyScroll);
    return (
    <React.Fragment>
    <BodyScroll bodyScroll={bodyScroll} />
    <StyledMain >
    
      <CustomHeader/>  
      <ProductPromoCard />
      <CampaignSummary />
      <ProjectDetail/>
      <DonationOverlay/>
      <DonateAcknowledgementOverlay/>
    </StyledMain>
    </React.Fragment>
  );
}

const mapStateToProps = createStructuredSelector ({
  bodyScroll: selectBodyScroll
});

export default connect(mapStateToProps)(App);
