import UIControlActionTypes from './ui_control.types';

const INITIAL_STATE  = {
    
    donateOverlayHidden: true,
    acknowledgementOverlayHidden: true,
    bodyScroll: true,
    projectBookmarked: false

}

const uiControlReducer = (state = INITIAL_STATE,action) => {

    switch(action.type) {
        
        case UIControlActionTypes.TOGGLE_DONATE_OVERLAY_HIDDEN : 
            
            return {
                ...state,
                donateOverlayHidden: !state.donateOverlayHidden
            }

        case UIControlActionTypes.TOGGLE_ACKNOWLEDGEMENT_OVERLAY_HIDDEN: 
            
            return {
                ...state,
                acknowledgementOverlayHidden: !state.acknowledgementOverlayHidden
            }

        case UIControlActionTypes.TOGGLE_BODY_SCROLL: 
        
            return {
                ...state,
                bodyScroll: !state.bodyScroll
            }

        case UIControlActionTypes.BOOKMARK_PROJECT: 
        
            return {
                ...state,
                projectBookmarked: !state.projectBookmarked
            }
            
        default:
            
            return state;
            
    }

}

export default uiControlReducer;