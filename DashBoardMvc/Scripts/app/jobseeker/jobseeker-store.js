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
        $.each(state.academicDetails, function (i, v) {
            if (v.id == academicDetail.id) {
                objIndex = state.academicDetails.findIndex((obj => obj.id == academicDetail.id));
                state.academicDetails[objIndex].name = academicDetail.name;
                state.academicDetails[objIndex].degree = academicDetail.degree;
            }
            //else {
            //    state.academicDetails.push(academicDetail)
            //}
        });
        //state.academicDetails.push(academicDetail);
        //objIndex = state.academicDetails.findIndex((obj => obj.id == academicDetail.id));
        //state.academicDetails[objIndex].name = academicDetail.name;
        //state.academicDetails[objIndex].degree = academicDetail.degree;

    }
    function listen() {
        //amplify.subscribe
    }

    function updateStore(data) {
        state = data || initialState;
        amplify.publish(events.StoreUpdated, state);
    }

})(amplify, ACCOUNTRY_APP.jobseeker.events);