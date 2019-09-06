import * as React from 'react';
import { Link } from 'react-router-dom';
import { Dispatch } from "redux";
import { connect } from "react-redux";
import Navbar from "../../components/header/navbar";
import Footer from "../../components/footer/footer";
// import axios from "../../axios";
import '../css/main.css';

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
    loginInfo: any,
    userid: any,
}

class Dashboard extends React.Component<IProps>{



    // public state ={
    //     file:"",
    // }

    // public fileUpload=(e)=>{    
    //     e.preventDefault();  
    //     axios.post(`api/read_upload`, {
    //         file: this.state.file,
    //         userid: this.props.userid,
    //         })
    //         .then(res => {
    //           console.log("Success");
    //         });
    // }

    public render() {
        return (
            <div>
                <Navbar />
                <div className="body_offwhite">
                    <div className="container my_container">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 ">
                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 ">
                                <h2 className="name-cl">Hi {this.props.name},</h2>
                            </div>{/* end of col-6 */}

                            <div className="col-lg-3 col-md-3 col-sm-1 col-xs-12" />

                            <div className="col-lg-2 col-md-2 col-sm-5 col-xs-12">
                                <div className="col-lg-6 col-md-6 col-md-6 col-sm-6 col-xs-6 user-image text-center">
                                    <i className="fa fa-user-circle-o" />
                                </div>{/* end of col-md-8 */}
                                <div className="col-lg-6 col-md-6 col-md-6 col-sm-6 col-xs-6 user-image ">
                                    <h2><Link to="/profile" id="listRecordID">Profile</Link></h2>
                                </div>{/* end of col-md-4 */}
                            </div>{/* end of col-2 */}
                            <br /> <br />
                        </div>{/* end of col-12 */}
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 "><br /><br /><br /></div>
                        {/* --------------------end of profile--------------------------- */}
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 ">

                            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6 icons_circle text-center">
                                <Link to="/transcript" id="listRecordID">  <h1><i className="fa fa-file-text-o" /></h1>
                                    <h3>Transcripts</h3>
                                </Link>
                            </div>{/* end of col-3 */}

                            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6 icons_circle text-center">
                                <h1><i className="fa fa-envelope-o" /></h1>
                                <h3>Request Inbox</h3>
                            </div>{/* end of col-3 */}

                            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6 icons_circle text-center">
                                <h1><i className="fa fa-users" /></h1>
                                <h3>users</h3>
                            </div>{/* end of col-3 */}

                            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6 icons_circle text-center">
                                <h1><i className="fa fa-home" /></h1>
                                <h3>market place</h3>
                            </div>{/* end of col-3 */}

                            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6 icons_circle text-center">
                                <h1><i className="fa fa-line-chart" /></h1>
                                <h3>analytics</h3>
                            </div>{/* end of col-3 */}

                            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6 icons_circle  text-center">
                                <h1><i className="fa fa-bell-o " /><span className="icon_circle_alert">1</span></h1>
                                <h3>alerts</h3>
                            </div>{/* end of col-3 */}

                            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6 icons_circle text-center">
                                <h1><i className="fa fa-shield" /></h1>
                                <h3>security</h3>
                            </div>{/* end of col-3 */}

                            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6 icons_circle text-center">
                                <h1><i className="fa fa-user" /></h1>
                                <h3>contacts</h3>
                            </div>{/* end of col-3 */}

                        </div>{/* end of col-12 */}
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 recent_activity">
                                <h2>Recent Activity <span><i className="fa fa-arrow-right" /></span></h2>
                                <table className="table" cellSpacing="0">
                                    <tbody>
                                        <tr>
                                            <td className="activity_date">May 23</td>
                                            <td><span className="activity_heading">SQU*SQ *Press scottsda</span><p><span className="activity_pending">pending</span> Authorization</p></td>
                                            <td>- $ 2.70</td>
                                        </tr>
                                        <tr>
                                            <td className="activity_date">May 21</td>
                                            <td><span className="activity_heading">chevron/bro re</span><p> payment - paypal cash card</p></td>
                                            <td ><h5 className="profit">+ $ 15.00 </h5></td>
                                        </tr>
                                        <tr>
                                            <td className="activity_date">May 19</td>
                                            <td><span className="activity_heading">wizent ach</span><p> direct deposit</p></td>
                                            <td>- $ 2.70</td>
                                        </tr>
                                        <tr>
                                            <td className="activity_date">May 21</td>
                                            <td><span className="activity_heading">chevron/bro re</span><p> payment - paypal cash card</p></td>
                                            <td>- $ 2.70</td>
                                        </tr>
                                        <tr>
                                            <td className="activity_date">May 21</td>
                                            <td><span className="activity_heading">chevron/bro re</span><p> payment - paypal cash card</p></td>
                                            <td>- $ 2.70</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <button className="btn my_btn">See more activity</button>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 ">
                                <br /><br />
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 icons_resources ">
                                    <h2>Resources</h2><br /><br />
                                    <ul>
                                        <li>  <p><i className="fa fa-file" /> My Revenue</p></li>
                                        <li>  <p><i className="fa fa-newspaper-o" /> Recent news</p></li>
                                        <li>  <p><i className="fa fa-truck" />Shipping request</p></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
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
    userid: state.form.userid
});

/**
 * define the dispatch actions
 * @param dispatch the actions to be dispatched
 */
const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        loginInfo: (about_business, country, email, name, phone, phrase, provider_name, provider_type, publicKey, website, userid) => dispatch({ type: "loginInfo", value: { about_business, country, email, name, phone, phrase, provider_name, provider_type, publicKey, website, userid } }),

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
