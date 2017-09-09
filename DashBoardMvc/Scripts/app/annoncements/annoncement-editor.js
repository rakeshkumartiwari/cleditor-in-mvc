
/*
* this class has responsibility to update CL EDITOR
editor.js*/
var annoncementEditor = (function () {
    var $editor;
    var editor;
    var $title;

    return {
        init: init,
        setText: updateText,
        setTitle: setTitle,
        getText : getText
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

    function updateText(textToDisplay) {
        editor.$area.val(textToDisplay);
        editor.updateFrame();
    }

    function getText() {
        return editor.$area.val();
    }

})();
