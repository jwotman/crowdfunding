import {createSelector} from 'reselect';

//input selector
//const selectCampaign = state => state.campaign;

const selectIncentives = state => state.incentiveList.incentives;

export const selectIncentiveList = createSelector(
    [selectIncentives],
    incentives => incentives.list
  );
    

