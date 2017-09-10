
/*
* this is main class which does initial bootstrapping. 
*editor-main.js*/
$(function () {
    if (isAdmin) {
        user.setAsAdmin();
    }
    annoncementEditor.init('txtDescription', 'txtTitle');
    annoncementController.init();
   
});