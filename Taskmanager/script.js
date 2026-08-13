let tasks = [];

function checkTask() {

    let task = document.getElementById("taskInput").value.trim();
    let schedule = document.getElementById("schedule").value;
    let priority = document.getElementById("priority").value;
    let status = document.getElementById("status").value;

    if (task === "" || schedule === "") {
        document.getElementById("message").innerHTML = "Please fill all the fields.";
        return;
    }

    let currentTime = new Date().toLocaleString();

    let newTask = {
        title: task,
        schedule: schedule,
        priority: priority,
        status: status,
        modifiedAt: currentTime
    };

    tasks.push(newTask);

    displayTasks();

    document.getElementById("total").innerHTML = tasks.length;

    document.getElementById("message").innerHTML = "Task Added Successfully!";

    document.getElementById("taskInput").value = "";
    document.getElementById("schedule").value = "";
    document.getElementById("priority").value = "High";
    document.getElementById("status").value = "Pending";
}

function displayTasks() {

    let tableBody = document.getElementById("taskTableBody");

    tableBody.innerHTML = "";

    for (let i = 0; i < tasks.length; i++) {

        tableBody.innerHTML += `
        <tr>
            <td>${i + 1}</td>

            <td>${tasks[i].title}</td>

            <td>${tasks[i].schedule}</td>

            <td>${tasks[i].priority}</td>

            <td>${tasks[i].status}</td>

            <td>${tasks[i].modifiedAt}</td>

            <td>

                <button class="action-btn" onclick="editTask(${i})">
                    <i class="fa-solid fa-pen-to-square"></i>
                </button>

                <button class="action-btn" onclick="deleteTask(${i})">
                    <i class="fa-solid fa-trash"></i>
                </button>

            </td>

        </tr>
        `;
    }
}

function deleteTask(index) {

    if (confirm("Do you want to delete this task?")) {

        tasks.splice(index, 1);

        displayTasks();

        document.getElementById("total").innerHTML = tasks.length;

        document.getElementById("message").innerHTML = "Task Deleted Successfully!";
    }
}

function editTask(index) {

    let updatedTask = prompt("Edit Task", tasks[index].title);

    if (updatedTask !== null && updatedTask.trim() !== "") {

        tasks[index].title = updatedTask.trim();

        tasks[index].modifiedAt = new Date().toLocaleString();

        displayTasks();

        document.getElementById("message").innerHTML = "Task Updated Successfully!";
    }
}