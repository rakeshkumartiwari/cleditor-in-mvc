ACCOUNTRY_APP.jobseeker.academicDetailChangedHandler = (function (
    amplify,
    store,
    events
) {

    return {
        listen: listen
    }

    function listen() {
        amplify.subscribe(events.academicDetails.AcademicDetailChanged, onAcademicDetailChanged);
    }

    function onAcademicDetailChanged(academicDetail) {
        store.saveAcademicDetail(academicDetail);
    }
})(
    amplify,
    ACCOUNTRY_APP.jobseeker.store,
    ACCOUNTRY_APP.jobseeker.events

    );