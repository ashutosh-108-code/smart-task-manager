document.querySelector(".submit_btn").addEventListener("click", (e) => {
  e.preventDefault();
  const newTask = document.getElementById("title");
  const newTaskDescription = document.getElementById("Description");
  const deadline = document.getElementById("Deadline");
  const priority = document.getElementById("Priority");
  console.log(newTaskDescription.value, newTask.value, deadline.value, priority.value);


  if (newTask.value.trim() === "") {
    return
  }
  const div = document.createElement("div");
  const title = document.createElement("span");
  const description = document.createElement("div");
  const finishDate = document.createElement("span");
  const importance = document.createElement("span");
  const finishSatus = document.createElement("input")

  const attrinbutes = {
    'class': 'ckackbox',
    'type': 'checkbox',
    'id': 'finishStatus'
  }

  div.setAttribute("class", "task");
  title.setAttribute("class", "title");
  description.setAttribute("class", "Description")
  finishDate.setAttribute("class", "finishDate")
  importance.setAttribute("class", "importance")
  Object.entries(attrinbutes).forEach(([key, value]) => {
    finishSatus.setAttribute(key, value)

  });


  title.textContent = newTask.value
  description.textContent = newTaskDescription.value
  finishDate.textContent = `Deadline: ${deadline.value}`;
  importance.textContent = `Priority: ${priority.value}`

  div.append(finishSatus,title, description, finishDate, importance);
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