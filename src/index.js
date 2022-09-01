import './index.css';
// импортируем объект state (файл с данными) из папки redux
import state from './redux/state';
import {rerenderEntireTree} from "./render";

// функция обновляет страницу с актуальными данными
rerenderEntireTree(state);
