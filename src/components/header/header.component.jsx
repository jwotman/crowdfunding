import React from 'react';
import styled from 'styled-components';
import CustomNav from './nav.component';



const StyledHeader = styled.header`
    height: 30rem;
    width: 100%;
    background-image: url('/image-hero-mobile.jpg');
    background-repeat:no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

`;

const HeaderElementContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 3.2rem 2.4rem 0 2.4rem;
    height: 2rem;
`;

const CompanyLogo = styled.div`
    background-image: url('/logo.svg');
    width: 12.8rem;
`;

const CustomHeader=()=> (
    <StyledHeader>
        <HeaderElementContainer>
            <CompanyLogo/>
            <CustomNav/>
        </HeaderElementContainer> 
    </StyledHeader>
    
  );

  export default CustomHeader;