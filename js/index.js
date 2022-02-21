// - When the page loads, show the first 50 monsters. Each monster's name, age, and
//   description should be shown.

        // fetch data from URL http://localhost:3000/monsters/?_limit=50&_page=1
       
        // SHOW each monster's name age and description 
            // use forEach 
            // show data

document.addEventListener("DOMContentLoaded", (e) => {
    fetchMonsters()
    createForm()
    document.getElementById("monster-form").addEventListener('submit', (e) => {
        e.preventDefault()
        let name = document.querySelector('#monster-name').value
        let age = document.querySelector('#monster-age').value
        let description = document.querySelector('#monster-description').value
        monsterObj = {
            name: name,
            age: age, 
            description: description
        }
        console.log(monsterObj)
        postNewMonster()
    })
})

const fetchMonsters = () => {
    let monsterContainer = document.querySelector('#monster-container')
    fetch('http://localhost:3000/monsters/?_limit=50&_page=1')
    .then(response => response.json())
    .then(monsterData => {
        monsterData.forEach(monster => {
        
            let card = document.createElement('div')
            let name = document.createElement('h2')
            let description = document.createElement('p')
            let age = document.createElement('h4')
            name.innerText = monster.name
            age.innerText = `Age: ${monster.age}`
            description.innerText = `Bio: ${monster.description}`


            card.append(name, age, description)
            monsterContainer.append(card)

        })
    })
}

const createForm = () => {
    let formContainer = document.querySelector("#create-monster")
    let form = document.createElement('form')
    form.id = 'monster-form'
    let nameInput = document.createElement('input')
    let nameLabel = document.createElement('label')
    let ageInput = document.createElement('input')
    let ageLabel = document.createElement('label')
    let descriptionInput = document.createElement('input')
    let descriptionLabel = document.createElement('label')
    let h2 = document.createElement('h2')
    let button = document.createElement('button')
    button.innerText = 'Make Monster!'
    nameInput.id = 'monster-name'
    ageInput.id = 'monster-age'
    descriptionInput.id = 'monster-description'


    h2.innerHTML = 'Create Monster'
    nameLabel.innerText = 'Name'
    ageLabel.innerText = 'Age'
    descriptionLabel.innerText = 'BIO'
    
    form.append(nameLabel, nameInput, ageLabel, ageInput, descriptionLabel, descriptionInput, button)
    formContainer.append(h2, form)

}


const postNewMonster = (name, age, description) => {
    
    fetch('http://localhost:3000/monsters', {
        method: 'POST',
        headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
        },
        body: JSON.stringify({name, age, description })
        })
    .then(response => response.json())
    .then(monster => console.log(monster))
}
             
// - Above your list of monsters, you should have a form to create a new monster.
//   You should have fields for name, age, and description, and a 'Create Monster
//   Button'. When you click the button, the monster should be added to the list
//   and saved in the API.







// - At the end of the list of monsters, show a button. When clicked, the button
//   should load the next 50 monsters and show them.

