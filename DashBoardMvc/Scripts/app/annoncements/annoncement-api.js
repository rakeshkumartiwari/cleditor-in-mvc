var annoncementApi = (function () {
    // move you ajax call here 
    // this is your homework.

   // good bye

//  hoe to get value of cleditor

    return {
        getAnnoncementById: getAnnoncementById,
        getAllAnnoncements: getAllAnnoncements
    }
    function getAnnoncementById(id) {
        return $.get("Dashboard/GetAnnouncement?id=" + id);
    }

    function getAllAnnoncements() {
        return $.get("Dashboard/GetAllAnnouncements");
    }

})();