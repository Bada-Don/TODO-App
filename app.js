let btn = document.querySelector('button');
let input = document.querySelector('input');
let task = document.querySelector('ul');
btn.addEventListener('click', function addTask() {
    if (input.value.trim() !== '') {
        task.innerHTML += `<li>${input.value}<button class="done">Done</button></li>`;
        input.value = '';
    }
});

input.addEventListener('keypress', function addTask(e) {
    if (e.key === 'Enter' && input.value.trim() !== '') {
        task.innerHTML += `<li>${input.value}<button class="done">Done</button></li>`;
        input.value = '';
    }
});
task.addEventListener('click', function deleteTask(e){
    if (e.target.classList.contains('done')) {
        let doneButton = e.target;
        let taskItem = doneButton.parentElement;
        taskItem.remove();
    }
});