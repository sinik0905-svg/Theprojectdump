let tasks = [];

function checkTask() {

    let task = document.getElementById("taskInput").value.trim();

    if (task === "") {

        document.getElementById("message").innerHTML = "Please enter a task.";

        return;
    }

    let newTask = {
        title: task
    };

    tasks.push(newTask);

    document.getElementById("total").innerHTML = tasks.length;

    document.getElementById("message").innerHTML = "Task Added Successfully!";

    document.getElementById("taskInput").value = "";
}