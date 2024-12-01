import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Navbar.css'
import '@fortawesome/fontawesome-free/css/all.min.css';


export default function Navbar() {
	const [menu, setMenu] = useState(true);

	const showMenu = () => {
		setMenu(!menu);
	};

	return (
		<>
		<nav>
			<div className="logo">
				<a href="#!">Vinayak E-state</a>
			</div>
			<div className={menu ? "nav-links" : "nav-links show"}>
				<div className="nav-link">
					<Link
						to="/"
						onClick={() => showMenu()}
					>
						Home
					</Link>
				</div>
				<div className="nav-link">
					<Link
						to="/aboutus"
						onClick={() => showMenu()}
					>
						About
					</Link>
				</div>
				<div className="nav-link">
					<Link
						to="/apartments"
						onClick={() => showMenu()}
					>
						Apartments
					</Link>
				</div>
				<div className="nav-link">
					<Link
						to="/agents"
						onClick={() => showMenu()}
					>
						Our Team
					</Link>
				</div>
				<div className="nav-link">
					<Link
						to="/services"
					>
						Our Services
					</Link>
				</div>
			</div>
			<div className={menu ? "action-links" : "action-links action"}>
				<button>Get Started With Us</button>
			</div>
			<div
				className={menu ? "toggler" : "toggler close"}
				onClick={showMenu}
			>
				<div className="btn-line"></div>
				<div className="btn-line"></div>
				<div className="btn-line"></div>
			</div>
		</nav>
		<a
		href="https://wa.me/7568161580"
		className="whatsapp-icon"
		target="_blank"
		rel="noopener noreferrer"
	>
		<i className="fab fa-whatsapp"></i>
	</a>
	</>
	);
}
