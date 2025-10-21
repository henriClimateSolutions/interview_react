import { Routes, Route } from 'react-router-dom'
import './App.css'

import { Navbar } from './Navbar'
import { Login } from './Login'
import { Home } from './Home'

function App() {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path={'/'} element={<Home />} />
				<Route path={'/login'} element={<Login />} />
			</Routes>
		</>
	)
}

export default App
