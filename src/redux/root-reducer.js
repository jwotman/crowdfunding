import {combineReducers} from 'redux';

import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import campaignReducer from './campaign/campaign.reducer';


const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['campaign']
}

const rootReducer = combineReducers({
    
    campaign: campaignReducer
    
});

export default persistReducer(persistConfig, rootReducer);