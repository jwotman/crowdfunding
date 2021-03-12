import React from 'react';
import styled from 'styled-components';


const StyledNav = styled.div`

    display: flex;



`;

const NavIcon = styled.div`

    background-image: url('/icon-hamburger.svg');
    width: 1.6rem;
    height: 1.5rem;


`;


const CustomNav = ()=> (
    <StyledNav>
        <NavIcon/> 
    </StyledNav>
    
);


export default CustomNav;