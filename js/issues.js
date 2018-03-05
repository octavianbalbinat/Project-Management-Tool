
function toggleIssueForm() {
    var element = document.querySelector(".issue-form");
    element.classList.toggle('hidden');
}


function Issue(issueData) {
    issueData = issueData || {};
    return {
        id: 1,
        type: "Feature",
        name: issueData.name || "New button",
        sprint: "Sprint 1",
        createdBy: "Octavian Balbinat",
        assignee: "Octavian Balbinat",
        description: "Create a new dropdown button for the second page of the site.",
        status: "In progress",
        tasks: "Create new button.",
        comments: "-",
        updatedAt: "Mon Mar 05 2018 12:24:34 ",
        createdAt: "Mon Mar 05 2018 23:29:55 "
    }
}
var issueList = [new Issue()];



function renderIssues() {
    var tableEl = document.getElementById('tableData');
    console.log("table before render", tableEl);

    var tableBody = '';

    for (var i = 0; i < issueList.length; i++) {
        var row = '<tr>';
        var issue = issueList[i];
        row += '<td>' + issue.id + '</td>';
        row += '<td>' + issue.type + '</td>';
        row += '<td>' + issue.name + '</td>';
        row += '<td>' + issue.sprint + '</td>';
        row += '<td>' + issue.createdBy + '</td>';
        row += '<td>' + issue.assignee + '</td>';
        row += '<td>' + issue.description + '</td>';
        row += '<td>' + issue.status + '</td>';
        row += '<td>' + issue.tasks + '</td>';
        row += '<td>' + issue.comments + '</td>';
        row += '<td>' + issue.updatedAt + '</td>';
        row += '<td>' + issue.createdAt + '</td>';
        row += '<td>' + '<button class="btn btn-danger" type="button" onclick="onDeleteClick(' + issue.id + ')">' + "Delete" + '</button>' + '</td>';
        row += '</tr>';
        tableBody = tableBody + row;
    }
    tableEl.innerHTML = tableBody;

    console.log("generated issue", tableBody);
}
renderIssues();


function onAddIssueClick() {
    var itype = document.getElementById('type-select').value;
    var iname = document.getElementById('iname').value;
    var isprint = document.getElementById('sprint-select').value;
    var icreatedby = document.getElementById('user-select').value;
    var iassignee = document.getElementById('iassignee').value;
    var idescription = document.getElementById('idescription').value;
    var istatus = document.getElementById('status-select').value;
    var itask = document.getElementById('itask').value;
    var icomment = document.getElementById('icomment').value;


    var issueForm = new Issue();

    issueForm.id = issueList.length + 1;
    issueForm.type = itype;
    issueForm.name = iname;
    issueForm.sprint = isprint;
    issueForm.createdBy = icreatedby;
    issueForm.assignee = iassignee;
    issueForm.description = idescription;
    issueForm.status = istatus;
    issueForm.tasks = itask;
    issueForm.comments = icomment;
    issueForm.updatedAt = new Date();
    issueForm.createdAt = new Date();

    console.log(issueForm);

    issueList.push(issueForm);
    renderIssues();

}


function onDeleteClick(id) {
    var tableEl = document.getElementById('tableData');
    var issueIndex = issueList.findIndex(function (iss) {
        return iss.id == id;
    });

    issueList.splice(issueIndex, 1);




    console.log(issueIndex);
    renderIssues();

}



// function modalButton(){



//     // Get the modal
//     var modal = document.getElementById('myModal');

//     // Get the button that opens the modal
//     var btn = document.getElementById("myBtn");

//     // Get the <span> element that closes the modal
//     var span = document.getElementsByClassName("close")[0];


//             function renderModal() {
//                 var modalEl = modal;
//                 var modalContent = '';
//             }

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


// // row+= '<td>' + '<button class="btn btn-danger" type="button" onclick="onDeleteClick('+ issue.id +')">' + "Delete" + '</button>' + '</td>';

