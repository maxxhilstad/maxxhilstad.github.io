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