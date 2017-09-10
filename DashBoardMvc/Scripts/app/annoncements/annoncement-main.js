
/*
* this is main class which does initial bootstrapping. 
*editor-main.js*/
$(function () {
    if (isAdmin==="true") {
        user.setAsAdmin();
    }
    annoncementEditor.init('txtDescription', 'txtTitle','cleditor-container');
    annoncementController.init();
   
});