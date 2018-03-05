function toggleSprintForm() {
    var element = document.querySelector(".sprint-form");
    element.classList.toggle('hidden');
}

function Sprint(sprintData) {
    sprintData = sprintData || {};
    return {
        id: 1,
        name: "Sprint 1"
    }
}
var sprintsList = [new Sprint()];

function onAddSprintClick() {
    var sname = document.getElementById('sname').value

    var sprintForm = new Sprint();
    sprintForm.name = sname;

    console.log(sprintForm);
    sprintsList.push(sprintForm);
    renderSprint();
    renderSidebarSprints();
    renderSprintSelect();
}

function renderSidebarSprints() {
    var sidebarEl = document.getElementById('sidebar-s-content');
    var sidebarContent = "";
    for (var i = 0; i < sprintsList.length; i++) {
        var sprint = sprintsList[i];
        var item = '<p>' + sprint.name + '</p>';
        sidebarContent += item;
    }
    sidebarEl.innerHTML = sidebarContent;
    console.log(item);
}
renderSidebarSprints();

function renderSprint() {
    var element = document.getElementById('sprintList');
    var table = "";

    for (var i = 0; i < sprintsList.length; i++) {
        var sprint = sprintsList[i];
        table += '<h4>' + sprint.name + '</h4>';
        table += '<table class="table table-bordered" id="issueTable">';
        table += '<thead>';
        table += ' <th>' + "Id" + '</th>';
        table += ' <th>' + "Type" + '</th>';
        table += ' <th>' + "Name" + '</th>';
        table += ' <th>' + "Sprint" + '</th>';
        table += ' <th>' + "CreateBy" + '</th>';
        table += ' <th>' + "Assignee" + '</th>';
        table += ' <th>' + "Description" + '</th>';
        table += ' <th>' + "Status" + '</th>';
        table += ' <th>' + "Tasks" + '</th>';
        table += ' <th>' + "Comments" + '</th>';
        table += ' <th>' + "UpdatesAt" + '</th>';
        table += ' <th>' + "CreatedAt" + '</th>';
        table += ' <th>' + "Acction" + '</th>';
        table += '</tr>';
        table += '</thead>';
        table += '<tbody id="tableData">' + '</tbody>';
        table += '</table>';
    }
    element.innerHTML = table;
    renderIssues();
}
renderSprint();

function renderSprintSelect() {
    document.getElementById("sprint-select").selectedIndex = '';
    var sprintSelect = document.getElementById('sprint-select');
    var selectContent = "";
    for (var i = 0; i < sprintsList.length; i++) {
        var sprint = sprintsList[i];
        var item = '<option>' + sprint.name + '</option>';
        selectContent += item;
    }
    sprintSelect.innerHTML = selectContent;
    console.log(item);
}
renderSprintSelect();
