export const updateRemaining = (currentLevelID, remainingArray) => {

    if(currentLevelID === 2 || currentLevelID === 3){

        const newRemainingArray = {...remainingArray};
        newRemainingArray[currentLevelID + ''] = newRemainingArray[currentLevelID + ''] -1;
        return newRemainingArray;

    }

    return remainingArray;



}