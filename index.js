const people = [
    { name: "Alex Merced", age: 35 },
    { name: "Bob Jones", age: 65 },
    { name: "Steve Smith", age: 22 },
    { name: "Macie Willis", age: 32 },
    { name: "John Jingle", age: 40 },
  ]

  const mainDiv = document.querySelector('.main-div');
  const nameInput = document.querySelector('.name-input');
  const ageInput = document.querySelector('.age-input');
  const createButton = document.getElementById('createitem');
  const updateName = document.querySelector('input[name="updatename"]') //selecting the input with name property "name"
const updateAge = document.querySelector('input[name="updateage"]') //selecting the input with name property "name"
const updateFormButton = document.querySelector("button#updateitem") //select button with id "createitem

  const renderData = () =>{
      mainDiv.innerHTML = "" 
  

  //loop over the peoples array
people.forEach((person, index) => {
      const personH1 = document.createElement('h1');
      const buttonContainer = document.createElement("aside")

      //Delete Button
      const deleteButton = document.createElement(`button`) //create delete button
    deleteButton.id = index
    deleteButton.innerText = "Delete" 
    deleteButton.addEventListener("click", event => {
        people.splice(index, 1) //remove the element at the current index
        renderData() //re-render the updated data to the DOM
      })
      buttonContainer.appendChild(deleteButton); 
      
       //Update Button
    const updateButton = document.createElement(`button`) //create update button
    updateButton.id = index
    updateButton.innerText = "Update" //make the delete button say "Delete"
    updateButton.addEventListener("click", event => {
      updateName.value = person.name //set form to show current name
      updateAge.value = person.age //set form to show current age
      updateFormButton.setAttribute("toupdate", index) //custom attribute to use in the button event later
    })
    buttonContainer.appendChild(updateButton) //apend the delete button

      personH1.innerHTML = `${person.name} is ${person.age} years old`;
      mainDiv.appendChild(personH1);
      mainDiv.appendChild(buttonContainer) //append container of update and delete button

  })
}

const createData = () => {
    const name = nameInput.value; //store value from name input into name variable
    const age = ageInput.value;//store value from age input into age variable
    const newPerson = { name, age };// create new person object
    people.push(newPerson); //push the new person object into the array
    renderData() ;//render the data again so it reflects the new data
  }


  const updateData = event => {
    const index = event.target.getAttribute("toupdate") //get index we stored via custom attribute
    const name = updateName.value //get value from form
    const age = updateAge.value //get value from form
    people[index] = { name, age } //replace existing object at that index with a new with updated values
    renderData() //update the DOM with the new data
  }
renderData(); //call the render data function for the initial rendering of the data
createButton.addEventListener('click', createData);
updateFormButton.addEventListener("click", updateData) ;