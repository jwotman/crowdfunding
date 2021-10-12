import React from 'react';
import styled from 'styled-components';
import WebFont from 'webfontloader';

import CampaignSummary from './components/campaign-summary-card/campaign-summary-card.component';
import CustomHeader from './components/header/custom-header.component';
import DonateAcknowledgementOverlay from './components/donate-acknowledgement-overlay/donate-acknowledgement-overlay.component';
import DonationOverlay from './components/donation-overlay/donation-overlay.component';
import ProductPromoCard from './components/product-promo-card/product-promo-card.component';
import ProjectDetail from './components/project-detail/project-detail.component';

const StyledMain = styled.main`

    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: lightgrey;
   
    

`;



const loadFonts = () => {

  WebFont.load({
    google: {
      families: ['Roboto:400,500,700']
    }
  });

}

function App({bodyScroll}) {
    loadFonts();
    return (
    <React.Fragment>
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


export default App;
