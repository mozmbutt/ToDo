document.addEventListener("DOMContentLoaded", () => {
    let toDoListEle = document.getElementById('todo-list');

    function renderToList(toDo) {
        var toDoEle = document.createElement('div');
        toDoEle.classList.add("to-do-item");

        var toDoText = document.createElement('p');
        toDoText.classList.add("to-do-text");
        
        var removeBtn = document.createElement('button');
        removeBtn.value = 'Remove'
        removeBtn.classList.add("remove-to-do");
        removeBtn.textContent = 'Remove'
        removeBtn.addEventListener('click', (e) => {
            e.target.parentElement.classList.add('fade-out')
            setTimeout(() => {
                e.target.parentElement.remove();
            }, 700);
        })
        
        toDoText.innerHTML = toDo;
        toDoEle.appendChild(toDoText);
        toDoEle.appendChild(removeBtn);
        toDoListEle.appendChild(toDoEle);
    }

    document.getElementById('add-todo').addEventListener('click', () => {
        var newTodo = document.getElementById('todo-input').value;
        if (newTodo) {
            emptyInput();
            renderToList(newTodo);
        } else {
            alert('Add some text!')
        }
    })

    function emptyInput() {
        document.getElementById('todo-input').value = '';
    }

});