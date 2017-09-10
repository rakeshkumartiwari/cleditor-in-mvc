/**
 *creating object in javascript/instance

var holidaysController = (function () {
    return {
        init: init;
    }

})();

 */

/**
  Class Responsibility Card(CRC)
1.It handles the usecase
2. It depends on annoncemeneditor,annoncementApi.
    */
//aspx.cs
var annoncementController = (function () {
    var currentId;
    return {
        init: init
    }
    //pageLoad
    function init() {
        refeshAnnouncements();
        bindEventHandlers();

    }

    // refeshAnnouncements starts
    function refeshAnnouncements() {
        
        cleanAnnouncements();
        resetCurrentId();
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
            div1.html(v.Title + "<br/>" + v.Description);
            div1.attr("class", "alert alert-warning");

            if (btnEdit != null) {
                div1.append(btnEdit);
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
                        onEdit(id);
                    }
                },

            });

        return btnEdit;
    }
    function onRefeshAnnouncementsFail(obj) {
        showError("Announcement load fail");
    }
    // refeshAnnouncements End

    // binding button click handlers
    function bindEventHandlers() {
        $("#btnUpdate").on("click", onUpdate);
        //by this time page is rendered so i can modifie the dom .

        if (user.isAdmin()) {

        }

        //todo 
    }

    // onEdit starts
    //It is editbtn click hanler
    function onEdit(id) {
        hideAnnouncements();
        annoncementEditor.showEditor();
        setCurrentId(id)
        annoncementApi.getAnnoncementById(id)
            .done(onEditSuccess)
            .fail(onEditFail);
    }

    function onEditSuccess(data) {

        annoncementEditor.refresh(data.Title, data.Description);
        showUpdateButton();
    }

    //this function will be called with jquery ajax error=obj;
    function onEditFail(obj) {
        showError("Edit failed.");
    }
    // onEdit starts

    // onUpdate starts
    function onUpdate() {
        try {
            var announcement = new AnnouncementDto(getCurrentId(), annoncementEditor.getTitle(), annoncementEditor.getText());

            annoncementApi.updateAnnouncement(announcement)
                .done(onUpdateSuccess)
                .fail(onUpdateFail);

        } catch (e) {
            showError(e.message);
        }
    }

    function onUpdateSuccess() {
        annoncementEditor.hideEditor();
        showAnnouncements();
        refeshAnnouncements();
        hideUpdateButton();
    }

    function onUpdateFail(obj) {
        showError("Update failed.");
    }
    // onUpdate starts

    //any jquery related should go in its own function like "showUpdateButton".
    //All jquery related function can go is in own class called as announcement-page.js.
    function showUpdateButton() {
        $("#btnUpdate").show();
    }

    function hideUpdateButton() {
        $("#btnUpdate").hide();
    }

    function showError(msg) {
        $("#error").html(msg);
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

    function setCurrentId(id) {
        currentId = id;
    }

    function getCurrentId() {
        return currentId;
    }

    function resetCurrentId() {
        return currentId = -1;
    }


})();


