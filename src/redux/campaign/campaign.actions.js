import CampaignActionTypes from './campaign.types';



export const addDonation = item => ({
    type: CampaignActionTypes.ADD_PLEDGE,
    payload: item

});