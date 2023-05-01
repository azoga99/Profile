function generateAddTaskForm() {
  // создал элемент формы
  var form = document.createElement("form");

  // создал элемент ввода для названия задачи
  var taskInput = document.createElement("input"); //создал элемент input
  taskInput.setAttribute("type", "text"); //назначил input атрибут type со значением "text"
  taskInput.setAttribute("name", "taskName"); //назначил input атрибут name со значением "taskName"
  taskInput.setAttribute("placeholder", "Введите название задачи"); //назначил input атрибут placeholder со значением "Введите название задачи"
  form.appendChild(taskInput); //добавил созданный элемент в конец формы

  // создать элемент кнопки для добавления задачи
  var addButton = document.createElement("button"); //создал кнопку
  addButton.setAttribute("type", "submit"); //назначил кнопке атрибут со значением "submit"
  addButton.innerText = "Добавить"; //присвоил кнопке текст "Добавить задачу"
  form.appendChild(addButton); //добавил созданный элемент в конец формы

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
  taskContainer.style.left = "220px";
  taskContainer.appendChild(form); //добавил форму в div


  if(form.style.display !== "none"){
    addTaskButton.style.display = "none";
  };
  
});
