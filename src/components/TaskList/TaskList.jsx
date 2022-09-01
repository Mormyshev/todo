// импортируем окна в которых будут отображаться новые задачи и выполненные 
import CompletedTask from './CompletedTasks/CompletedTask';
import NewTask from './NewTask/NewTask';
//подключаем css из модуля
import s from './TaskList.module.css'

const TaskList = (props) => {
	return (
		<div className={s.tasksList}>
			<div className={s.taskListWrapper}>
				{/*передаем данные дальше по нужным окнам*/}
				<NewTask task={props.state}
					completeTask={props.completeTask}
					delTask={props.delTask}
					editTask={props.editTask} />
				<CompletedTask task={props.state}
					delCTask={props.delCTask} />
			</div>
		</div>
	);
}
//экспортируем модуль
export default TaskList;