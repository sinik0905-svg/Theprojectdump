let totalTasks = 0;

function checkTask() {

    let task = document.getElementById("taskInput").value;

    if (task === "") {
        document.getElementById("message").innerHTML = "Please enter a task.";
    } else {
        totalTasks++;

        document.getElementById("total").innerHTML = totalTasks;
        document.getElementById("message").innerHTML = "Task Added!";
    }

    document.getElementById("taskInput").value = "";
}