ACCOUNTRY_APP.announcementDeleteHandler = (function (
    annoncementApi,
    announcmentPage,
    annoncementEditor,
    announcementRefreshHandler,
    announcementSession
) {
    
    return {
        onDelete: onDelete
    }

    function onDelete(id) {
        try {
            //announcementSession.setCurrentId(id)
            annoncementApi.deleteAnnouncement(id)
                .done(onDeleteSuccess)
                .fail(onDeleteFail);

        } catch (e) {
            announcmentPage.showError(e.message)
        }
    }
    function onDeleteSuccess() {
        annoncementEditor.hideEditor();
        announcmentPage.showAnnouncements();//todo spelling
        announcementRefreshHandler.refeshAnnouncements();//todo spelling
        
    }

    function onDeleteFail(obj) {
        announcmentPage.showError("Delete failed.");
    }

})(
    ACCOUNTRY_APP.annoncementApi,
    ACCOUNTRY_APP.announcmentPage,
    ACCOUNTRY_APP.annoncementEditor,
    ACCOUNTRY_APP.announcementRefreshHandler,
    ACCOUNTRY_APP.announcementSession
    );