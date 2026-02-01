import React from 'react'
import "./footer.css"
const Footer = () => {
  return (
    <footer>
        <div className="upper-footer">
          <div>
            <ul>
              <li>About Us</li>
              <li>Locations</li>
              <li>Teams</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Join Us</li>
              <li>Job Opening</li>
              <li>Our Values</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Privacy Policies</li>
              <li>Cookies and Similar Technologies Policy</li>
            </ul>
          </div>
          <div>
            <div className="search-wrapper">
              <input type="text" placeholder="Start your job search here" />
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>
          </div>
        </div>
        <div className="divider"></div>
        <div className="down">
          <p>
            Connect with us: <i className="fa-brands fa-linkedin"></i>
          </p>
        </div>
      </footer>
  )
}

export default Footer
