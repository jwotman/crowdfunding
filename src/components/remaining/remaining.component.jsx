import React from 'react';
import styled from 'styled-components';

const RemainingWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    margin: 1.2rem 0 1.2rem 0; 
    flex: 0 0 200px;
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

const Remaining = ({remainingAmount}) => (

    <RemainingWrapper>
        <RemainingAmount>{remainingAmount}</RemainingAmount>
        <RemainingText>left</RemainingText>
    </RemainingWrapper>

);


export default Remaining;