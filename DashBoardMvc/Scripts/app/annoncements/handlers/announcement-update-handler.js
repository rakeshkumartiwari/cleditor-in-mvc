ACCOUNTRY_APP.announcementUpdateHandler = (function (
    annoncementApi,
    announcmentPage,
    annoncementEditor,
    announcementRefreshHandler,
    announcementSession
) {
    return {
        onUpdate: onUpdate
    }

    // onUpdate starts
    function onUpdate() {
        try {
            var announcement = new AnnouncementDto(announcementSession.getCurrentId(), annoncementEditor.getTitle(), annoncementEditor.getText());

            annoncementApi.updateAnnouncement(announcement)
                .done(onUpdateSuccess)
                .fail(onUpdateFail);

        } catch (e) {
            announcmentPage.showError(e.message);
        }
    }

    function onUpdateSuccess() {
        annoncementEditor.hideEditor();
        announcmentPage.showAnnouncements();//todo spelling
        announcementRefreshHandler.refeshAnnouncements();//todo spelling
        announcmentPage.hideUpdateButton();

    }

    function onUpdateFail(obj) {
        announcmentPage.showError("Update failed.");
    }
    // onUpdate starts
})(
    ACCOUNTRY_APP.annoncementApi,
    ACCOUNTRY_APP.announcmentPage,
    ACCOUNTRY_APP.annoncementEditor,
    ACCOUNTRY_APP.announcementRefreshHandler,
    ACCOUNTRY_APP.announcementSession
    );