import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// импортируем данные из объекта state
import { addTask } from './redux/state';
import { completeTask } from './redux/state';
import { delTask } from './redux/state';
import { delCTask } from './redux/state';
import { editTask } from './redux/state';
import { delETask } from './redux/state';
// экспортируем страницу с актуальными данными
export let rerenderEntireTree = (state) => {
	const root = ReactDOM.createRoot(document.getElementById('root'));
	root.render(
		<React.StrictMode>
			{/*передаем данные в файл App*/}
			<App state={state}
				addTask={addTask}
				completeTask={completeTask}
				delTask={delTask}
				delCTask={delCTask}
				delETask={delETask}
				editTask={editTask} />
		</React.StrictMode>
	);
}