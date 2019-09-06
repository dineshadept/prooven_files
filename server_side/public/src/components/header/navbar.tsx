import * as React from 'react';
import { Link } from 'react-router-dom';
import { Dispatch } from "redux";
import { connect } from "react-redux";
import Logo from '../images/logo.png';
import '../css/default.css';

interface IProps {
    loginInfo: any;
    email: any;
    name: any;
    about_business: any;
    country: any;
    phone: any;
    phrase: any;
    provider_name: any;
    provider_type: any;
    publicKey: any;
    website: any;
  }

class Navbar extends React.Component<IProps> {

    public state = {
        email: "",
        password: "",
      }

public logoutFunction=()=>{
   
    if(localStorage.getItem('email') === ""){
        this.setState({ email: "" });
        localStorage.clear();
    }

    else{
        this.setState({
            email: this.state.email,
        });
    }       
}

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
                                            <li><Link to="/login" onClick={this.logoutFunction}>Logout</Link></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-9 col-md-9 col-sm-7 "/>
                            <div className="col-lg-2 col-md-2 col-sm-3 col-xs-6">
                                <Link className="navbar-brand" to="/login">
                                    <img src={Logo} alt="Logo" />
                                </Link>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    about_business: state.form.about_business,
    country: state.form.country,
    email: state.form.email,
    name: state.form.name,
    phone: state.form.phone,
    phrase: state.form.phrase,
    provider_name: state.form.provider_name,
    provider_type: state.form.provider_type,
    publicKey: state.form.publicKey,
    website: state.form.website,
  });
  
  /**
   * define the dispatch actions
   * @param dispatch the actions to be dispatched
   */
  const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
      loginInfo: (about_business, country, email, name, phone, phrase, provider_name, provider_type, publicKey, website) => dispatch({ type: "loginInfo", value: { about_business, country, email, name, phone, phrase, provider_name, provider_type, publicKey, website } }),
    }
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(Navbar);