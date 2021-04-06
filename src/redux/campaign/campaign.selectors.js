import {createSelector} from 'reselect';

const selectCampaign = state => state.campaign;

export const selectCurrentDonationLevel = createSelector(
    [selectCampaign],
    (campaign) => campaign.currentDonationLevel
)

export const selectCampaignSummaryData = createSelector(
    [selectCampaign],
    (campaign) => campaign
)

