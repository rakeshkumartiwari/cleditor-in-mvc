ACCOUNTRY_APP.user = (function () {
    var role = 'user';
    return {
        setAsAdmin: setAsAdmin,
        setAsUser: setAsUser,
        isAdmin: isAdmin,
        canEdit: canEdit
    } 

    function setAsAdmin() {
        role = 'admin';
    }

    function setAsUser() {
        role = 'user';
    }

    function isAdmin() {

        return role === 'admin';
    }

    function canEdit() {
        return isAdmin();
    }

})();