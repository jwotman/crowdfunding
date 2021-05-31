import React from 'react';
import styled from 'styled-components';

const NavWrapper = styled.nav`

    background-color: rgba(255,255,255,0.0);

`;

const StyledList = styled.ul`
    position: relative;
    background-color: white;
    display: ${props => props.menuOpen && props.isMobile ? 'flex' : 'none'};
    flex-direction: column;
    margin: 8.8rem 2.4rem 0 2.4rem;
    @media screen and (min-width: 700px) {
        display: ${props => !props.isMobile ? 'flex' : 'none'};
        background-color: rgba(255,255,255,0.0);
        flex-direction: row;
        justify-content: flex-start;
        gap: 3.2rem;
        
        margin: 0  0 0 0;
        
        
        & > li {
            
            color: white;
            font-size: 1.3rem;
            font-weight: bold;
            border: none;
            display: block;
            text-align: center;
            padding: 0;
            background-color: rgba(255,255,255,0.0);

        }
    }

    
`;

const NavItem = styled.li`
   display: flex;
   justify-content: flex-start;
   align-items: center;
   border: .1rem solid  lightgray ;
   color: black;
   font-size: 1.8rem;
   @supports not (gap: 3.2rem){
       margin-right: 3.2rem;//need to exclude margin right on last one
   }
   padding: 1.2rem 0 1.2rem 2.4rem ;

`;

const NavLink = styled.a.attrs(props => ({
    href: "#"
}))`
    color: white;
    text-decoration: none;
    background-color: rgba(255,255,255,0.0);

`;

const NavList = ({isMobile, menuOpen}) => (

    <NavWrapper>
        <StyledList menuOpen={menuOpen} isMobile={isMobile}>
            <NavItem><NavLink href="#">About</NavLink></NavItem>
            <NavItem><NavLink>Discover</NavLink></NavItem>
            <NavItem><NavLink>Get Started</NavLink></NavItem>
        </StyledList>
    </NavWrapper>

);


export default NavList;