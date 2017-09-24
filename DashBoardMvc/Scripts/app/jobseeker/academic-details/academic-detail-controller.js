ACCOUNTRY_APP.jobseeker.academicDetailController = (function (events) {

    var id = 1;
    var $html;
    return {
        render: render,
        listen: listen

    }

    function render(props) {

        //create select
        //onchange i will publish academicDetailChanged,degree{id:option.value,text:option.text}
        id = id + 1;
        var html = `<div class="row" id=${id}>
        <div class="col-sm-4" id=${id}-ddlDegree></div>
        <div class="col-sm-4" id=${id}-txtName></div>
        <div class="col-sm-4" id=${id}-add></div>
                    </div>`;

        $html = $(html);
        var $ddlDegree = getDegreeDdl();
        var $addBtn = getButton();
        var $txtName = getNameTextBox();
        $html.find("#" + id + "-ddlDegree").append($ddlDegree);
        $html.find("#" + id + "-add").append($addBtn);
        $html.find("#" + id + "-txtName").append($txtName);


        return $html;
    }

    function getButton() {
        var $addBtn = $("<input/>", {
            type: "button",
            value: "Add",
            on: {
                click: function () {
                    amplify.publish(events.academicDetails.AddNewDegree);
                }
            }
        });
        return $addBtn;
    }

    function getDegreeDdl() {
        var $ddlDegree = $(`<select id="ddlType">
                <option value="0">Select</option>
                <option value="1">ssc</option>
                <option value="2">hsc</option>
                <option value="3">underGraduete</option>
                <option value="4">PG</option>
            </select>`

            , {});

        $ddlDegree.change(function () {
            onValueChange();
        });

        return $ddlDegree;
    }


    function getNameTextBox() {
        var $addTextbox = $("<input/>", {
            type: "text"

        });
        $addTextbox.change(function () {
            onValueChange();
        })

        return $addTextbox;
    }
    function onValueChange() {
        
        var degree = $html.find("#" + id + "-ddlDegree").find("select").val();
        var name = $html.find("#" + id + "-txtName").find("input").val();
        var academicDetail = {
            degree: degree,
            name: name,
            id:id
        }

        amplify.publish(events.academicDetails.AcademicDetailChanged, academicDetail);
    }

    function listen() {
        amplify.subscribe(events.academicDetails.AddNewDegree, addNewDegreeHandler);
    }

    function addNewDegreeHandler() {
        var $html = render();
        amplify.publish(events.academicDetails.AddNewDegreeSuccess, $html);
    }

})(ACCOUNTRY_APP.jobseeker.events);