
import './App.css';
// импортируем элементы страницы на которые был разбит проект
import Header from './components/Header/Header'
// список задач (новых и выполненных)
import TaskList from './components/TaskList/TaskList';
// окно в котором можно создавать или редактировать задачи
import TaskPage from './components/TaskPage/TaskPage';

const App = (props) => {
	return (
		<div className="App">
			<div className="app-wrapper">
				<Header />
				{/*передаем нужные данные дальше по проекту через props*/}
				<TaskList state={props}
					completeTask={props.completeTask}
					delTask={props.delTask}
					delCTask={props.delCTask} 
					editTask={props.editTask}/>
				<TaskPage state={props} 
				addTask={props.addTask} 
				delETask={props.delETask}/>
			</div>
		</div >
	);
}

export default App;
