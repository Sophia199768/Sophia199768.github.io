const taskInput = document.getElementsByClassName("task-form__input")[0];
const priorityInput = document.getElementsByClassName("task-form__priority")[0];
const addTaskButton = document.getElementsByClassName("task-form__button")[0];
const taskList = document.getElementsByClassName("task-list")[0];

let flagOfFirstTask = false;
let taskTable;

const loadTasks = () => {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
        const tasks = JSON.parse(savedTasks);
        tasks.forEach(({ task, priority }) => {
            addTaskToTable(task, priority);
        });
    }
};

const createButton = (text, className) => {
    const button = document.createElement('button');
    button.textContent = text;
    button.className = className;
    return button;
};

const addTaskToTable = (task, priority) => {
    if (!flagOfFirstTask) {
        taskTable = document.createElement("table");
        taskTable.classList.add("taskTable");

        const headerRow = document.createElement("tr");
        const headers = ["Things that I need to do", "Priority", "Status", "Delete"];

        headers.forEach(headerText => {
            const th = document.createElement("th");
            th.textContent = headerText;
            headerRow.appendChild(th);
        });

        const thead = document.createElement("thead");
        thead.appendChild(headerRow);
        taskTable.appendChild(thead);

        const tbody = document.createElement("tbody");
        taskTable.appendChild(tbody);

        taskList.appendChild(taskTable);
        flagOfFirstTask = true;
    }

    const newRow = taskTable.querySelector("tbody").insertRow();
    const taskCell = newRow.insertCell(0);
    const priorityCell = newRow.insertCell(1);
    const statusCell = newRow.insertCell(2);
    const actionCell = newRow.insertCell(3);

    taskCell.textContent = task;
    priorityCell.textContent = priority;
    statusCell.appendChild(createButton('Mark Done', 'mark-done'));
    actionCell.appendChild(createButton('Delete', 'delete-line'));
};

addTaskButton.addEventListener("click", () => {
    const task = taskInput.value;
    const priority = priorityInput.value;

    addTaskToTable(task, priority);

    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.push({ task, priority });
    localStorage.setItem('tasks', JSON.stringify(tasks));
    taskInput.value = "";
});

taskList.addEventListener("click", (event) => {
    if (event.target.classList.contains("mark-done")) {
        const taskItem = event.target.closest("tr");
        taskItem.style.backgroundColor = "#b5d289";
    }
});

taskList.addEventListener("click", (event) => {
    if (event.target.classList.contains("delete-line")) {
        const rowToDelete = event.target.closest("tr");

        if (rowToDelete) {
            rowToDelete.remove();
        }

        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        const taskToDelete = rowToDelete.cells[0].textContent;
        const updatedTasks = tasks.filter(task => task.task !== taskToDelete);
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));

        const tableBody = taskList.querySelector('tbody');

        if (tableBody && tableBody.rows.length === 0) {
            if (taskList.querySelector('thead')) {
                taskList.querySelector('thead').remove();
                flagOfFirstTask = false
            }
        }
    }
});

loadTasks();