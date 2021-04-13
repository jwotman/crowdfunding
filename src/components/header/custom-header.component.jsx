import React from 'react';
import styled from 'styled-components';
import NavIcon from './nav-icon';
import {ReactComponent as Logo} from '../../images/logo.svg';



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

const PartialOverlay = styled.div`
  position: fixed; /* Sit on top of the page content */
  display: ${props => props.overlayHidden ? 'none' : 'flex'}; /* Hidden by default */
  width: 100%; /* Full width (cover the whole page) */
  height: 100%; /* Full height (cover the whole page) */
  top: 27rem;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0,0,0,0.5); /* Black background with opacity */
  z-index: 2; /* Specify a stack order in case you're using a different order for other elements */
  cursor: pointer; /* Add a pointer on hover */
  overflow-y: scroll;
  flex-direction: column;  
`;

const TopHeaderElementContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 3.2rem 2.4rem 0 2.4rem;
    height: 2rem;
    background-color: rgba(255,255,255,0.0);
`;


const NavList = styled.ul`
    position: relative;
    background-color: white;
    display: ${props => props.menuOpen ? 'flex' : 'none'};
    flex-direction: column;
    margin: 8.8rem 2.4rem 0 2.4rem;
`;

const NavItem = styled.li`
   display: flex;
   justify-content: flex-start;
   align-items: center;
   border: .1rem solid  lightgray ;
   color: black;
   font-size: 1.8rem;
   padding: 1.2rem 0 1.2rem 2.4rem ;

`;


class CustomHeader extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            menuOpen: false
        };
        this.toggleMenuOpen = this.toggleMenuOpen.bind(this);
    }

    toggleMenuOpen(){
            
        this.setState({menuOpen: !this.state.menuOpen});
        
    }
    
    render(){
        return <StyledHeader>
                   
                    <TopHeaderElementContainer>
                        <Logo/>
                        <NavIcon menuOpen={this.state.menuOpen} handleClick={this.toggleMenuOpen}/>
                    </TopHeaderElementContainer> 
                    
                        <NavList menuOpen={this.state.menuOpen}>
                            <NavItem>About</NavItem>
                            <NavItem>Discover</NavItem>
                            <NavItem>Get Started</NavItem>
                        </NavList>
                        <PartialOverlay overlayHidden={!this.state.menuOpen} />
                    
                </StyledHeader>
    }    
};

export default CustomHeader;