import React from 'react';
import styled from 'styled-components';

const RemainingWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    margin: 0 0 1.2rem 0; 
    flex: 0 0 200px;
    
    &.hidden {
        display: none;
    }

    &.remaining-desktop {
            display: none;
    }

    @media screen and (min-width: 700px) {
        &.remaining-mobile{
            display: none;
        }
        &.remaining-desktop{
            display: flex;
        }
   }

    //if my sibling is header stuff, show at 550, if my sibling is 
`;

const RemainingAmount = styled.span`
    font-size: 3.2rem;
    font-weight: bold;
    color: black;


`;

const RemainingText = styled.span`
    font-size: 1.5rem;
    vertical-align: middle;
    padding-left: .8rem;

`;

const getRemainingClassName = (isSelectable, isMobileSpecific, currentLevelID) => {
    let className = '';
    if(isSelectable){
        className = isMobileSpecific ? 'remaining-mobile' : 'remaining-desktop';         
    }
    
    return className;
}

const Remaining = ({remainingAmount,isSelectable, isMobileSpecific, incentiveID}) => (

    <RemainingWrapper className={getRemainingClassName(isSelectable,isMobileSpecific)} >
        <RemainingAmount>{remainingAmount}</RemainingAmount>
        <RemainingText>left</RemainingText>
    </RemainingWrapper>

);


export default Remaining;