const editForm = document.querySelector('.edit-form');
const url = new URLSearchParams(location.search).get('id');
editForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const value = e.currentTarget.name.value;
    try {
        const response = await axios.patch(`http://localhost:5000/api/v1/tasks/${url}`, { name: value });
        console.log(response);

    } catch (error) {
        console.log(error);
    }

})


// console.log(url);