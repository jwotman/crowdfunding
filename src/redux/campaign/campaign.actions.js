import CampaignActionTypes from './campaign.types';


export const addDonation = item => ({
    type: CampaignActionTypes.ADD_DONATION,
    payload: item

});

export const chooseDonationLevel = item => ({
    type: CampaignActionTypes.CHOOSE_DONATION_LEVEL,
    payload: item
})

export const toggleDonateOverlayHidden = () => ({
    type: CampaignActionTypes.TOGGLE_DONATE_OVERLAY_HIDDEN
})