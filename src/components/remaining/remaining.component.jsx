import React from 'react';
import styled from 'styled-components';

const RemainingWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    margin: 1.2rem 0 1.2rem 0; 
    flex: 0 0 200px;
    @media screen and (min-width: 600px) {
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

const getRemainingClassName = (isMobileSpecific, isSelectable) => {
    let className = '';
    if(isSelectable){
        if(isMobileSpecific){
            className = 'remaining-mobile';
        }else{
            className = 'remaining-desktop';
        }
    }
    return className;
}

const Remaining = ({remainingAmount,isSelectable, isMobileSpecific}) => (

    <RemainingWrapper className={getRemainingClassName(isSelectable,isMobileSpecific)} >
        <RemainingAmount>{remainingAmount}</RemainingAmount>
        <RemainingText>left</RemainingText>
    </RemainingWrapper>

);


export default Remaining;