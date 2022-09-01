import React from 'react';
//подключаем модуль css
import s from './TaskPageEdit.module.css'

const TaskPageEdit = (props) => {
	{/*получаем данные из полей ввода*/}
	let editTaskTitle = React.createRef();
	let editTaskText = React.createRef();
	{/*функция удаляет отредактированную задачу из объекта edit(редактируемая задача всегда одна)*/}
	let delETask = () => {
		props.delETask();
	}
	{/*функция добавляет отредактированную задачу в список новых и очищает буфер*/}
	let editTask = () => {
		let id = props.id;
		let title = editTaskTitle.current.value;
		let text = editTaskText.current.value;
		{/*добавляет*/}
		props.addTask(id, title, text);
		{/*очищает*/}
		delETask();
	}
	return (
		<div className={s.formWrapper}>
			<textarea  ref={editTaskTitle} className={s.textareaTitle}>{props.title}</textarea>
			<textarea ref={editTaskText} className={s.textareaText}>{props.text}</textarea>
			{/*кнопка вызывает вышеупомянутую функцию*/}
			<button onClick={editTask} className={s.formBtn}>
				<img src="add.svg" alt="add" />
				<span>Edit</span>
			</button>
		</div>
	);
}
export default TaskPageEdit;