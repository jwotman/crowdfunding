import UIControlActionTypes from './ui_control.types';

const INITIAL_STATE  = {
    
    donateOverlayHidden: true,
    acknowledgementOverlayHidden: true,
    bodyScroll: true

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

        case UIControlActionTypes.NO_BODY_SCROLL: 
        
            return {
                ...state,
                bodyScroll: !state.bodyScroll
            }
            
        default:
            
            return state;
            
    }

}

export default uiControlReducer;