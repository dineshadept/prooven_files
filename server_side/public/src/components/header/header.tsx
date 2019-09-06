import * as React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../images/logo.png';
import '../css/default.css';

    
class Header extends React.Component {

    public render() {
        return (
            <div className="header-cl">
                <div className="container-fluid">
                    <nav className="navbar header-top fixed-top navbar-expand-lg">
                        <div className="container mg_5_top">
                            <div className="col-lg-1 col-md-1 col-sm-2 col-xs-6">
                                <ul className="nav menu_header">
                                    <li className="dropdown">
                                        <Link to="#" className="dropdown-toggle" data-toggle="dropdown">
                                         <p id="hexagon" className="toggle_icon"><i className="fa fa-bars"/></p> 
                                        </Link>
                                        <ul className="dropdown-menu">
                                          
                                            <li><Link to={"/login"}>Login</Link></li>
                                            <li><Link to={"/signup"}>Signup</Link></li>
                                            
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-9 col-md-9 col-sm-7 "/>{/* col-lg-9 col-md-9 col-sm-2 */}
                            <div className="col-lg-2 col-md-2 col-sm-3 col-xs-6">
                                <Link className="navbar-brand" to="/login">
                                    <img src={Logo} alt="Logo" />
                                </Link>
                            </div>{/* col-lg-2 col-md-2 col-sm-4 col-xs-6 */}
                        </div>{/* container */}
                    </nav>{/* nav */}
                </div>{/* container fluid */}
            </div>
        );
    }
}

export default Header;
