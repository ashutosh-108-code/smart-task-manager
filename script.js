document.querySelector(".submit_btn").addEventListener("click", (e) => {
  e.preventDefault();

  //This collects the inputs given by the user
  const newTask = document.getElementById("title");
  const newTaskDescription = document.getElementById("Description");
  const deadline = document.getElementById("Deadline");
  const priority = document.getElementById("Priority");
  console.log(newTaskDescription.value, newTask.value, deadline.value, priority.value);


  if (newTask.value.trim() === "") {
    return
  }

  //This creates elements that are to be added in the codebase
  const div = document.createElement("div");
  const title = document.createElement("span");
  const description = document.createElement("div");
  const finishDate = document.createElement("span");
  const importance = document.createElement("span");
  const finishSatus = document.createElement("input")

//This is used to add attributes to the check box element Aka finishSatus
  const attrinbutes = {
    'class': 'ckackbox',
    'type': 'checkbox',
    'id': 'finishStatus'
  }
  Object.entries(attrinbutes).forEach(([key, value]) => {
    finishSatus.setAttribute(key, value)

  })

//this code set attributes to the elements created
  div.setAttribute("class", "task");
  title.setAttribute("class", "title");
  description.setAttribute("class", "Description")
  finishDate.setAttribute("class", "finishDate")
  importance.setAttribute("class", "importance")
  

//this code sets the context in the elements 
  title.textContent = newTask.value
  description.textContent = newTaskDescription.value
  finishDate.textContent = `Deadline: ${deadline.value}`
  importance.textContent = `Priority: ${priority.value}`

//this line of code appends elements into the div element
  div.append(finishSatus,title, description, finishDate, importance);

//this code selects the Priority div
  const highPriorityTask = document.querySelector(".highPriorityTask");
  const mediumPriorityTask = document.querySelector(".mediumPriorityTask");
  const lowPriorityTask = document.querySelector(".lowPriorityTask");

  
  if (priority.value == "High") {
    highPriorityTask.insertAdjacentElement("afterbegin", div)
  }
  else if (priority.value == "Low") {
    lowPriorityTask.insertAdjacentElement("afterbegin", div)
  }
  else {
    mediumPriorityTask.insertAdjacentElement("afterbegin", div)
  }

}
)