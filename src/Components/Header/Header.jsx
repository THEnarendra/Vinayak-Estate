import React from 'react'
import landingImage from "../../img/landing.jpg";
import './Header.css'

const Header = () => {
  return (
	<>
	<div className="header" id="header">
		<div className="landing-text">
			<div className="cta">
				<p>Find Your New Modern Apartment</p>
			</div>
			<div className="search-bar">
				<input type="text" placeholder="Search Location " />
				<button>Search</button>
			</div>
		</div>
		<div className="landing-image">
			<img src={landingImage} alt="" />
		</div>

	</div>
</>
  )
}

export default Header
