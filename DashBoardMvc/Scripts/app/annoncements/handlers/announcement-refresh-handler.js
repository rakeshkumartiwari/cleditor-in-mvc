ACCOUNTRY_APP.announcementRefreshHandler = (function (
    user,
    announcmentPage,
    announcementSession,
    annoncementApi,
    annoncementEditor,
    announcementEditHandler,
    announcementDeleteHandler

) {

    return {
        refeshAnnouncements: refeshAnnouncements
    }


    // refeshAnnouncements starts
    function refeshAnnouncements() {

        announcmentPage.cleanAnnouncements();
        announcementSession.resetCurrentId();
        annoncementApi.getAllAnnoncements()
            .done(onRefreshAnnouncementsSuccess)
            .fail(onRefeshAnnouncementsFail);


    }

    function onRefreshAnnouncementsSuccess(data) {
        buildAnnouncements(data);
        annoncementEditor.hideEditor();
    }

    function buildAnnouncements(data) {
        $.each(data, function (i, v) {
            var div1 = $("<div/>");

            var btnEdit = getEditButton(v.Id);
            var btnDelete = getDeleteButton(v.Id)
            div1.html(v.Title + "<br/>" + v.Description);
            div1.attr("class", "alert alert-warning");

            if (btnEdit != null) {
                div1.append(btnEdit);
            }
            if (btnDelete != null) {
                div1.append(btnDelete);
            }
            $("#announcements-container").append(div1);
        });
    }

    function getEditButton(id) {
        if (!user.isAdmin()) {
            return null;
        }
        var btnEdit = $("<input/>",
            {
                type: 'button',
                value: 'Edit',
                id: id,
                on: {
                    click: function () {
                        announcementEditHandler.onEdit(id);
                    }
                },

            });

        return btnEdit;
    }

    function getDeleteButton(id) {
        if (!user.isAdmin()) {
            return null;
        }
        var btnDelete = $("<input/>",
            {
                type: 'button',
                value: 'Delete',
                id: id,
                on: {
                    click: function () {
                        announcementDeleteHandler.onDelete(id)
                    }
                },

            });

        return btnDelete;
    }
    function onRefeshAnnouncementsFail(obj) {
        announcmentPage.showError("Announcement load fail");
    }

})(
    ACCOUNTRY_APP.user,
    ACCOUNTRY_APP.announcmentPage,
    ACCOUNTRY_APP.announcementSession,
    ACCOUNTRY_APP.annoncementApi,
    ACCOUNTRY_APP.annoncementEditor,
    ACCOUNTRY_APP.announcementEditHandler,
    ACCOUNTRY_APP.announcementDeleteHandler

    );