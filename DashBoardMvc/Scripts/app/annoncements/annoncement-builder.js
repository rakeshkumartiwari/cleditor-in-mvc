/**
   This class has responsibilitty for other tasks. I do not know now you know how to read that better. value
    * control-builder.js
    */
var annoncementBuilder = (function () {
    return {
        init: init
    }

    //any question ?
    // how to get text of cl editor 
    // write function for that indedotr app

    function init() {
        /* todo : write small functions ok*/
        annoncementApi.getAllAnnoncements().done(
            function (data) {
                $.each(data, function (i, v) {
                    var div1 = $("<div/>");
                    var btnSave = $('<input/>', {
                        type: 'button',
                        on: {
                            click: function () {
                                alert(annoncementEditor.getText());
                                //annoncementApi.save(text, id);

                            }
                        }
                    });
                    var btnEdit = $("<input/>",
                        {
                            type: 'button',
                            value: 'Edit',
                            id: v.Id,
                            on: {
                                click: function () {
                                    // $.get("Dashboard/GetAnnouncement?id=" + v.Id)
                                    annoncementApi.getAnnoncementById(v.Id)
                                        .done(function (data1) {
                                            // in order for setting text in ck editor use setText function
                                            annoncementEditor.setText(data1.Description);
                                            annoncementEditor.setTitle(data1.Title);
                                        }).fail(function () {
                                            alert("Fail");
                                        });
                                }
                            },

                        });
                    // btnEdit.addClass("class", "btn btn-primary")
                    div1.html(v.Title + "<br/>" + v.Description);
                    div1.attr("class", "alert alert-warning");

                    if (user.isAdmin()) {
                        div1.append(btnEdit);
                        // buto 
                    } else {

                    }

                    div1.append(btnSave);
                    $("#mainDiv").append(div1);
                });

            })
            .fail(function () { alert("Failed") });
    }
})();

