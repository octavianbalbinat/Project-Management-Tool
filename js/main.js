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

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {

        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
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


// function renderUsers() {
//     var dropdownEl = document.getElementById('myDropdown');
//     var dropdownContent = "";
//     for (var i = 0; i < usersList.length; i++) {
//         var user = usersList[i];
//         var item = '<a href="#">' + user.name + '</a>';
//         dropdownContent += item; 
//     }
//     dropdownEl.innerHTML = dropdownContent;
// }
// renderUsers();




// function modalButton(){

//     // Get the modal
//     var modal = document.getElementById('myModal');

//     // Get the button that opens the modal
//     var btn = document.getElementById("myBtn");

//     // Get the <span> element that closes the modal
//     var span = document.getElementsByClassName("close")[0];

//     // When the user clicks on the button, open the modal 
//     btn.onclick = function() {
//         modal.style.display = "block";
//     }

//     // When the user clicks on <span> (x), close the modal
//     span.onclick = function() {
//         modal.style.display = "none";
//     }

//     // When the user clicks anywhere outside of the modal, close it
//     window.onclick = function(event) {
//         if (event.target == modal) {
//             modal.style.display = "none";
//         }
//     }
// }