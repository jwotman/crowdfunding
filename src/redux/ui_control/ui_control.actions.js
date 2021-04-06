import UIControlActionTypes from './ui_control.types';

export const toggleDonateOverlayHidden = () => ({
    type: UIControlActionTypes.TOGGLE_DONATE_OVERLAY_HIDDEN
})

export const toggleAcknowledgementOverlayHidden = () => ({
    type: UIControlActionTypes.TOGGLE_ACKNOWLEDGEMENT_OVERLAY_HIDDEN
})

export const toggleBodyScroll = () => ({
    type: UIControlActionTypes.TOGGLE_BODY_SCROLL
})