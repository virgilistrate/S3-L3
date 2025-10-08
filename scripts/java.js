const form = document.getElementById("arealista");
const deleteTask = function (e) {
  e.target.parentElement.remove();
};
const handleFormSubmit = function (e) {
  e.preventDefault();

  const taskImput = document.getElementById("task");

  const valoreTask = taskImput.value;

  console.log(valoreTask);

  const nuoveTask = document.createElement("div");
  nuoveTask.classList.add("leMietask");

  nuoveTask.innerHTML = `
       
        <p>${valoreTask}</p>
        <button onclick="deleteTask(event)">ELIMINA</button>
    `;

  const container = document.getElementById("TaskAggiunte");
  container.appendChild(nuoveTask);

  form.reset();
};
form.addEventListener("submit", handleFormSubmit);
