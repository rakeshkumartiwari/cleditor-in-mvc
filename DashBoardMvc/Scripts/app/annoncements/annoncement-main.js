
/*
* this is main class which does initial bootstrapping. 
*editor-main.js*/
$(function () {

    user.setAsUser();
    annoncementEditor.init('txtDescription', 'txtTitle');
    annoncementBuilder.init();
   
});