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

export const selectTotalRaised = createSelector(

    [selectCampaign],
    (campaign) => campaign.totalRaised

)

export const selectCampaignGoal = createSelector(

    [selectCampaign],
    (campaign) => campaign.campaignGoal

)

export const selectRemainingArray = createSelector(
    [selectCampaign],
    (campaign) => campaign.remaining
)

