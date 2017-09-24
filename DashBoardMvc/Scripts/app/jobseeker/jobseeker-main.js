

$(function () {
    ACCOUNTRY_APP.jobseeker.academicDetailController.listen();
    ACCOUNTRY_APP.jobseeker.academicDetailListController.listen();
    ACCOUNTRY_APP.jobseeker.store.listen();
    ACCOUNTRY_APP.jobseeker.loadHandler.listen();
    ACCOUNTRY_APP.jobseeker.academicDetailChangedHandler.listen();
    amplify.publish(ACCOUNTRY_APP.jobseeker.events.Load);
});

