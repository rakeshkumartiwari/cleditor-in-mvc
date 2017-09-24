ACCOUNTRY_APP.jobseeker.loadHandler = (function (
    amplify,
    $,
    events,
    store
) {


    return {
        listen: listen
    }


    function listen() {
        amplify.subscribe(events.Load,loadHandler );
    }

    function loadHandler() {
       //api.getJobseekerDetails().done(loadSuccess).fail(loadFail);
        loadSuccess();
    }
//only reducer can update the state.
//it is an effect so it can fire an event and reducer can subscribe to that event and update the state.
    function loadSuccess(data) {
        store.updateStore(data);
    }



})(
    amplify,
    $,
    ACCOUNTRY_APP.jobseeker.events,
    ACCOUNTRY_APP.jobseeker.store 
    );