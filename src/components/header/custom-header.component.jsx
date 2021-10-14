import { ReactComponent as Logo } from '../../images/logo.svg';
import background from '../../images/image-hero-mobile.jpg';
import desktopBackground from '../../images/image-hero-desktop.jpg';
import NavIcon from './nav-icon';
import NavList from './nav-list.component';
import React from 'react';
import styled from 'styled-components';



const StyledHeader = styled.header`
    height: 30rem;
    width: 100%;
    background-image: url('${background}');
    background-repeat:no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
    //justify-content: flex-start;

    @media screen and (min-width: 700px) {
        background-image: url('${desktopBackground}');
    }

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

const TopHeaderElementContainer = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 3.2rem;
    margin-left: clamp(3.2rem, 8.5vw, 16.5rem);
    margin-right: clamp(3.2rem, 8.5vw, 16.5rem);
    @supports not (margin-left: clamp(3.2rem, 8.5vw, 16.5rem)) {
        margin-left: 13%;
        margin-right: 13%;
    }

    height: 2rem;
    background-color: rgba(255,255,255,0.0);
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
                        <NavList isMobile={false} />
                    </TopHeaderElementContainer> 
                    
                        <NavList menuOpen={this.state.menuOpen} isMobile={true}/>
                        <PartialOverlay overlayHidden={!this.state.menuOpen} />
                    
                </StyledHeader>
    }    
};

export default CustomHeader;