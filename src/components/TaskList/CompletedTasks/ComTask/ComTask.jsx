import React from 'react';
//подключаем модуль css
import s from './ComTask.module.css'

let ComTask = (props) => {

	//объявляем функцию удаления выбранного элемента(по id) из complete
	let delCTask = () => {
		props.delCTask(props.id);
	}
	return (
		<div className={s.task}>
			{/*первый элемент - картинка с галочкой(для красоты)*/}
			<img src="check.svg" className={s.taskImageBtn} alt="task-image-btn" />
			{/*второй элемент - перечеркнутый заголовок задачи*/}
			<span className={s.taskText}>{props.title}</span>
			{/*кнопка, позволяющая удалить выбранный элемент*/}
			<button onClick={delCTask} className={s.taskDelete}>
				<img src="deletebtn.svg" className={s.taskImageBtn} alt="task-image-btn" />
			</button>
		</div>
	);
}
//экспортируем модуль
export default ComTask;