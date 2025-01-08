import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/home/Home';
import { Navbar } from './components/navbar/Navbar';
import { AboutMe } from './pages/about-me/AboutMe';
import { NotFound } from './pages/error/NotFound';
import { Todo } from './pages/todo/Todo';
import Weather from './pages/weather/Weather';

function App() {
	return (
		<>
			<Navbar heading="ReactJs Projects"/>
			<Routes>
				<Route path='/' Component={()=><Home/>} />
				<Route path='/about-me' Component={()=><AboutMe name="about" heading="About Me"/>} />
				<Route path='/todo-app' Component={()=><Todo name="todo" heading="Todo App"/>} />
				<Route path='/weather-app' Component={()=><Weather name="weather" heading="Weather App"/>} />
				<Route path='*' Component={()=><NotFound/>} />
			</Routes>
		</>
	);
}

export default App;
