import {combineReducers} from 'redux';

import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import incentiveListReducer from './incentive-list/incentive-list.reducer';
import campaignReducer from './campaign/campaign.reducer';
import uiControlReducer from './ui_control/ui_control.reducer';


const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['campaign, incentiveList,ui_control']
}

const rootReducer = combineReducers({
    
    campaign: campaignReducer,
    incentiveList: incentiveListReducer,
    ui_control: uiControlReducer
    
});

export default persistReducer(persistConfig, rootReducer);