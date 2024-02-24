import React from 'react'
import './components.css'
export default function AboutUs() {
  return (
    <div>
        <h1>About Us</h1>
        
        <div className="mission">
            <h2>Our Mission</h2>
            <p>At [Company Name], our mission is to [describe your company's overarching goal or purpose].</p>
        </div>
        
        <div className="values">
            <h2>Our Values</h2>
            <ul>
                <li><strong>Customer Satisfaction:</strong> We prioritize meeting and exceeding our customers' expectations.</li>
                <li><strong>Integrity:</strong> We conduct our business with honesty, transparency, and respect.</li>
                <li><strong>Innovation:</strong> We continuously strive to innovate and improve our products/services.</li>
                <li><strong>Community Engagement:</strong> We believe in giving back to the communities we serve.</li>
            </ul>
        </div>
        
        <div className="team">
            <h2>Our Team</h2>
            <div className="member">
                <img src="team-member1.jpg" alt="Team Member 1"/>
                <p>John Doe - CEO</p>
            </div>
            <div className="member">
                <img src="team-member2.jpg" alt="Team Member 2"/>
                <p>Jane Smith - COO</p>
            </div>
        </div>
        
        <div className="contact">
            <h2>Get in Touch</h2>
            <p>We'd love to hear from you! Whether you have a question, feedback, or would like to inquire about our products/services, feel free to contact us.</p>
            <p>Email: info@example.com<br/>
            Phone: 123-456-7890</p>
        </div>
    </div>
  )
}
