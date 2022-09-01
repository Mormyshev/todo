import React from 'react';
//импортируем окно в котором будем создавать заметку
import TaskPageAdd from './TaskPageAdd/TaskPageAdd';
//импортируем окно в котором будем редактировать заметку
import TaskPageEdit from './TaskPageEdit/TaskPageEdit';
//подключаем css
import s from './TaskPage.module.css'

let TaskPage = (props) => {
	{/*распаковываем объект edit и отправляем функции и нужный массив разбитый на 
	эементы в окно, в которм редактируем задачу*/}
	let taskEditElements =
		props.state.state.edit.map(p => <TaskPageEdit
			id={p.id}
			title={p.title}
			text={p.text}
			delETask={props.delETask}
			addTask={props.addTask}/>
			)

return (
	<div className={s.taskPageWrapper}>
		{/*передаем данные в окно, в которм добавляем новые задачи*/}
		<TaskPageAdd className={s.taskAdd} addTask={props.addTask} />
		{taskEditElements}
	</div>
);
}
//экспортируем модуль
export default TaskPage;