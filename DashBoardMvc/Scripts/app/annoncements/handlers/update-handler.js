var announcementUpdateHandler = (function () {
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
        announcmentPage.showAnnouncements();
        announcementRefreshHandler.refeshAnnouncements();
        announcmentPage.hideUpdateButton();
    }

    function onUpdateFail(obj) {
        announcmentPage.showError("Update failed.");
    }
    // onUpdate starts
})();