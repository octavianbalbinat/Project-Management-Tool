function toggleUserForm() {
    var element = document.querySelector(".user-form");
    element.classList.toggle('hidden');
}

function Users(usersData) {
    usersData = usersData || {};
    return {
        id: 1,
        name: "Octavian Balbinat"
    }
}
var usersList = [new Users()];

function renderUsers() {
    var sidebarEl = document.getElementById('sidebar-u-content');
    var sidebarContent = "";
    for (var i = 0; i < usersList.length; i++) {
        var user = usersList[i];
        var item = '<p>' + user.name + '</p>';
        sidebarContent += item;
    }
    sidebarEl.innerHTML = sidebarContent;
}
renderUsers();

function onAddUserClick() {
    var uname = document.getElementById('uname').value;

    var userForm = new Users();
    userForm.id
    userForm.name = uname;

    console.log(userForm);
    usersList.push(userForm);
    renderUsers();
    renderUserSelect();
}

function onDeleteClick() {
    var tableEl = document.getElementById('tableData');
    var index
    tableEl.deleteRow(id);
    console.log(id);
    renderIssues();
}

function Project(projectData) {
    projectData = projectData || {};
    return {
        id: "1",
        sprint: "Sprint 1"
    }
}
var projectList = [new Project()];

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
    console.log("muie psd")
}

function renderUserSelect() {
    document.getElementById("user-select").selectedIndex = '';

    var userSelect = document.getElementById('user-select');
    var selectContent = "";
    for (var i = 0; i < usersList.length; i++) {
        var user = usersList[i];
        var item = '<option>' + user.name + '</option>';
        selectContent += item;
    }
    userSelect.innerHTML = selectContent;
    console.log(item);
}
renderUserSelect();
