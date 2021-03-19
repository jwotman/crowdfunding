import {createSelector} from 'reselect';

//input selector
const selectCampaign = state => state.campaign;

export const selectCampaignIncentives = createSelector(
    [selectCampaign],
    campaign => campaign.campaign.campaignIncentives
  );
