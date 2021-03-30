import {combineReducers} from 'redux';

import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import incentiveListReducer from './incentive-list/incentive-list.reducer';
import campaignReducer from './campaign/campaign.reducer';


const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['campaign, incentiveList']
}

const rootReducer = combineReducers({
    
    campaign: campaignReducer,
    incentiveList: incentiveListReducer
    
});

export default persistReducer(persistConfig, rootReducer);