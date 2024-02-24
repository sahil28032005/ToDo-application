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
          
        </ul>
      </nav> 
    </div>
  );
}
