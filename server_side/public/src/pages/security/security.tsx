import * as  React from 'react';
import axios from "../../axios";
import '../css/main.css';

class Security extends React.Component {

    public componentDidMount() {
        axios.post(`https://us-central1-prooven1-3a324.cloudfunctions.net/createScream`)
            .then(res => {
                console.log(res);
            });
    }

    public render() {

        return (
            <div className="container security-cl">
                <div className="top-head">
                    <h2>Settings</h2>
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 ">
                            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6 icons_circle text-center">
                                <h1><i className="fa fa-shield" /></h1>
                                <h3>Security</h3>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6 icons_circle text-center">
                                <h1><i className="fa fa-bell-o" /></h1>
                                <h3>Notifications</h3>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6 icons_circle text-center">
                                <h1><i className="fa fa-pencil-square-o" /></h1>
                                <h3>Feedback</h3>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6 icons_circle text-center">
                                <h1><i className="fa fa-sign-out" /></h1>
                                <h3>Logout</h3>
                            </div>
                        </div>
                    </div>
                    <div className="row security-part">
                        <div className="col-md-8 background-cl">
                            <div className="inner-list">
                                <div className="row separate-cl">
                                    <div className="col-md-12">
                                        <h3>Privacy</h3>
                                    </div>
                                </div>
                                <div className="row separate-cl">
                                    <div className="col-md-12">
                                        <h3>Login Activity</h3>
                                        <p className="activity-cl">Date of Last Login: 6/25/2019 at 10:10 PM</p>
                                    </div>
                                </div>
                                <div className="row separate-cl">
                                    <div className="col-md-12">
                                        <h3>Private Key / Password</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 icons_resources">
                            <ul>
                                <li><p><i className="fa fa-file-text-o" /> Terms of Use</p></li>
                                <li><p><i className="fa fa-key" /> Privacy Policy</p></li>
                                <li><p><i className="fa fa-question" /> Help Center</p></li>
                                <li><p><i className="fa fa-phone" /> Contact Us</p></li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default Security;
