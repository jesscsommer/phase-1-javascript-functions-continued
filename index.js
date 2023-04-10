function saturdayFun(activityVerb=`roller-skate`){
    return `This Saturday, I want to ${activityVerb}!`
}

function mondayWork(workVerb=`go to the office`){
    return `This Monday, I will ${workVerb}.`
}

function wrapAdjective(effect="*"){
    const innerFunction = function(adj="special"){
        return `You are ${effect}${adj}${effect}!`
    };
    return innerFunction;
}