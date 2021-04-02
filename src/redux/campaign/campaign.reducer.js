import CampaignActionTypes from './campaign.types';

const INITIAL_STATE  = {
    
    currentDonationLevel: 0,
    totalBackers: 5007,
    daysLeft: 56,
    campaignGoal: 100000,
    totalRaised: 89914,
    donateOverlayHidden: true

}

const campaignReducer = (state = INITIAL_STATE,action) => {

    switch(action.type) {
        case CampaignActionTypes.CHOOSE_DONATION_LEVEL:
            return {
                ...state,
                currentDonationLevel: action.payload
            }
        case CampaignActionTypes.TOGGLE_DONATE_OVERLAY_HIDDEN : 
        console.log('in toggle Donate Overlay');
        return {
            ...state,
            donateOverlayHidden: !state.donateOverlayHidden
        }
            
        default:
            return state;
            
    }

}

export default campaignReducer;