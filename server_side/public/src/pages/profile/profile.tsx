import * as  React from 'react';
import { Link } from 'react-router-dom';
import { Dispatch } from "redux";
import { connect } from "react-redux";
import QR from '../images/QR.png';
import axios from "../../axios";
import '../css/main.css';
import Navbar from "../../components/header/navbar";
import Footer from "../../components/footer/footer";

interface IProps {
    about_business: any,
    country: any,
    email: any,
    name: any,
    phone: any,
    phrase: any,
    provider_name: any,
    provider_type: any,
    publicKey: any,
    website: any,
    loginInfo: any;
}

class Profile extends React.Component<IProps> {

    public state = {
        phrase: false,
        publicKey: false,
        on: false, 
        listData:[]      
    }

    public toggle = () => {
        this.setState({
            on: !this.state.on,
            phrase: true
        })
    }

    public privateKey() {
        this.setState({ phrase: true });
    }

    public publicKey() {
        this.setState({ publicKey: true });
    }

     public componentDidMount=()=>{
        axios.post(`api/list_candidates`)
          .then(res => {
            console.log(res);
		const list = Object.values(res.data);	
		this.setState({ listData : list});
          });
      }
    public render() {		
        return (
            <div>
                <Navbar />
                <div className="body_offwhite">     
                    <div className="container my_container">                                                           
                        <p className="backLink"><Link to="/dashboard"><i className="fa fa-arrow-circle-left" aria-hidden="true"/> Back</Link></p> 
                        <ul className="nav nav-tabs">
                            <li className="active" data-toggle="modal" data-target="#myModal"><a data-toggle="tab" href="#myprofile"><i className="fa fa-user" aria-hidden="true" id="tab-icon" /> My Profile</a></li>
                            <li data-toggle="modal" data-target="#myModal"><a data-toggle="tab" href="#institutionprofile"><i className="fa fa-university" aria-hidden="true" id="tab-icon" /> My Institution Profile</a></li>
                        </ul>
                        <div className="tab-content">
                            <div id="myprofile" className="tab-pane fade in active">
                                <h3 className="name-cl">My Profile</h3>
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 ">
                                    <div className="row">
                                        <div className="col-lg-7 col-md-7 col-sm-12 col-xs-12">
                                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 pdg_25 bkg_white">
                                                <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 user-image text-center ">
                                                    <h1> <i className="fa fa-user-circle-o" /></h1>
                                                    <h4 className=""><Link to="">Upload Photo</Link></h4>
                                                </div>
                                                <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12 user-image ">
                                                    <br />
                                                    <h3>{this.props.name}</h3>
                                                    <hr />
                                                </div>
                                            </div>
                                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12"><br /></div>
                                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 pdg_25 bkg_white qr">
                                                <h3> Blockchain Credentials </h3>
                                                <div className="qr-img">
                                                    <img src={QR} alt="QR" />
                                                    <br /><br />
                                                    <p><b>Public Key </b><span className="click-cl" /></p>
                                                    <p>{this.props.publicKey}</p>
                                                    <p><b>Private Key Phrase </b><span className="click-cl" onClick={this.toggle} >
                                                        {this.state.phrase && this.state.on ? <span className="show_hide">hide</span> : <span className="show_hide">show</span>}
                                                    </span></p>
                                                    {this.state.phrase && this.state.on ? <p>{this.props.phrase}</p> : null}
                                                    <br />
                                                </div>
                                            </div>
                                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12"><br /> </div>
                                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 pdg_25 bkg_white ">
                                                <h3>Education</h3>
                                            </div>
                                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12"><br /> </div>
                                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 pdg_25 bkg_white ">
                                                <h3>Employment</h3>
                                                <h4>{this.props.name}</h4>
                                                <h4>{this.props.provider_name}</h4>
                                            </div>
                                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12"><br /> </div>                                          
                                        </div>
                                        <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12 ">
                                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 pdg_25 bkg_white address mt-20">
                                                <div className="col-lg-7 col-md-7 col-sm-12 col-xs-12">
                                                    <h3> Address</h3>
                                                    <Link to="#">Manage All Addresses</Link>
                                                </div>
                                                <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12">
                                                    <h4><Link to="#">Update | Remove</Link></h4>
                                                </div>
                                            </div>
                                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12"><br /></div>
                                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 pdg_25 bkg_white address">
                                                <div className="col-lg-7 col-md-7 col-sm-12 col-xs-12">
                                                    <div className="row">
                                                        <h3> Email </h3>
                                                        <h5>{this.props.email}</h5>
                                                        <h4>Primary</h4>
                                                        <p>To update an email address, you must have at least two email address on file.</p>
                                                    </div>
                                                </div>
                                                <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12">
                                                    <h4><Link to="#">Update | Remove</Link></h4>
                                                </div>
                                            </div>
                                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12"><br />   </div>
                                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 pdg_25 bkg_white address">
                                                <h3> Phone </h3>
                                                <div className="col-lg-7 col-md-7 col-sm-12 col-xs-12">
                                                    <div className="row">
                                                        <h4>{this.props.phone}</h4>
                                                        <h4>Mobile, Primary</h4>
                                                    </div>
                                                </div>
                                                <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12">
                                                    <h4><Link to="#">Update | Remove</Link></h4>
                                                </div>

                                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12"> <hr /></div>
                                                <div className="col-lg-7 col-md-7 col-sm-12 col-xs-12">
                                                    <div className="row">
                                                        <h4>{this.props.phone}</h4>
                                                        <h4>Mobile, Primary</h4>
                                                    </div>
                                                </div>
                                                <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12">
                                                    <h4><Link to="#">Update | Remove</Link></h4>
                                                </div>
                                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                    <div className="row"><h4>Select update to manage communication preferances</h4>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12"><br />   </div>
                                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 pdg_25  address">
                                                <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12 icons_circle text-center">
                                                    <h1><i className="fa fa-cog" /></h1>
                                                    <h3>Settings</h3>
                                                </div>
                                                <div className="col-lg-7 col-md-7 col-sm-12 col-xs-12 icons_resources ">
                                                    <ul>
                                                        <li>  <p><i className="fa fa-file" /> Terms of use</p></li>
                                                        <li>  <p><i className="fa fa-key" /> privacy policy</p></li>
                                                        <li>  <p><i className="fa fa-question-circle-o" />help center</p></li>
                                                        <li>  <p><i className="fa fa-phone" />contact us</p></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="institutionprofile" className="tab-pane fade">
                                <h3 className="name-cl">My Institution Profile</h3>
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 ">
                                    <div className="row">
                                        <div className="col-lg-7 col-md-7 col-sm-12 col-xs-12">
                                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 pdg_25 bkg_white">
                                                <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 user-image text-center ">
                                                    <h1> <i className="fa fa-user-circle-o" /></h1>
                                                    <h4 className=""><Link to="">Upload Photo</Link></h4>
                                                </div>
                                                <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12 user-image ">
                                                    <br />
                                                    <h3>{this.props.name}</h3>
                                                    <hr />
                                                </div>
                                            </div>
                                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12"><br /></div>
                                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 pdg_25 bkg_white qr">
                                                <h3> Blockchain Credentials </h3>
                                                <div className="qr-img">
                                                    <img src={QR} alt="QR" />
                                                    <br /><br />
                                                    <p><b>Public Key </b><span className="click-cl" /></p>
                                                    <p>{this.props.publicKey}</p>
                                                    <p><b>Private Key Phrase </b><span className="click-cl" onClick={this.toggle} >
                                                        {this.state.phrase && this.state.on ? <span className="show_hide">hide</span> : <span className="show_hide">show</span>}
                                                    </span></p>
                                                    {this.state.phrase && this.state.on ? <p>{this.props.phrase}</p> : null}
                                                    <br />
                                                </div>
                                            </div>
                                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12"><br /> </div>
                                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 pdg_25 bkg_white ">
                                                <h3>Education</h3>
                                            </div>
                                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12"><br /> </div>
                                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 pdg_25 bkg_white ">
                                                <h3>Employment</h3>
                                                <h4>{this.props.name}</h4>
                                                <h4>{this.props.provider_name}</h4>
                                            </div>
                                        </div>
                                        <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12 ">
                                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 pdg_25 bkg_white address mt-20">
                                                <div className="col-lg-7 col-md-7 col-sm-12 col-xs-12">
                                                    <h3> Address</h3>
                                                    <Link to="#">Manage All Addresses</Link>
                                                </div>
                                                <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12">
                                                    <h4><Link to="#">Update | Remove</Link></h4>
                                                </div>
                                            </div>
                                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12"><br /></div>
                                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 pdg_25 bkg_white address">
                                                <div className="col-lg-7 col-md-7 col-sm-12 col-xs-12">
                                                    <div className="row">
                                                        <h3> Email </h3>
                                                        <h5>{this.props.email}</h5>
                                                        <h4>Primary</h4>
                                                        <p>To update an email address, you must have at least two email address on file.</p>
                                                    </div>
                                                </div>
                                                <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12">
                                                    <h4><Link to="#">Update | Remove</Link></h4>
                                                </div>
                                            </div>
                                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12"><br />   </div>
                                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 pdg_25 bkg_white address">
                                                <h3> Phone </h3>
                                                <div className="col-lg-7 col-md-7 col-sm-12 col-xs-12">
                                                    <div className="row">
                                                        <h4>{this.props.phone}</h4>
                                                        <h4>Mobile, Primary</h4>
                                                    </div>
                                                </div>
                                                <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12">
                                                    <h4><Link to="#">Update | Remove</Link></h4>
                                                </div>
                                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12"> <hr /></div>
                                                <div className="col-lg-7 col-md-7 col-sm-12 col-xs-12">
                                                    <div className="row">
                                                        <h4>{this.props.phone}</h4>
                                                        <h4>Mobile, Primary</h4>
                                                    </div>
                                                </div>
                                                <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12">
                                                    <h4><Link to="#">Update | Remove</Link></h4>
                                                </div>
                                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                    <div className="row"><h4>Select update to manage communication preferances</h4>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12"><br />   </div>
                                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 pdg_25  address">
                                                <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12 icons_circle text-center">
                                                    <h1><i className="fa fa-cog" /></h1>
                                                    <h3>Settings</h3>
                                                </div>
                                                <div className="col-lg-7 col-md-7 col-sm-12 col-xs-12 icons_resources ">
                                                    <ul>
                                                        <li>  <p><i className="fa fa-file" /> Terms of use</p></li>
                                                        <li>  <p><i className="fa fa-key" /> privacy policy</p></li>
                                                        <li>  <p><i className="fa fa-question-circle-o" />help center</p></li>
                                                        <li>  <p><i className="fa fa-phone" />contact us</p></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
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

export default connect(mapStateToProps, mapDispatchToProps)(Profile);