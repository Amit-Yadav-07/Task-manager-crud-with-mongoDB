
const taskContainer = document.querySelector('.task-container');
const form = document.querySelector('.form');
// const deleteBtn = document.querySelector(".edit-delete-btn-container");
// console.log(deleteBtn);




// all task
const getTask = async () => {
    taskContainer.innerHTML = `<h3 style='font-size:2rem'>Loading...</h3>`
    try {
        const response = await axios.get('http://localhost:5000/api/v1/tasks');
        // console.log(response.data.task);
        taskContainer.innerHTML = response.data.task.map((item) => {
            const { _id: taskId, name } = item;
            return `<div class="task-item">
            <div style="display: flex; padding-left: 1rem;">
                <h2>${name}</h2>
            </div>
            <div class="edit-delete-btn-container">
                <a href="editTask.html?id=${taskId}" class="edit-btn"><i class="fa-solid fa-pen-to-square"></i></a>
                <button type="button" class="delete-btn" data-id="${taskId}"><i class="fa-solid fa-trash"></i></button>
            </div>
        </div>`
        }).join('')

        // console.log(response.data);
    } catch (error) {
        taskContainer.innerHTML = `<h3 style='font-size:2rem'>there was an error please try again later..</h3>`
        console.log(error.message);
    }

}

getTask()





// single Task
form.addEventListener('submit', async (e) => {
    try {
        e.preventDefault()
        const value = e.currentTarget.name.value;
        if (!value) return
        const response = await axios.post('http://localhost:5000/api/v1/tasks', { name: value })
        getTask();
    } catch (error) {
        console.log(error);
    }
})



// delete task


taskContainer.addEventListener('click', function (e) {
    const id = e.target.parentElement.dataset.id;
    try {
        const response = axios.delete(`http://localhost:5000/api/v1/tasks/${id}`);
        console.log(response);
        getTask();
    } catch (error) {
        console.log(error);
    }
})



