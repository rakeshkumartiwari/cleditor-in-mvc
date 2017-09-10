/*
* this is main class which does initial bootstrapping. 
*editor-main.js*/
$(function () {

    if (isAdmin === "true") {
        ACCOUNTRY_APP.user.setAsAdmin();
    }
    ACCOUNTRY_APP.annoncementEditor.init('txtDescription', 'txtTitle','cleditor-container');
    ACCOUNTRY_APP.annoncementController.init();
   
});