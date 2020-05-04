'use strict';

console.log('funguju!');

// # Úkol: Úkolníček

// ## Zadání

// 1. Smažte obsah elementu `todo__tasks` uvnitř souboru `index.html`.
/* <div class="task">
          Vyprat ponožky
        </div>
        <div class="task">
          Naučit se funkce vyššího řádu
        </div>
        <div class="task">
          Nakoupit na víkend
        </div> */
// 2. V JavaScriptu vytvořte pole řetězců `tasks`, které bude reprezentovat seznam úkolů.
const tasks = [
  ['Dodělat cvičení z lekce JavaScriptu.'],
  ['Dodělat cvičení z lekce CSS'],
  ['Zopakovat si Bootstrap.']
]
// 3. Vytvořte funkci `updateTasks`, která zobrazí na stránce seznam úkolů dle toho, co je obsaženo v poli `tasks`.

const toDoTasksElement = document.querySelector('.todo__tasks');

const updateTasks = () => {
  toDoTasksElement.textContent = '';
  for (let i = 0; i < tasks.length; i++) {
    toDoTasksElement.innerHTML += `<div class="task">${tasks[i]}</div>`
  }
};

updateTasks();
// 4. Umožněte uživateli přidat nový úkol pomocí textového políčka. Vždy, když uživatel klikne tlačítko <i>přidat</i>, vložte do pole `tasks` obsah textového políčka a zavolejte funkci `updateTasks`, která aktualizuje vaši stránku.

const btnAddElement = document.querySelector('.btn-add');
const newTaskElement = document.querySelector('#new-task');
const addNewTask = () => {
  const newTask = newTaskElement.value;
  console.log('lky', newTask);
  tasks.push(newTask);
  updateTasks();
}

btnAddElement.addEventListener('click', addNewTask);