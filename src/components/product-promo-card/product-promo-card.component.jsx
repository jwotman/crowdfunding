import React from 'react';
import styled from 'styled-components';
import {StyledCard} from '../basic-card/basic-card.component';
import {StyledButton} from '../custom-button/custom-button.component';
import BookmarkButton from '../bookmark-button/bookmark-button';

import { toggleDonateOverlayHidden, toggleBodyScroll } from '../../redux/ui_control/ui_control.actions';
import { chooseDonationLevel } from '../../redux/campaign/campaign.actions'; 
import { connect } from 'react-redux';
import logoLocation from '../../images/logo-mastercraft.svg';


const ProductCard = styled(StyledCard)`
    margin-top: -5.2rem;
    @media screen and (min-width: 500px){
        margin-top: -7.7rem;
    }

    @media screen and (min-width: 700px){
        margin-top: -10rem;
    }
    & > img { margin: -5rem 0 1.2rem};

    

`;


const ProductLogo = styled.img.attrs(props => ({
    alt: 'mastercraft logo', src: logoLocation 
  }))`
    width: 5.6rem;
    height: 5.6rem;
    border-radius: 50%;
    background-image: url('${logoLocation}');
    align-self: center;

`;

const ProductTitle = styled.h1`

        font-weight: bold;
        font-size: 2rem;
        margin: 1.2rem 0 .8rem 0; 
        text-align: center;
`;

const ProductDescription = styled.p`
    text-align: center;
    margin: .8rem 2.8rem 2.7rem 2.8rem;
    line-height: 2.5rem;

`;

const ProductCardDonateButton = styled(StyledButton)`
    width: 21.4rem;
    height: 5.6rem;
`;

const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    & > * + *{margin-left: .9rem};
    padding: 0 0 4rem 0;
    

`;

const ProductPromoCard=({toggleDonateOverlayHidden,toggleBodyScroll,chooseLevel})=> (

    <ProductCard>
        <ProductLogo/>
        <ProductTitle>Mastercraft Bamboo <br/>Monitor Riser</ProductTitle>
        <ProductDescription>A beautifully handcrafted monitor stand to reduce neck and eye strain.</ProductDescription>
        <ButtonContainer>
            <ProductCardDonateButton onClick={() => { toggleDonateOverlayHidden();toggleBodyScroll();chooseLevel(0)}}>
                Back this project
            </ProductCardDonateButton>
            <BookmarkButton/>
        </ButtonContainer>
     </ProductCard>

);



const mapDispatchToProps = dispatch => ({
    toggleDonateOverlayHidden: () => dispatch(toggleDonateOverlayHidden()),
    toggleBodyScroll: () => dispatch(toggleBodyScroll()),
    chooseLevel: (id) => dispatch(chooseDonationLevel(id)),
 });




export default connect(null, mapDispatchToProps)(ProductPromoCard);
