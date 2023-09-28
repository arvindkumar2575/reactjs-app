import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/home/Home';
import { Navbar } from './components/navbar/Navbar';
import { AboutUs } from './pages/about-us/AboutUs';
import { NotFound } from './pages/error/NotFound';
import { Todo } from './pages/todo/Todo';

function App() {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path='/' Component={Home} />
				<Route path='/about-me' Component={AboutUs} />
				<Route path='/todo' Component={Todo} />
				<Route path='*' Component={NotFound} />
			</Routes>
		</>
	);
}

export default App;
