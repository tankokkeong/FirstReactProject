import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return ( 
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <NavLink exact activeClassName="current" to='/' className="navbar-brand">EasySurvey</NavLink>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">

                </ul>
                <div className="form-inline my-2 my-lg-0">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                <li className="nav-item">
                    <NavLink exact activeClassName="active" to='/' className="nav-link">Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink activeClassName="active" to='/contact' className="nav-link">Contact</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink activeClassName="active" to='/about' className="nav-link">About</NavLink>
                </li>
                </ul>
                
                </div>
            </div>
        </nav>
    );
}

export default Navbar;