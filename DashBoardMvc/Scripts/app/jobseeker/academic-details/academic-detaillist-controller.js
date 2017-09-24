ACCOUNTRY_APP.jobseeker.academicDetailListController = (function (
    amplify,
    $,
    events,
    selector
) {


    return {
        listen: listen
    }

    function init() {
        //bindEvents(),onsave button click publish academicDetailSave;

        //i will create new handler this handler academicDetailSave subscribe,saveHandler
        //api.saveAcademicDetails(store.getAcademicDetails).done(academicSaveSuccess);
        //

    }



    function listen() {
        amplify.subscribe(events.academicDetails.AddNewDegreeSuccess, addNewDegreeSuccessHandler);
        amplify.subscribe(events.StoreUpdated, storeUpdatedHandler);
    }

    function addNewDegreeSuccessHandler($html) {
        $("#academic-detail-list").append($html);
    }

    function storeUpdatedHandler(data) {
        if (selector.isAcademicDetailsExist()) {
            amplify.publish(events.academicDetails.AddNewDegree)
        }

    }

})(
    amplify,
    $,
    ACCOUNTRY_APP.jobseeker.events,
    ACCOUNTRY_APP.jobseeker.selector
);