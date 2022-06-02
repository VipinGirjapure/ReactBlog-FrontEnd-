import React from "react";
import { BrowserRouter,NavLink, Route, Routes } from "react-router-dom";
import Home from "./Home";
import '../App.css'
import Technology from "./Technology";
import Bollywood from "./Bollywood";
import Fitness from "./Fitness";
import Sports from "./Sports";
import Hollywood from "./Hollywood";
const HeaderNavBar = () => {

    return (
        <div>

        <header>
            <div className='heading'>
                <p className='word1'>The</p>
                <p className='word2'>Siren</p>
            </div>
            {/* <div className='bars'><i className="fas fa-bars "></i></div> */}

<BrowserRouter>
<div className="navBar">

<NavLink to="/" className="navItems" > Home </NavLink>
<NavLink to="/bollywood" className="navItems" > Bollywood </NavLink>
<NavLink to="/hollywood" className="navItems" > Hollywood </NavLink>
<NavLink to="/technology" className="navItems" > Technology </NavLink>
<NavLink to="/fitness" className="navItems" > Fitness</NavLink>
<NavLink to="/sports" className="navItems" > Sports</NavLink>

</div>
<hr className="navHr"/>

<Routes>

   
    <Route exact path = "/" element={<Home/>} />
    <Route exact path = "/bollywood" element={<Bollywood/>} />
    <Route exact path = "/hollywood" element={<Hollywood/>} />
    <Route exact path = "/technology" element={<Technology/>} />
    <Route exact path = "/fitness" element={<Fitness/>} />
    <Route exact path = "/sports" element={<Sports/>} />
    <Route path="*" element={<h6 align="center">Something went wrong !</h6>} />

</Routes>

</BrowserRouter>
        </header>
        
<div className="container">
  <footer className="row row-cols-5 py-5 my-5 border-top">
    <div className="col">
      <a href="/" className="d-flex align-items-center mb-3 link-dark text-decoration-none">
        <svg className="bi me-2" width="40" height="32" href="#bootstrap"></svg>
      </a>
      <p className="text-muted">&copy; 2022</p>
    </div>

    <div className="col">

    </div>

    <div className="col">
      <h5>Popular Categories</h5>
      <ul className="nav flex-column">
        <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-muted">Headlines</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted" target="_blank">Bollywood</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted" target="_blank">Hollywood</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted"target="_blank"> Technolgy</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted" target="_blank">Fitness</a></li>
      </ul>
    </div>

    <div className="col">
      <h5>Trending</h5>
      <ul className="nav flex-column">
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Tata Ipl</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Summer</a></li>
        <li className="nav-item mb-2"><a href="https://timesofindia.indiatimes.com/world/europe/russia-ukraine-war-live-updates-may-7/liveblog/91387978.cms" target="_blank" className="nav-link p-0 text-muted">Russia-Ukraine War</a></li>
        <li className="nav-item mb-2"><a href="https://timesofindia.indiatimes.com/business/cryptocurrency/cryptocurrency-price-in-india-today-live" className="nav-link p-0 text-muted"  target="_blank">Cryptocurrency Price in India</a></li>
        <li className="nav-item mb-2"><a href="https://timesofindia.indiatimes.com/life-style/events/happy-mothers-day-2022-top-50-wishes-messages-images-and-quotes-to-share-with-your-mom-to-make-her-feel-special/articleshow/91349384.cms" className="nav-link p-0 text-muted" target="_blank">Happy Mother's Day 2022</a></li>
      </ul>
    </div>

    <div className="col">
      <h5>Section</h5>
      <ul className="nav flex-column">
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">About Us</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Advertise with us</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Feedback</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Privacy Policy</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">FAQs</a></li>
      </ul>
    </div>
  </footer>
</div>
       
        </div>
    )
}

export default HeaderNavBar;