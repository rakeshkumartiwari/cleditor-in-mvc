
/*
* this class has responsibility to update CL EDITOR
editor.js*/

//clEditor class
var annoncementEditor = (function () {
    var $editor;
    var editor;
    var $title;

    return {
        init: init,
        setText: setText,
        getText: getText,
        setTitle: setTitle,
        getTitle: getTitle,
        refresh: refresh,
    };

    function init(editorId, titleId) {
        $editor = $("#" + editorId).cleditor();
        editor = $editor[0];
        $title = $('#' + titleId);
        editor.focus();
    }

    function setTitle(text) {
        $title.val(text);
    }

    function getTitle() {
        return $title.val();
    }

    function setText(textToDisplay) {
        editor.$area.val(textToDisplay);
        editor.updateFrame();
    }

    function getText() {
        return editor.$area.val();
    }

   

    //it will refresh the cleditor with title and description.
    function refresh(title,description) {
        setText(description);
        setTitle(title);
    }

})();
