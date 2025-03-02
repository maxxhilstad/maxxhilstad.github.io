const hours = new Date().getHours() // get the current hour

const isMorning = hours >= 4 && hours < 12 // is it morning?
const isAfternoon = hours >= 12 && hours < 17 // is it afternoon?
const isEvening = hours >= 17 || hours < 4 // is it evening?

const welcomeMessage = document.querySelector('#welcome')

if (isMorning === true) {
    welcomeMessage.textContent = 'Good Morning!'
} else if (isAfternoon === true) {
    welcomeMessage.textContent = 'Good Afternoon1'
} else {
    welcomeMessage.textContent = 'Good Evening!'
}

localStorage.setItem("It's a secret to everybody.", "It's dangerous to go alone! Take this.")



const urls = [
    'https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/933964/pexels-photo-933964.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1251861/pexels-photo-1251861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1370296/pexels-photo-1370296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
].map(url => { (new Image()).src = url; return url })

const images = document.querySelectorAll('#carousel img')

let currentImage = 0
const showImages = () => {
    const offset = currentImage % urls.length
    images.forEach((image, index) => {
        const imageIndex = (index + offset + urls.length) % urls.length
        image.src = urls[imageIndex]
    })
}

showImages()

const prev = document.querySelector('#prev')
const next = document.querySelector('#next')

setInterval(() => {
    currentImage++
    showImages()
}, 5000)

next.addEventListener('click', () => {
    currentImage++
    showImages()
})

prev.addEventListener('click', () => {
    currentImage--
    showImages()
})


// ASSIGNMENT 6 - TODO LIST


// Create function that creates and adds list items to DOM (renderTodos). Call it when the page loads. Call it again when the user adds an item.

// Use array method to loop through list of items. Don't use FOR loop

// When user adds an item to the list, it should be added to local storage. After it's added, call renderTodos


const todoButton = document.querySelector('#addTodo') // selects button
const todoInput = document.querySelector('#new-todo') // selects input
const todoList = document.querySelector('.todo-list') // selects ul

// Get the list from local storage
const todos = JSON.parse(localStorage.getItem('todo-list')) || []

const renderTodos = () => {
    // Create and add new list items to the DOM
    const li = document.createElement('li')
    li.textContent = todoInput.text
    todoList.append(li)
}

const createList = todos.forEach(todo => {

    const { text, completed } = todo

    li.innerHTML = `<span>${text}${completed}</span>`

    renderTodos()
})

renderTodos()

todoButton.addEventListener('click', () => {
    // Clear the li's before we recreate them
    todoList.innerHTML = ''

    // Add a new item to the list
    todos.push({ text: todoInput.value, completed: false })

    // Save the list to local storage
    localStorage.setItem('todo-list', JSON.stringify(todos))

    createList()
})