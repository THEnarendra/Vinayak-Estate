import React, { useState } from "react";
import apartments from "../../Data/ApartmentData";
import Apartment from "./Apartment";
import './Apartment.css'

export default function Apartments() {
	const [allApartments] = useState(apartments);

	return (
		<div className="main-apartment" id="apartments" >
			<p className="apartment-heading"  style={{paddingTop: "100px"}}>
				Properties in Jaipur
			</p>
			<div className="apartments-container">
				<div className="apartment-list">
					{allApartments.map((oneApartment) => (
						<Apartment
							key={oneApartment.id}
							title={oneApartment.title}
							image={oneApartment.image}
							price={oneApartment.price}
							bedrooms={oneApartment.bedrooms}
							bathrooms={oneApartment.bathrooms}
						/>
					))}
				</div>
			<div className="apartment-footer">
				<div  className="viewButton">
					<button className="apartment-btn">
						View All Apartments
					</button>
				</div>
			</div>
			</div>
		</div>
	);
}
