import React from 'react';
import styled from 'styled-components';

import CustomHeader from './components/header/header.component';
import ProductPromoCard from './components/product-promo-card/product-promo-card.component';
import CampaignSummary from './components/campaign-summary-card/campaign-summary-card.component';
import ProjectDetail from './components/project-detail/project-detail.component';

const StyledMain = styled.main`

    display: flex;
    flex-direction: column;
    background-color: lightgrey;
    

`;


function App() {
  return (
    <StyledMain >
      <CustomHeader/>  
      <ProductPromoCard />
      <CampaignSummary />
      <ProjectDetail/>
    </StyledMain>
  );
}

export default App;
