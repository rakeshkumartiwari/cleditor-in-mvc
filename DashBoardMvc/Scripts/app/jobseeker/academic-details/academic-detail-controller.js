ACCOUNTRY_APP.jobseeker.academicDetailController = (function (events) {

    var id = 1;
    return {
        render: render,
        listen: listen
        
    }

    function render(props) {

        //create select
        //onchange i will publish academicDetailChanged,degree{id:option.value,text:option.text}
        id = id + 1;
        var html = `<div class="row" id=${id}>
        <div class="col-sm-4">
            <select id="ddlType">
                <option value="0">Select</option>
                <option value="1">ssc</option>
                <option value="2">hsc</option>
                <option value="3">underGraduete</option>
                <option value="4">PG</option>
            </select>
        </div>
        <div class="col-sm-4" id=${id}-add>
            
        </div>
    </div>`;
        var $html = $(html);
       
        var $addBtn = getButton();
        $html.find("#" + id + "-add").append($addBtn);

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

    function listen() {
        amplify.subscribe(events.academicDetails.AddNewDegree, addNewDegreeHandler);
    }

    function addNewDegreeHandler() {
        var $html = render();
        amplify.publish(events.academicDetails.AddNewDegreeSuccess, $html);
    }

})(ACCOUNTRY_APP.jobseeker.events);