import React from 'react';
import styled from 'styled-components';

const RemainingWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
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

const RemainingAmount = styled.p`
    font-size: 3.2rem;
    &.remaining-desktop {
            font-size: inherit;
    }
    font-weight: 700;
    color: black;


`;

const RemainingText = styled.p`
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
        <RemainingAmount className={getRemainingClassName(isSelectable,isMobileSpecific)}>{remainingAmount}</RemainingAmount>
        <RemainingText>left</RemainingText>
    </RemainingWrapper>

);


export default Remaining;