//подключаем css из модуля
import s from './CompletedTasks.module.css'
//подключаем модуль в котором отображается список завершенных задач
import ComTask from './ComTask/ComTask';

const CompletedTasks = (props) => {
	{/*распаковываем объект complete и отправляем функции и нужный массив разбитый на 
	эементы в окно, в которм взаимодействуем со списком задач*/}
	let comTaskElements =
		props.task.state.complete.map(p => <ComTask
			id={p.id}
			title={p.title} 
			delCTask={props.delCTask}/>)
	return (
		<div className={s.completedTask}>
			<div className={s.taskListWrapper}>
				<h3 className={s.taskTitle}>Completed</h3>
				{/*подключаем обработанное окно с выполненными задачами*/}
				{comTaskElements}
			</div>
		</div>
	);
}
//экспортируем модуль
export default CompletedTasks;