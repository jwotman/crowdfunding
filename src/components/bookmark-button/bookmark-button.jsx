import React from 'react';
import styled from 'styled-components';
import {StyledButton} from '../custom-button/custom-button.component';

import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import { bookmarkURL } from '../../redux/ui_control/ui_control.actions';
import { selectProjectBookmarked } from '../../redux/ui_control/ui_control.selectors';

const BookmarkIcon = styled.div`

background-image: ${props => props.projectBookmarked ?  'url("/icon-bookmark-active.svg")' : 'url("/icon-bookmark.svg")'};
    background-repeat:no-repeat;
    background-size: cover;
    border: none;
    border-radius: 50%;
    height: 5.6rem;
    width: 5.6rem;
    transform: translateY(.4rem);
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

const DesktopButton = styled(StyledButton)`
    display: none;
    width: 17.4rem;
    background-color: #B1B1;
    color: ${props => props.projectBookmarked ? '#147A73' : '#7A7A7A'};
    padding-left: 5rem;
    @media (min-width: 525px) {
        display: initial;
        margin-left: -5rem;
        margin-right: 1rem;
    }
    
    
`

const BookmarkButton=({children, projectBookmarked,bookmarkProject})=> (
    <ButtonContainer onClick={bookmarkProject}>
        <BookmarkIcon projectBookmarked={projectBookmarked} />
        <DesktopButton projectBookmarked={projectBookmarked} >{projectBookmarked ? 'Bookmarked' : 'Bookmark'}</DesktopButton>
    </ButtonContainer>
);

const mapStateToProps = createStructuredSelector ({
    projectBookmarked: selectProjectBookmarked
});

const mapDispatchToProps = dispatch => ({
    bookmarkProject: () => dispatch(bookmarkURL()),
 });

export default connect(mapStateToProps, mapDispatchToProps)(BookmarkButton);