'use strict';

const input = document.querySelector('.todo_list-input-text');
const editInput = document.querySelector('.todo_list-edit-text');
const buttonAdd = document.querySelector('.add-task');
const buttonClearList = document.querySelector('.clear-todo-list');
const content = document.querySelector('.todo_list-content')
let tasksData = [];
let tasksDataIndexbyClick = 0;
let tasksInLocalStorage = JSON.parse(localStorage.getItem('tasks'));

if (tasksInLocalStorage !== null) {
    tasksData = tasksInLocalStorage;
    renderTasksList();
}

input.addEventListener('keydown', function () {
    if (event.code === 'Enter' && input.value !== '') {
        addTask({
            value: getValue(input),
            completeStatus: false,
        });
        renderTask();
        clearValue(input);
        localStorage.setItem('tasks', JSON.stringify(tasksData));
    }

});

editInput.addEventListener('keydown', function (event) {
    if (event.code === 'Enter') {
        tasksData[tasksDataIndexbyClick].value = getValue(editInput);
        ClearTasksList();
        clearValue(editInput);
        editInput.classList.remove('todo_list-edit-text_visible');
        renderTasksList();
        localStorage.setItem('tasks', JSON.stringify(tasksData));
    }

});

buttonAdd.addEventListener('click', function () {
    if (input.value !== '') {
        addTask({
            value: getValue(input),
            completeStatus: false,
        });
        renderTask();
        clearValue(input);
    }
});

content.addEventListener('click', function (event) {
    if (tasksData.length !== 0) {
        let contentTask = event.target;
        if (contentTask.classList.contains('btn_remove')) {
            removeTask(event);
            contentTask.parentNode.remove();
            localStorage.setItem('tasks', JSON.stringify(tasksData));
        }
        if (tasksData.length == 0) {
            localStorage.clear();
        }
    }
});

content.addEventListener('click', function (event) {
    if (tasksData.length !== 0) {
        let contentTask = event.target;
        if (contentTask.classList.contains('todo_list-task-text') && !contentTask.classList.contains('todo_list-task-text_complete')) {
            tasksData.forEach((task, i) => {
                if (i == +event.target.parentNode.dataset.id) {
                    contentTask.classList.add('todo_list-task-text_complete');
                    task.completeStatus = true
                    localStorage.setItem('tasks', JSON.stringify(tasksData));
                }
            });
            return;
        }
        if (contentTask.classList.contains('todo_list-task-text_complete')) {
            tasksData.forEach((task, i) => {
                if (i == +event.target.parentNode.dataset.id) {
                    contentTask.classList.remove('todo_list-task-text_complete');
                    task.completeStatus = false;
                    localStorage.setItem('tasks', JSON.stringify(tasksData));
                }
            });
        }

    }
});

content.addEventListener('click', function (event) {
    if (tasksData.length !== 0) {
        let contentTask = event.target;
        if (!editInput.classList.contains('todo_list-edit-text_visible')) {
            if (contentTask.classList.contains('btn_edit')) {
                editInput.classList.add('todo_list-edit-text_visible');
                editInput.value = tasksData[+event.target.parentNode.dataset.id].value;
                tasksDataIndexbyClick = +event.target.parentNode.dataset.id;
                editInput.style.top = `${event.clientY - 45}px`;
                editInput.select();
            }
        }
    }
});

buttonClearList.addEventListener('click', function () {
    ClearContent();
    localStorage.clear();
});

function addTask(task) {
    tasksData.push(task);

}

function removeTask(event) {
    tasksData.splice(+event.target.parentNode.dataset.id, 1);
    ClearTasksList();
    renderTasksList();
    return tasksData;

}

function renderTasksList() {
    tasksData.forEach((task, i) => {
        let elem = `<li data-id = "${i}" class = "todo_list-task">
                    
                    <p data-id = "${i}" class = "todo_list-task-text">${task.value}</p>
                    <i class="fas fa-edit btn_edit"></i>
                    <i class="fas fa-trash btn_remove"></i>
               </li>`
        content.insertAdjacentHTML('beforeend', elem);
        if (task.completeStatus == true) {
            let tasksTekst = document.querySelectorAll('.todo_list-task-text');
            tasksTekst.forEach(taskTekst => {
                if (taskTekst.dataset.id == i) {
                    taskTekst.classList.add('todo_list-task-text_complete');
                }
            });

        }
    });
};

function renderTask() {
    tasksData.forEach((task, i) => {
        if (i == tasksData.length - 1) {
            let elem = `<li data-id = "${i}" class = "todo_list-task">
                    
                    <p data-id = "${i}" class = "todo_list-task-text">${task.value}</p>
                    <i class="fas fa-edit btn_edit"></i>
                    <i class="fas fa-trash btn_remove"></i>
               </li>`
            content.insertAdjacentHTML('beforeend', elem);
        }
    });
};

function getValue(elem) {
    return elem.value;
};

function clearValue(elem) {
    elem.value = '';
    return elem.value;

};

function ClearTasksList() {
    const tasks = document.querySelectorAll('.todo_list-task');
    tasks.forEach(task => {
        task.remove();
    });
}

function ClearContent() {
    const tasks = document.querySelectorAll('.todo_list-task');
    tasks.forEach(task => {
        task.remove();
    });
}