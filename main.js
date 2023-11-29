const addBtn = document.querySelector('.btn');
const input = document.querySelector('input');
const box = document.querySelector('.box');
const tasks = [];

addBtn.addEventListener('click', function () {
    if (input.value.trim() !== "") {
        tasks.push(input.value);
        updateTaskList();
    }

    console.log(tasks);
});

// Event delegation for delete buttons
box.addEventListener('click', function (event) {
    if (event.target.classList.contains('delete-btn')) {
        const taskId = event.target.getAttribute('data-id');
        tasks.splice(taskId, 1);
        updateTaskList();
    }
});

function updateTaskList() {
    if (tasks.length > 0) {
        box.innerHTML = "";
        tasks.forEach((item, index) => {
            box.innerHTML += `
                <div class="col-sm-12">
                    <div class="alert alert-dark" role="alert">
                        <span>${index + 1}</span>
                        ${item}
                        <button class="delete-btn btn btn-danger float-end " data-id=${index}>delete</button>
                    </div>
                </div>
            `;
        });
    } else {
        box.innerHTML = `
            <div class="col-sm-12">
                <div class="alert alert-info" role="alert">
                    Task qeydi yoxdur
                </div>
            </div>
        `;
    }
}
