import React from 'react';
import styled from 'styled-components';
import {StyledButton} from '../custom-button/custom-button.component';

import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import { bookmarkURL } from '../../redux/ui_control/ui_control.actions';
import { selectProjectBookmarked } from '../../redux/ui_control/ui_control.selectors';
import bookmarkImage from '../../images/icon-bookmark.svg';
import bookmarkActiveImage from '../../images/icon-bookmark-active.svg'
import bookmarkHoverImage from '../../images/icon-bookmark-hover.svg';

const BookmarkIcon = styled.button.attrs(props => ({
    role: "image", "aria-label": "Bookmark", className: "bookmark-icon"
}))`

    background-image: ${props => props.projectBookmarked ?  'url("' + bookmarkActiveImage + '")' : 'url("' + bookmarkImage + '")'};
    background-repeat:no-repeat;
    background-size: cover;
    border: none;
    border-radius: 50%;
    height: 5.6rem;
    width: 5.6rem;
    z-index: 1;
    //right: -3rem;
    

    //transform: translateY(2rem);
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
    :hover > ${BookmarkIcon}{
        background-image: url("${bookmarkHoverImage}");
    }
`;

const DesktopButton = styled(StyledButton)`
    display: none;
    width: 17.4rem;
    background-color: #f2f2f2;
    
    color: ${props => props.projectBookmarked ? '#147A73' : '#7A7A7A'};
    padding-left: 5rem;
    
    @media (min-width: 525px) {
        display: block;
        margin-left: -5rem;
        overflow: hidden;
        margin-right: 1rem;
        :hover {
            background-color: #f2f2f2;
        }
        
    }   
`

const BookmarkButton=({children, projectBookmarked,bookmarkProject})=> (
    <ButtonContainer onClick={bookmarkProject}>
        <BookmarkIcon projectBookmarked={projectBookmarked} />
        <DesktopButton onClick={bookmarkProject} projectBookmarked={projectBookmarked} >{projectBookmarked ? 'Bookmarked' : 'Bookmark'}</DesktopButton>
    </ButtonContainer>
);

const mapStateToProps = createStructuredSelector ({
    projectBookmarked: selectProjectBookmarked
});

const mapDispatchToProps = dispatch => ({
    bookmarkProject: () => dispatch(bookmarkURL()),
 });

export default connect(mapStateToProps, mapDispatchToProps)(BookmarkButton);