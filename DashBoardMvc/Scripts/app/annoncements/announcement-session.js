var announcementSession = (function () {
    var currentId=-1;
    return {
        setCurrentId: setCurrentId,
        getCurrentId: getCurrentId,
        resetCurrentId: resetCurrentId
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