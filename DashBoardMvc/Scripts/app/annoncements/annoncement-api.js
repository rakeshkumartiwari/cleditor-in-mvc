ACCOUNTRY_APP.annoncementApi = (function ($) {
   
    //repository
    return {
        getAnnoncementById: getAnnoncementById,
        getAllAnnoncements: getAllAnnoncements,
        updateAnnouncement: updateAnnouncement
    }
    function getAnnoncementById(id) {
        return $.get("Dashboard/GetAnnouncement?id=" + id);
    }

    function getAllAnnoncements() {
        return $.get("Dashboard/GetAllAnnouncements");
    }

    function updateAnnouncement(announcement) {
        return $.post("Dashboard/UpdateAnnouncement", announcement);
    }
})($);