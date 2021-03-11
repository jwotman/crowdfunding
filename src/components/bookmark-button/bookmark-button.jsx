import React from 'react';
import styled from 'styled-components';
import {StyledButton} from '../custom-button/custom-button.component';

const BookmarkIcon = styled.button`

    background-image: url("/icon-bookmark.svg");
    border-radius: 50%;
    height: 5.6rem;
    width: 5.6rem;
    

`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

const DesktopButton = styled(StyledButton)`
    display: none;
    background-color: hsl(0, 0%, 48%);
    @media (min-width: 600px) {
    display: initial;
    margin-left: -5rem;
    margin-right: 1rem;
    }
    
    
`

const BookmarkButton=({children})=> (
    <ButtonContainer><BookmarkIcon/><DesktopButton /></ButtonContainer>
);

export default BookmarkButton;