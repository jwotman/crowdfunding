
//import {addDonation} from './campaign.utils';
//import PledgeActionTypes from './pledge.types';
import CAMPAIGN_DATA from './campaign-data';

const INITIAL_STATE  = {
    
    campaign: CAMPAIGN_DATA

}

const campaignReducer = (state = INITIAL_STATE,action) => {

    switch(action.type) {
        
        default:
            return state;
            
    }

}

export default campaignReducer;