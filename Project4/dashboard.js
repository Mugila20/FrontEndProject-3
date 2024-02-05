// document.addEventListener("DOMContentLoaded", function() {
//     let students = []; // Array to store student objects
  
//     function createTable() {
//       let tableContent = "<table class='table'><thead><tr><th>Name</th><th>Class</th><th>Percentage</th></tr></thead><tbody>";
  
//       for (let student of students) {
//         tableContent += `<tr><td>${student.Name}</td><td>${student.Class}</td><td>${student.Percentage}</td></tr>`;
//       }
  
//       tableContent += "</tbody></table>";
  
//       document.getElementById("studentsTable").innerHTML = tableContent;
//     }
  
//     function addStudent() {
//       let name = document.getElementById("name").value;
//       let studentClass = document.getElementById("class").value;
//       let percentage = document.getElementById("percentage").value;
  
//       let newStudent = { Name: name, Class: studentClass, Percentage: percentage };
//       students.push(newStudent); // Add the new student object to the array
  
//       createTable(); // Refresh the table with updated data
//     }
  
//     // Event listener for form submission
//     document.getElementById("addStudentForm").addEventListener("submit", function(event) {
//       event.preventDefault(); // Prevent default form submission
  
//       let name = document.getElementById("name").value;
//       let studentClass = document.getElementById("class").value;
//       let percentage = document.getElementById("percentage").value;
  
//       // Validate form fields
//       if (name.trim() === "") {
//         document.getElementById("nameError").style.display = "block";
//         return;
//       } else {
//         document.getElementById("nameError").style.display = "none";
//       }
  
//       if (studentClass === "") {
//         document.getElementById("classError").style.display = "block";
//         return;
//       } else {
//         document.getElementById("classError").style.display = "none";
//       }
  
//       if (percentage.trim() === "") {
//         document.getElementById("percentageError").style.display = "block";
//         return;
//       } else {
//         document.getElementById("percentageError").style.display = "none";
//       }
  
//       addStudent(); // Add student to the array
//       $('#addStudentModal').modal('hide'); // Close the modal after successful addition
//     });
//   });


document.getElementById('studentForm').addEventListener('submit', function(event) {
  var nameField = document.getElementById('studentName');
  var classField = document.getElementById('studentClass');
  var percentageField = document.getElementById('studentPercentage');

  if (!nameField.value.trim()) {
    nameField.classList.add('is-invalid');
    event.preventDefault();
  } else {
    nameField.classList.remove('is-invalid');
  }

  if (classField.value === '') {
    classField.classList.add('is-invalid');
    event.preventDefault();
  } else {
    classField.classList.remove('is-invalid');
  }

  if (!percentageField.value.trim()) {
    percentageField.classList.add('is-invalid');
    event.preventDefault();
  } else {
    percentageField.classList.remove('is-invalid');
  }
});

function addRow() {
  var name = document.getElementById("studentName").value;
  var stuClass = document.getElementById("studentClass").value;
  var percentage = document.getElementById("studentPercentage").value;
  var status = document.getElementById("studentStatus").value;

  if (name !== '' && stuClass !== '' && percentage !== '' && status !== '') {
    var table = document.getElementById("myTable").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.rows.length);

    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);
    var cell5 = newRow.insertCell(4);

    cell1.innerHTML = name;
    cell2.innerHTML = stuClass;
    cell3.innerHTML = percentage;
    cell4.innerHTML = status;
    cell5.innerHTML = '<button class="delete" onclick="deleteRow(this)">Delete</button>';

    document.getElementById("studentForm").reset();
  } else {
    alert("Please enter all details");
  }
}

function deleteRow(row) {
  var i = row.parentNode.parentNode.rowIndex; 
  document.getElementById("myTable").deleteRow(i); 
}
