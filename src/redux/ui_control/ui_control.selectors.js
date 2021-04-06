import {createSelector} from 'reselect';

const selectUIControl = state => state.ui_control;

console.log(selectUIControl);


export const selectDonateOverlayHidden = createSelector(
    [selectUIControl],
    (ui_control) => ui_control.donateOverlayHidden
)

export const selectAcknowledgementOverlayHidden = createSelector(
    [selectUIControl],
    (ui_control) => ui_control.acknowledgementOverlayHidden
)

export const selectBodyScroll = createSelector(
    [selectUIControl],
    (ui_control) => ui_control.bodyScroll
)