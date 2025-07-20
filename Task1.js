var students = [];

function addStudent() {
    var name = document.getElementById("name").value.trim();
    var id = document.getElementById("id").value.trim();
    var age = document.getElementById("age").value.trim();

    document.getElementById("nameError").innerText = "";
    document.getElementById("idError").innerText = "";
    document.getElementById("ageError").innerText = "";

    var valid = true;

    if (name.length <= 3) {
        document.getElementById("nameError").innerText = "Name must be more than 3 varters.";
        valid = false;
    }

    if (students.some(s => s.id === id)) {
        document.getElementById("idError").innerText = "ID must be unique.";
        valid = false;
    }

    if (Number(age) <= 18) {
        document.getElementById("ageError").innerText = "Age must be greater than 18.";
        valid = false;
    }

    if (!valid) return;

    students.push({ id, name, age });
    renderTable();

    document.getElementById("name").value = "";
    document.getElementById("id").value = "";
    document.getElementById("age").value = "";
}

function renderTable() {
    var table = document.getElementById("studentTable");
    table.innerHTML = "";

    students.forEach((student, index) => {
        var row = document.createElement("tr");

        row.innerHTML = `
        <td>${student.id}</td>
        <td>${student.name}</td>
        <td>${student.age}</td>
        <td><button class="devare-btn" onclick="devareStudent(${index})">Delete</button></td>
      `;

        table.appendChild(row);
    });
}

function devareStudent(index) {
    students.splice(index, 1);
    renderTable();
}