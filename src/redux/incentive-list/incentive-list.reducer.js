
//import {addDonation} from './campaign.utils';
//import PledgeActionTypes from './pledge.types';
//import IncentiveListActionTypes from './incentive-list.types';
import INCENTIVE_LIST_DATA from './incentive-list.data';

const INITIAL_STATE  = {
    
    incentives: INCENTIVE_LIST_DATA

}

const incentiveListReducer = (state = INITIAL_STATE,action) => {

    switch(action.type) {
        
        default:
            return state;
            
    }

}

export default incentiveListReducer;