import {createSelector} from 'reselect';

const selectCampaign = state => state.campaign;

export const selectCurrentDonationLevel = createSelector(
    [selectCampaign],
    (campaign) => campaign.currentDonationLevel
)

export const selectDonateOverlayHidden = createSelector(
    [selectCampaign],
    (campaign) => campaign.donateOverlayHidden
)