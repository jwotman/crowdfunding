import React from 'react';
import styled from 'styled-components';
import {ReactComponent as IconHamburger} from '../../images/icon-hamburger.svg';
import {ReactComponent as IconCloseModal} from '../../images/icon-close-modal-white.svg';



const Icon = styled.div`

    display: flex;
    background-color: rgba(255,255,255,0.0);
    @media screen and (min-width: 700px) {
        display: none;
    }


`;

const IconHamburgerWrapper = styled.div`

display: ${props => props.menuOpen ? 'none' : 'block'};
background-color: rgba(255,255,255,0.0);
`;

const IconCloseModalWrapper = styled.div`
display: ${props => props.menuOpen ? 'block' : 'none'};
background-color: rgba(255,255,255,0.0);
`;





const CustomNav = ({handleClick, menuOpen}) => (
        <Icon>
            <IconHamburgerWrapper menuOpen={menuOpen} onClick={handleClick}><IconHamburger  /> </IconHamburgerWrapper>
            <IconCloseModalWrapper menuOpen={menuOpen} onClick={handleClick}><IconCloseModal  /> </IconCloseModalWrapper>
        </Icon>
);


export default CustomNav;