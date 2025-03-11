// ASSIGNMENT 6 - TODO LIST


// Create function that creates and adds list items to DOM (renderTodos). Call it when the page loads. Call it again when the user adds an item.

// Use array method to loop through list of items. Don't use FOR loop

// When user adds an item to the list, it should be added to local storage. After it's added, call renderTodos


const todoButton = document.querySelector('#addTodo') // selects button
const todoInput = document.querySelector('#new-todo') // selects input
const todoList = document.querySelector('.todo-list') // selects ul

// Get the list from local storage
const todos = JSON.parse(localStorage.getItem('todo-list')) || []

// Render function
const renderTodos = () => {
    // For each item in todos
    todos.forEach(todo => {
        const li = document.createElement('li')
        li.textContent = todo.text
        todoList.append(li)

        // return values
        const { text, completed } = todos
        return { text, completed }
    })
}

renderTodos()

// When submit is clicked
todoButton.addEventListener('click', () => {
    // Clear the li's before we recreate them
    todoList.innerHTML = ''
    // Add a new item to the list
    todos.push({ text: todoInput.value, completed: false })
    // Save the list to local storage
    localStorage.setItem('todo-list', JSON.stringify(todos))
    // Render todo-list
    renderTodos()
})