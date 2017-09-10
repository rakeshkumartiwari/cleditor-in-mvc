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
ACCOUNTRY_APP.annoncementController = (function (announcementRefreshHandler, announcementUpdateHandler) {

    return {
        init: init
    }
    //pageLoad
    function init() {
        announcementRefreshHandler.refeshAnnouncements();
        bindEventHandlers();

    }

    // binding button click handlers
    function bindEventHandlers() {
        $("#btnUpdate").on("click", announcementUpdateHandler.onUpdate);
        //by this time page is rendered so i can modifie the dom .

        //todo 
    }

})(ACCOUNTRY_APP.announcementRefreshHandler, ACCOUNTRY_APP.announcementUpdateHandler);


