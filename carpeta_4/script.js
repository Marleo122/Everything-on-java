document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');
    const completedTaskList = document.getElementById('completedTaskList');
    const deletedTaskList = document.getElementById('deletedTaskList');

    const tasks = [];

    const addTask = () => {
        const taskText = taskInput.value.trim();
        console.log(`Adding task: ${taskText}`);
        if (taskText !== '') {
            const task = {
                id: Date.now(),
                text: taskText,
                completed: false,
                deleted: false
            };
            tasks.push(task);
            console.log('Task added:', task);
            renderTasks();
            taskInput.value = '';
        }
    };

    const renderTasks = () => {
        console.log('Rendering tasks:', tasks);
        taskList.innerHTML = tasks.filter(task => !task.completed && !task.deleted).map(({ id, text }) => `
            <li class="task" data-id="${id}">
                ${text}
                <button onclick="completeTask(${id})">Complete</button>
                <button onclick="deleteTask(${id})">Delete</button>
            </li>
        `).join('');

        completedTaskList.innerHTML = tasks.filter(task => task.completed).map(({ id, text }) => `
            <li class="task completed" data-id="${id}">
                ${text}
            </li>
        `).join('');

        deletedTaskList.innerHTML = tasks.filter(task => task.deleted).map(({ id, text }) => `
            <li class="task" data-id="${id}">
                ${text}
            </li>
        `).join('');
    };

    window.completeTask = id => {
        const task = tasks.find(task => task.id === id);
        if (task) {
            task.completed = true;
            console.log('Task completed:', task);
            renderTasks();
        }
    };

    window.deleteTask = id => {
        const task = tasks.find(task => task.id === id);
        if (task) {
            task.deleted = true;
            console.log('Task deleted:', task);
            renderTasks();
        }
    };

    addTaskBtn.addEventListener('click', addTask);
    taskInput.addEventListener('keydown', e => {
        if (e.key === 'Enter') addTask();
    });
});
