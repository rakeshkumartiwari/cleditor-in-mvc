ACCOUNTRY_APP.jobseeker.store = (function (amplify, events) {
    var state = {};
    var initialState = {
        academicDetails: {
            allDegrees: [{
                id: 1,
                text: "SSC"
            },
            {
                id: 2,
                text: "HSC"
            },
            {
                id: 3,
                text: "PG"
            }


            ],
            selectedDegrees: []
        }
    }
    state = initialState;
    return {
        getState: getState,
        saveDegree: saveDegree,
        listen: listen,
        updateStore: updateStore
    }

    function getState() {
        return state;
    }
    function saveDegree(degree) {
        state.academicDetails.selectedDegrees.push(degree);
    }
    function listen() {
        //amplify.subscribe
    }

    function updateStore(data) {
        state = data || initialState;
        amplify.publish(events.StoreUpdated, state);
    }

})(amplify, ACCOUNTRY_APP.jobseeker.events);