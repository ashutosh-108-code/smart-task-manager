function createNewElements(ntask) {
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
    title.textContent = ntask.newTask
    description.textContent = ntask.description
    finishDate.textContent = `Deadline: ${ntask.deadline}`
    importance.textContent = `Priority: ${ntask.priority}`
      //this line of code appends elements into the div element
  div.append(finishSatus, title, description, finishDate, importance);

    //this code selects the Priority div
    const highPriorityTask = document.querySelector(".highPriorityTask");
    const mediumPriorityTask = document.querySelector(".mediumPriorityTask");
    const lowPriorityTask = document.querySelector(".lowPriorityTask");


    if (ntask.priority== "High") {
        highPriorityTask.insertAdjacentElement("afterbegin", div)
    }
    else if (ntask.priority == "Low") {
        lowPriorityTask.insertAdjacentElement("afterbegin", div)
    }
    else { 
        mediumPriorityTask.insertAdjacentElement("afterbegin", div)
    }


}

function saveTask(ntask) {
    let createdTask =
    {
        newtitle: ntask.newTask,
        description: ntask.description,
        deadline: ntask.deadline,
        newPriority: ntask.priority
    }
    const savedData = localStorage.getItem("addedTask") // created a var to check the existing values of user data 
    if (savedData) { // checking if data already exists
        let existingTask = JSON.parse(savedData) || [];
        if (!Array.isArray(existingTask)) {
            existingTask = [];
        }

        existingTask.push(createdTask)

        let addedTaskstring = JSON.stringify(existingTask);
        localStorage.setItem('addedTask', addedTaskstring);
    }
    else {
        // let addedTaskstring = JSON.stringify(createdTask);
        localStorage.setItem('addedTask', JSON.stringify([createdTask]));
    }

}


document.querySelector(".submit_btn").addEventListener("click", (e) => {
  e.preventDefault();

  //This collects the inputs given by the user
  const Task = document.getElementById("title");
  const TaskDescription = document.getElementById("Description");
  const newdeadline = document.getElementById("Deadline");
  const newpriority = document.getElementById("Priority");

  const ntask={
    newTask:Task.value,
    description:TaskDescription.value,
    deadline:newdeadline.value,
    priority:newpriority.value
  }
   if (Task.value.trim() === "") {
    alert("Task title cannot be empty");
    return
  }
  createNewElements(ntask)
  saveTask(ntask)

})