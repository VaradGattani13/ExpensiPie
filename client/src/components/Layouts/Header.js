import React from 'react'
import {Link} from 'react-router-dom'
const Header = () => {
    return (
        <>
          <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarTogglerDemo01"
                aria-controls="navbarTogglerDemo01"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                <Link className="navbar-brand" to="/">
                  Expense Management
                </Link>
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                
                    <Link
                    to='/user'
                    className='nav-link active'
                    aria-current='page'>
                       User
                    </Link>
                  
                  </li>
                  {/* <li className="nav-item">
                    <button className="btn btn-primary" onClick={logoutHandler}>
                      Logout
                    </button>
                  </li> */}
                </ul>
              </div>
            </div>
          </nav>
        </>
      );
}

export default Header