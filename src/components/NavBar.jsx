import React from 'react';
import './components.css';
import { Route, Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <div>
      <nav className='navCont'>
        <ul className='liCont'>
          <li className='listItem'><Link to="/">Home</Link></li>
          <li className='listItem'><Link to="/AboutUs">About Us</Link></li>
          <li className='listItem'><Link to="/AboutUs">Contact Us</Link></li>
          <li className='listItem'><Link to="/AboutUs">Feedback</Link></li>
          <li style={{ borderRadius: "20px",border:"2px solid black" }} className='listItem'><select name="cars" id="cars">
            <option value="volvo">Gaming</option>
            <option value="saab">Housing</option>
            <option value="opel">Office</option>
            <option value="audi">School</option>
            <option value="audi">Personal Work</option>
            <option value="audi">College</option>
            <option value="audi">Education</option>
          </select></li>
        </ul>
      </nav>
    </div>
  );
}
