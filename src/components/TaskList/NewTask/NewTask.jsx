//подключаем css из модуля
import s from './NewTask.module.css'
// импортируем окно в котором будут отображаться новые сообщения
import Task from './Task/Task';

const NewTask = (props) => {
	{/*распаковываем объект tasks и отправляем функции и нужный массив разбитый на 
	эементы в окно, в которм взаимодействуем со списком задач*/}
	let taskElements =
		props.task.state.tasks.map(p => <Task
			id={p.id}
			title={p.title}
			text={p.text}
			completeTask={props.completeTask}
			delTask={props.delTask} 
			editTask={props.editTask}/>)

	return (
		<div className={s.tasksList}>
			<div className={s.taskListWrapper}>
				<div className={s.newTask}>
					<h3 className={s.taskTitle}>New</h3>
					{/*подключаем обработанное окно с новыми задачами*/}
					{taskElements}
				</div>
			</div>
		</div>
	);
}
//экспортируем модуль
export default NewTask;