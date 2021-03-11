import React from 'react';
import styled from 'styled-components';

import CustomHeader from './components/header/header.component';
import ProductPromoCard from './components/product-promo-card/product-promo-card.component';

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
    </StyledMain>
  );
}

export default App;
