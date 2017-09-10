ACCOUNTRY_APP.announcmentPage = (function ($) {
    return {
        showError: showError,
        showUpdateButton: showUpdateButton,
        hideUpdateButton: hideUpdateButton,
        cleanAnnouncements: cleanAnnouncements,
        showAnnouncements: showAnnouncements,
        hideAnnouncements: hideAnnouncements


    }
    function showError(msg) {
        $("#error").html(msg);
    }
    function showUpdateButton() {
        $("#btnUpdate").show();
    }

    function hideUpdateButton() {
        $("#btnUpdate").hide();
    }

    function cleanAnnouncements() {
        $("#announcements-container").empty();
    }

    function showAnnouncements() {
        $("#announcements-container").show();
    }

    function hideAnnouncements() {
        $("#announcements-container").hide();
    }

})($);