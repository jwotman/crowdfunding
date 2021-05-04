import CampaignActionTypes from './campaign.types';
import {updateRemaining} from './campaign.utils';

const INITIAL_STATE  = {
    
    currentDonationLevel: 0,
    totalBackers: 5007,
    daysLeft: 56,
    campaignGoal: 100000,
    totalRaised: 89914,
    donateOverlayHidden: true,
    acknowledgementOverlayHidden: true, 
    remaining: {"1": -1, "2": 101, "3": 64, "4": 0}
}

const campaignReducer = (state = INITIAL_STATE,action) => {

    switch(action.type) {
        case CampaignActionTypes.CHOOSE_DONATION_LEVEL:
            return {
                ...state,
                currentDonationLevel: action.payload
            }

        case CampaignActionTypes.ADD_DONATION:
            return {
                ...state,
                totalRaised: state.totalRaised + action.payload,
                totalBackers: state.totalBackers + 1,
                remaining: updateRemaining(state.currentDonationLevel,state.remaining),
                currentDonationLevel: 0
            }
            
        default:
            return state;
            
    }

}

export default campaignReducer;