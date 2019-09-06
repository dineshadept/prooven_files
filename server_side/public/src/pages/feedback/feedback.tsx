import * as React from 'react';
import '../css/main.css';

class Feedback extends React.Component {

    public render() {
        return (
            <div className="body_offwhite">
                <div className="container my_container">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 ">
                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 ">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 ">
                                <h2>Settings</h2>
                            </div>{/* end of col-12 */}
                        </div>{/* end of col-6 */}
                        <br /> <br />
                    </div>{/* end of col-12 */}
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 "><br /><br /><br /></div>
                    {/* --------------------end of profile--------------------------- */}
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 ">

                        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6 icons_circle text-center">
                            <h1><i className="fa fa-shield" /></h1>
                            <h3>Security</h3>
                        </div>{/* end of col-3 */}

                        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6 icons_circle text-center">
                            <h1><i className="fa fa-bell-o" /></h1>
                            <h3>Notifications</h3>
                        </div>{/* end of col-3 */}

                        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6 icons_circle text-center">
                            <h1><i className="fa fa-pencil-square-o" /></h1>
                            <h3>Feedback</h3>
                        </div>{/* end of col-3 */}

                        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6 icons_circle text-center">
                            <h1><i className="fa fa-sign-out" /></h1>
                            <h3>Logout</h3>
                        </div>{/* end of col-3 */}
                    </div>{/* end of col-12 */}
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="col-lg-7 col-md-7 col-sm-6 col-xs-12 recent_activity">
                            <h2>Submit Feedback </h2><br /><br />

                            <form method="POST" name="myForm" className="my_form" >
                                <div className="form-group">

                                    <select className="form-control select-css" id="type2" required>
                                        <option>Select More messages from jerry</option>
                                        <option>UK</option>
                                        <option>USA</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <textarea className="form-control" id="pwd" placeholder="Enter text here" name="pwd" required />
                                </div>
                                <button type="submit" className="btn btn_feedback">Submit</button>
                            </form>
                        </div> {/* end of col-6 */}
                        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 ">
                            <br /><br />
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 icons_resources ">

                                <ul>
                                    <li>  <p><i className="fa fa-file" /> Terms of use</p></li>
                                    <li>  <p><i className="fa fa-key" /> privacy policy</p></li>
                                    <li>  <p><i className="fa fa-question" />help center</p></li>
                                    <li>  <p><i className="fa fa-phone" />contact us</p></li>
                                </ul>
                            </div>{/* end of col-6 */}
                        </div>
                    </div> {/* end of col-12 */}
                </div> {/* end of container */}
            </div>
        );
    }
}

export default Feedback;