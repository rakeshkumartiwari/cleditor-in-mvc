ACCOUNTRY_APP.jobseeker.store = (function (amplify, events) {
    var state = {};
    var initialState = {
        academicDetails: []
    };
    state = initialState;
    return {
        getState: getState,
        saveAcademicDetail: saveAcademicDetail,
        listen: listen,
        updateStore: updateStore
    }

    function getState() {
        return state;
    }
    function saveAcademicDetail(academicDetail) {
        state.academicDetails.push(academicDetail);
    }
    function listen() {
        //amplify.subscribe
    }

    function updateStore(data) {
        state = data || initialState;
        amplify.publish(events.StoreUpdated, state);
    }

})(amplify, ACCOUNTRY_APP.jobseeker.events);