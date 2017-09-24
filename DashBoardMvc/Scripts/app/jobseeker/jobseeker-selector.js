ACCOUNTRY_APP.jobseeker.selector = (function (store) {

    return {
        isAcademicDetailsExist: isAcademicDetailsExist
    }


    function isAcademicDetailsExist() {
        return (store.getState().academicDetails.length < 1);
    }


})(ACCOUNTRY_APP.jobseeker.store);