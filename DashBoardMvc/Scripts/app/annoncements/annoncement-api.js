ACCOUNTRY_APP.annoncementApi = (function ($) {
   
    //repository
    return {
        getAnnoncementById: getAnnoncementById,
        getAllAnnoncements: getAllAnnoncements,
        updateAnnouncement: updateAnnouncement,
        deleteAnnouncement: deleteAnnouncement
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

    function deleteAnnouncement(id) {
        return $.post("Dashboard/DeleteAnnouncement", {Id:id});
    }
})($);