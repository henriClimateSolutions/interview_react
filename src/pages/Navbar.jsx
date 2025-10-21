import '../css/Navbar.css'
import { useNavigate } from 'react-router-dom'

export const Navbar = () => {
	const nav = useNavigate()
	return (
		<nav>
			<h1 onClick={() => nav("/")}>Climate Solutions</h1>
			<ul id="nav-menu">
				<li>Projects</li>
				<li>Documents</li>
				<li onClick={(e) => nav("/about-us")}>About Us</li>
			</ul>
			<button onClick={() => nav("/login")}>Login</button>
		</nav>
	)
}
