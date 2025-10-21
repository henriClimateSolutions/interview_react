import { Routes, Route } from 'react-router-dom'
import './css/App.css'
import './css/index.css'

import { Navbar } from './pages/Navbar'
import { Login } from './pages/Login'
import { Home } from './pages/Home'
import { AboutUs } from './pages/AboutUs.jsx'

function App() {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path={'/'} element={<Home />} />
				<Route path={'/about-us'} element={<AboutUs />} />
				<Route path={'/login'} element={<Login />} />
			</Routes>
		</>
	)
}

export default App
