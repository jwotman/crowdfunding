import React from 'react';
import styled from 'styled-components';
import {StyledCard} from '../basic-card/basic-card.component';
import CustomButton from '../custom-button/custom-button.component';
import BookmarkButton from '../bookmark-button/bookmark-button';



const ProductCard = styled(StyledCard)`
    margin-top: -7.2rem;

`;


const ProductLogo = styled.div.attrs(props => ({
    className: "logo",
  }))`
    width: 5.6rem;
    height: 5.6rem;
    border-radius: 50%;
    background-image: url('/logo-mastercraft.svg');
    align-self: center;
    margin: -2.8rem 0 1.2rem 0;

`;

const ProductTitle = styled.h1`

        font-weight: 70;
        font-style: bold;
        font-size: 2rem;
        margin: 1.2rem 0 .8rem 0; 
        text-align: center;
        font-family: 'Commissioner', sans-serif;
`;

const ProductDescription = styled.span`
    text-align: center;
    margin: .8rem 2.8rem 2.7rem 2.8rem;
    font-size: 1.4rem;
    line-height: 2.5rem;

`;

const ProductCardDonateButton = styled(CustomButton)`
    width: 21.4rem;
    height: 5.6rem;
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    margin: 0 2.4rem 4rem 2.4rem;

`;

const ProductPromoCard=()=> (

    <ProductCard>
        <ProductLogo/>
        <ProductTitle>Mastercraft Bamboo <br/>Monitor Riser</ProductTitle>
        <ProductDescription>A beautifully handcrafted monitor stand to reduce neck and eye strain.</ProductDescription>
        <ButtonContainer><ProductCardDonateButton>Back this project</ProductCardDonateButton><BookmarkButton/></ButtonContainer>
     </ProductCard>



);

export default ProductPromoCard;