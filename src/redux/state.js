// импортируем функцию обновления данных из файла render
import { rerenderEntireTree } from "../render";

//Объект с данными (задачи, выполненные задачи, редактируемая задача)
let state = {
	tasks: [
	],
	complete: [
	],
	edit: [
	]
}
// экспортируем объект state
export default state;

// функция добавляет новую задачу в объект
export let addTask = (id, title, text) => {
	// создаем новый массив передаем в него данные
	let newTask = {
		id: id,
		title: title,
		text: text
	};
	// добавляем массив в конец объекта tasks если заголовок не пустой
	if (newTask.title) {
		state.tasks.push(newTask);
		// обновляем данные (перерисовываем)
		rerenderEntireTree(state);
	} else alert('Введите заголовок заметки!')
}

// функция добавляет выполненную задачу в объект
export let completeTask = (id, title) => {
	// создаем новый массив передаем в него данные
	let comTask = {
		id: id,
		title: title
	};
	// добавляем массив в конец объекта comleted
	state.complete.push(comTask);
	//Ищем по индексу
	const index = state.tasks.findIndex(n => n.id === id);
	if (index !== -1) {
		// удаляем элемент объекта tasks индекс которого передала функция
		state.tasks.splice(index, 1);
	}
	// обновляем данные (перерисовываем)
	rerenderEntireTree(state);
}
// функция удаляет задачу из объекта
export let delTask = (id) => {
	//Ищем по индексу
	const index = state.tasks.findIndex(n => n.id === id);
	if (index !== -1) {
		state.tasks.splice(index, 1);
	}
	// обновляем данные (перерисовываем)
	rerenderEntireTree(state);
}
// функция удаляет выполненную задачу из объекта
export let delCTask = (id) => {
	//Ищем по индексу
	const index = state.complete.findIndex(n => n.id === id);
	if (index !== -1) {
		state.complete.splice(index, 1);
	}
	// обновляем данные (перерисовываем)
	rerenderEntireTree(state);
}
// функция удаляет редактируемую задачу из объекта
export let delETask = () => {
	// очищаем объект (он всегда состоит из 1 элемента)
	state.edit.splice(0, 1);
	// обновляем данные (перерисовываем)
	rerenderEntireTree(state);
}
// функция добавляет задачу в объект для редактирования
export let editTask = (id, title, text) => {
	let newTask = {
		id: id,
		title: title,
		text: text
	};
	// добавляем массив в объект edit для редактирования
	state.edit.push(newTask);
	// обновляем данные (перерисовываем)
	rerenderEntireTree(state);
}