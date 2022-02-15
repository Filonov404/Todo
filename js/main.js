const btn = document.querySelector('.btn');
const btnAddNewTask = document.querySelector('.btnAddNewTask');
const parentOut = document.querySelector('.notes');
const delTask = document.querySelector('.task');

let texts = [];

function addText () {
    let input = document.querySelector('.textInInput').value;
    texts.push(input);
    console.log(texts);
    if (texts.length > 0) {
        btn.disabled = true
    }
}

function addNewTask() {
    let divTag = document.createElement('div');
    divTag.classList.add('task');
    divTag.innerHTML = `${texts}`;
    parentOut.appendChild(divTag);
    btn.disabled = false;
    let input = document.querySelector('.textInInput').value = '';
    texts.splice(0, 1)
    console.log(divTag)
}

    function deleteTask () {
        console.log(parentOut)
    }

     delTask.addEventListener('click', deleteTask)
     btnAddNewTask.addEventListener('click', addNewTask)
     btn.addEventListener('click', addText);


