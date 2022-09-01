import React from 'react';
//подключаем css из модуля
import s from './Task.module.css'

const Task = (props) => {
	{/*инициализируем переменные по значениям из массива*/ }
	let id = props.id
	let title = props.title
	let text = props.text

	//объявляем функцию, которая переводит новую задачу в завершенную
	//передаем данные из объекта tasks в объект competed
	let completeTask = () => {
		//вызываем переданную функцию которая хранится в state, передаем в нее данные
		props.completeTask(id, title, text);
	}
	//объявляем функцию, которая удаляет новую задачу
	//удаляет элемент объекта tasks по id
	let delTask = () => {
		//вызываем переданную функцию которая хранится в state, передаем в нее данные
		props.delTask(id);
	}
	//объявляем функцию, которая удаляет новую задачу и передает данные в объект edit
	let editTask = () => {
		//передали данные в объект edit
		props.editTask(id, title, text);
		//удалили из списка новых задач
		delTask()
	}
	return (
		<div className={s.task}>
			{/*кнопка удаляет выбранный элемент из task. Добавляет новый в complete*/}
			<button onClick={completeTask} className={s.taskComleted}>
				<img src="circle.svg" className={s.taskImageBtn} alt="task-image-btn" />
			</button>
			{/*кнопка отображает заголовок задачи на экране. 
				при нажатии удаляет выбранный элемент из объекта tasks и добавляет его в объект edit*/}
			<button onClick={editTask} className={s.taskRead}>
				{props.title}
			</button>
			{/*кнопка удаляет выбранный элемент из объекта tasks*/}
			<button onClick={delTask} className={s.taskDelete}>
				<img src="deletebtn.svg" className={s.taskImageBtn} alt="task-image-btn" />
			</button>
		</div>
	);
}
//экспортируем модуль
export default Task;