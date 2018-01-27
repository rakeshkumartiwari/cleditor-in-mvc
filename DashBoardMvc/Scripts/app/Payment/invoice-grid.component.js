
ACCOUNTRY_APP.invoice.component = (function (api, service) {

    return {
        init: init,
    };

    function init(id) {
        bindClickHandleOnAddButtonn();
        removeRow();
    }

    function bindClickHandleOnAddButtonn() {
        $("#btnAdd").click(function () {
            addRow();
        });
    }

    function addRow() {

        var id = genarateUniqueId();

        var $table = $("#tblPayment tbody");

        var $tr = $("<tr>", { id: id });

        $tr.append("<td><input type='text'/></td><td><input type='text'/></td><td><input type='text'/></td><td><input type='text'/></td><td><input type='text'/></td><td><a href='javascript:void (0);' class='remove'>Delete</a></td>")
       
        $table.append($tr);
    }

    function removeRow() {
        $("#tblPayment tbody").on('click', '.remove', function () {
            $(this).parent().parent().remove();
        });
    }

    function genarateUniqueId() {
        return Math.floor(1000 + Math.random() * 9000);
    }
})(ACCOUNTRY_APP.invoice.api, ACCOUNTRY_APP.invoice.service);