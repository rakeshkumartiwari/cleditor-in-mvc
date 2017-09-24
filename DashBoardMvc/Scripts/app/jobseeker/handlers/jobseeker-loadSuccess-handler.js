ACCOUNTRY_APP.jobseeker.loadSuccessHandler = (function (
    amplify,
    store,
    events

) {

    return {
        listen: listen
    }


    function listen() {
        amplify.subscribe(events.LoadSuccess, onLoadSuccess);
    }

    function onLoadSuccess(data) {
        store.updateStore(data);
    }


})(
    amplify,
    ACCOUNTRY_APP.jobseeker.store,
    ACCOUNTRY_APP.jobseeker.events

    );