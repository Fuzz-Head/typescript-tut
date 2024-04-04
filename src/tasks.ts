//6:08:00 03/04

const taskForm = document.querySelector<HTMLFormElement>('.form');
//const taskForm = document.querySelector('.form')! as HTMLFormElement;  //also very valid 

const formInput = document.querySelector<HTMLInputElement>('.form-input');

const taskListElement = document.querySelector<HTMLUListElement>('.list');


type Task = {
    description: string;
    isCompleted: boolean;
};

const tasks: Task[] = loadTasks();

tasks.forEach(renderTask);

function loadTasks(): Task[] {
    const storedTasks = localStorage.getItem('tasks');
    return storedTasks ? JSON.parse(storedTasks) : [];
}

taskForm?.addEventListener('submit', (event) => {
    event.preventDefault();
    const taskDescription = formInput?.value;
    if (taskDescription) {
        //console.log(taskDescription);
        const task: Task = {
            description: taskDescription,
            isCompleted: false,
        };
        addTask(task);
        renderTask(task);
        updateStorage();
        formInput.value = '';
        return;
    }
    alert('Please enter a task description')
});

//callback function auto assigns the type but if writing a separate function and
// calling it in the eventhandler we will have to give it its type


function addTask(task: Task): void {
    tasks.push(task);
    console.log(tasks);
}

function renderTask(task: Task): void {
    const taskElement = document.createElement('li');
    taskElement.textContent = task.description;

    //checkbox 
    const taskCheckbox = document.createElement('input');
    taskCheckbox.type = 'checkbox';
    taskCheckbox.checked = task.isCompleted;

    //toggle checkbox 
    taskCheckbox.addEventListener('change', () => {
        task.isCompleted = !task.isCompleted;
        updateStorage();
    });

    taskElement.appendChild(taskCheckbox);
    taskListElement?.appendChild(taskElement);
}

function updateStorage(): void {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}
