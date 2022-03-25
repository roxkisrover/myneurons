export const omScore = (state, action) => {
    switch (action.type) {
        case 'SET_OM_SCORE':
            return action;

        default:
            return state || [];
    }
};

export const isOmTestComplete = (state, action) => {
    switch (action.type) {
        case 'SET_OM_TEST_COMPLETE':
            return action.isComplete;

        default:
            return state || false;
    }
};
