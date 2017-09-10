
/*
* this class has responsibility to update CL EDITOR
editor.js*/

//clEditor class
var annoncementEditor = (function () {
    var $editor;
    var editor;
    var $title;
    var $container;
    return {
        init: init,
        setText: setText,
        getText: getText,
        setTitle: setTitle,
        getTitle: getTitle,
        refresh: refresh,
        showEditor: showEditor,
        hideEditor: hideEditor
    };

    function init(editorId, titleId,containerId) {
        $editor = $("#" + editorId).cleditor();
        editor = $editor[0];
        $title = $('#' + titleId);
        $container = $('#' + containerId);
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

    function showEditor() {
        $container.show();
    }

    function hideEditor() {
        $container.hide();
    }

})();
