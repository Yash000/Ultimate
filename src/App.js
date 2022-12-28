import React from 'react';
import About from './components/about';
import Calc from './pages/calc';
import Home from './pages/index';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {
	createBrowserRouter,
	RouterProvider,
	Route,
	Routes,
	Link,
	BrowserRouter,
} from "react-router-dom";


function App() {
	return (
		<div>
			<BrowserRouter>
			<Navbar bg="dark" variant="dark" sticky='top'>
				<Container>
					<Navbar.Brand href="/">Navbar</Navbar.Brand>
					<Nav className="me-auto">
						<Nav.Link as={Link} to="/about">About</Nav.Link>
						<Nav.Link as={Link} to="/calc">Calc</Nav.Link>
					</Nav>
				</Container>
			</Navbar>
			<Routes>
				<Route path='/about' element={<About/>}/>
				<Route path='/calc' element={<Calc/>}/>
				<Route path='/' element={<Home/>}/>
			</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
