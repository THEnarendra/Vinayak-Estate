import React from 'react'
import './Footer.css'

const Footer = () => {
	return (
		<footer class="footer-section">
			<div class="container">
				<div class="footer-cta pt-5 pb-5">
					<div class="row">
						<div class="col-xl-4 col-md-4 mb-30">
							<div class="single-cta">
								<i class="fas fa-map-marker-alt" style={{ color: "#4e00b7" }}></i>
								<div class="cta-text">
									<h4>Find us</h4>
									<span>Govindam Tower, Govindpura, jaipur, Rajasthan</span>
								</div>
							</div>
						</div>
						<div class="col-xl-4 col-md-4 mb-30">
							<div class="single-cta">
								<i class="fas fa-phone" style={{ color: "#4e00b7" }}></i>
								<div class="cta-text">
									<h4>Call us</h4>
									<span>+91 9660225994</span>
								</div>
							</div>
						</div>
						<div class="col-xl-4 col-md-4 mb-30">
							<div class="single-cta">
								<i class="far fa-envelope-open" style={{ color: "#4e00b7" }}></i>
								<div class="cta-text">
									<h4>Mail us</h4>
									<span>vinayakestate@gmail.com</span>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="footer-content pt-5 pb-5">
					<div class="row">
						<div class="col-xl-4 col-lg-4 mb-50">
							<div class="footer-widget">
								<div class="footer-logo">
									<h2 className='text-light'>Vinayak E-state</h2>
								</div>
								<div class="footer-text">
									<p>We Vinayak Estate are a well established company since 2016 and we do from Planning to Development of your Dream Property.</p>
								</div>
								<div class="footer-social-icon">
									<span>Follow us</span>
									<a href="#"><i class="fab fa-facebook-f facebook-bg"></i></a>
									<a href="#"><i class="fab fa-twitter twitter-bg"></i></a>
									<a href="#"><i class="fab fa-google-plus-g google-bg"></i></a>
								</div>
							</div>
						</div>
						<div class="col-xl-4 col-lg-4 col-md-6 mb-30">
							<div class="footer-widget">
								<div class="footer-widget-heading">
									<h3>Useful Links</h3>
								</div>
								<ul>
									<li><a href="/">Home</a></li>
									<li><a href="/aboutus">about</a></li>
									<li><a href="/services">services</a></li>
									{/* <li><a href="#">Contact</a></li> */}
									{/* <li><a href="#">About us</a></li> */}
									<li><a href="/services">Our Services</a></li>
								</ul>
							</div>
						</div>
						<div class="col-xl-4 col-lg-4 col-md-6 mb-50">
							<div class="footer-widget">
								<div class="footer-widget-heading">
									<h3>Subscribe</h3>
								</div>
								<div class="footer-text mb-25">
									<p>Don’t miss to subscribe to our new feeds, kindly fill the form below.</p>
								</div>
								<div class="subscribe-form">
									<form action="#">
										<input type="text" placeholder="Email Address" />
										<button><i class="fab fa-telegram-plane"></i></button>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="copyright-area">
				<div class="container">
					<div class="row">
						<div class="col-xl-6 col-lg-6 text-center text-lg-left">
							<div class="copyright-text">
								<p>Copyright &copy; 2025, All Right Reserved <a href="/">Vinayak E-state</a></p>
							</div>
						</div>
						<div class="col-xl-6 col-lg-6 d-none d-lg-block text-right">
							<div class="footer-menu">
								<ul>
									<li><a href="#">Terms</a></li>
									<li><a href="#">Privacy</a></li>
									<li><a href="#">Policy</a></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
