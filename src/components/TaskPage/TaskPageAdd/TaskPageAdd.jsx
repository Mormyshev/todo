import React from 'react';
//подключаем css модуль
import s from './TaskPageAdd.module.css'

//переменная для создания новых id
let idCount = 0;
const TaskPageAdd = (props) => {
	//получаем данные из полей ввода
	let newTaskTitle = React.createRef();
	let newTaskText = React.createRef();
	//функция добавления заметки
	let addTask = () => {
		let id = idCount++;
		let title = newTaskTitle.current.value;
		let text = newTaskText.current.value;
		//передаем данные в функцию, на основании которых формируется заметка
		props.addTask(id, title, text);
	}
	return (
			<div className={s.formWrapper}>
				<h3>Title:</h3>
				{/*поле ввода заголовка заметки*/}
				<input ref={newTaskTitle}
					type="text"
					className={s.input}
					name="text"/>
				<h3>Text:</h3>
				{/*поле ввода текста заметки*/}
				<textarea ref={newTaskText}></textarea>
				{/*кнопка вызывает вышеупомянутую функцию*/}
				<button onClick={addTask} className={s.formBtn}>
					<img src="add.svg" alt="add" />
					<span>Add</span>
				</button>
			</div>
	);
}
//экспортируем элемент
export default TaskPageAdd;