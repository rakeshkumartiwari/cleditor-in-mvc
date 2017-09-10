ACCOUNTRY_APP.announcementEditHandler = (function (annoncementEditor, announcmentPage, annoncementApi, announcementSession) {
   
    return {
        onEdit: onEdit
    }
    // onEdit starts
    //It is editbtn click hanler
    function onEdit(id) {
        announcmentPage.hideAnnouncements();
        annoncementEditor.showEditor();
        announcementSession.setCurrentId(id)
        annoncementApi.getAnnoncementById(id)
            .done(onEditSuccess)
            .fail(onEditFail);
    }

    function onEditSuccess(data) {

        annoncementEditor.refresh(data.Title, data.Description);
        announcmentPage.showUpdateButton();
    }

    //this function will be called with jquery ajax error=obj;
    function onEditFail(obj) {
        announcmentPage.showError("Edit failed.");
    }
    // onEdit starts


})(ACCOUNTRY_APP.annoncementEditor, ACCOUNTRY_APP.announcmentPage, ACCOUNTRY_APP.annoncementApi, ACCOUNTRY_APP.announcementSession);