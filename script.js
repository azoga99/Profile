function generateAddTaskForm() {
  // создал элемент формы
  var form = document.createElement("form");

  var TaskDiv = document.createElement("div"); //создал div для формы ввода задачи
  TaskDiv.setAttribute("class", "TaskDiv");
  TaskDiv.style.position = "relative";
  TaskDiv.style.width = "447px";
  TaskDiv.style.height = "117px";
  TaskDiv.style.background = "rgba(38, 50, 74, 0.5)";
  TaskDiv.style.borderRadius = "27px";
  form.appendChild(TaskDiv);

  // создал элемент ввода для названия задачи
  var TaskInput = document.createElement("input"); //создал элемент input
  TaskInput.setAttribute("type", "text"); //назначил input атрибут type со значением "text"
  TaskInput.setAttribute("name", "TaskInput"); //назначил input атрибут name со значением "taskName"
  TaskInput.setAttribute("placeholder", "Название задачи"); //назначил input атрибут placeholder со значением "Введите название задачи"
  TaskInput.setAttribute("class", "NameTask");
  TaskInput.style.position = "absolute";
  TaskInput.style.fontSize = "18px";
  TaskInput.style.margin = "31px 19px";
  TaskInput.style.background = "transparent";
  TaskInput.style.border = "none";
  TaskDiv.appendChild(TaskInput);

  // // создать элемент кнопки для добавления задачи
  // var addButton = document.createElement("button"); //создал кнопку
  // addButton.setAttribute("type", "submit");
  // addButton.setAttribute("class", "BtnAdd"); //назначил кнопке атрибут со значением "submit"
  // addButton.innerText = "Добавить"; //присвоил кнопке текст "Добавить задачу"
  // form.appendChild(addButton); //добавил созданный элемент в конец формы

  // добавить обработчик событий для отправки формы
  form.addEventListener("submit", function (event) {
    event.preventDefault(); // предотвратил отправку формы
    addTaskToList(taskInput.value); // добавил задачу в список
    form.style.display = "none"; // скрыл форму
    addTaskButton.style.display = "block";
  });

  // вернул сгенерированную форму
  return form;
}

function addTaskToList(taskName) {
  // получил список задач
  var taskList = document.getElementById("taskList");
  taskList.style.position = "absolute";
  taskList.style.left = "220px";

  // создал элемент задачи
  var taskItem = document.createElement("li"); //создал элемент списка
  taskItem.setAttribute("class", "taskLI"); //назначил всем элементам списка класс с именем "taskLI"

  // создать элемент чекбокса
  var checkbox = document.createElement("input"); //создал элемент input
  checkbox.setAttribute("type", "checkbox"); //назначил input атрибут type со значением "checkbox"
  taskItem.appendChild(checkbox); //добавил чекбокс, к выше созданному, элементу списка

  // создать текстовое содержимое задачи
  var taskText = document.createTextNode(taskName); //задал текстовое содержимое в элменет списка
  taskItem.appendChild(taskText); //добавил этот текст в li

  // добавить задачу в список
  taskList.appendChild(taskItem);
}

var addTaskButton = document.getElementById("addTaskButton"); //выбрал кнопку, которая запускает все выше созданные функции

addTaskButton.addEventListener("click", function () {

  var form = generateAddTaskForm(); //генерирую форму
  var taskContainer = document.getElementById("taskContainer"); //выбрал div, в который будет записываться форма
  taskContainer.style.position = "absolute";
  taskContainer.style.left = "210px";
  taskContainer.appendChild(form); //добавил форму в div


  if(form.style.display !== "none"){
    addTaskButton.style.display = "none";
  };
  
});
