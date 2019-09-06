import * as React from 'react';

class Notifications extends React.Component {

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
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 notification">
                        <div className="col-lg-7 col-md-7 col-sm-12 col-xs-12 recent_activity">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <h2>Email Feedback </h2>
                            </div>
                            <form method="POST" name="myForm" className="my_form" >
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <div className="row">
                                        <div className="col-lg-10 col-md-10 col-sm-10 col-xs-9">
                                            <h3>Unscbscribe</h3>
                                        </div>{/* end of col-7*/}
                                        <div className="col-lg-2 col-md-2 col-sm-2 col-xs-3">
                                            <br />
                                            <label className="switch">
                                                <input type="checkbox" />
                                                <span className="slider round" />
                                            </label>
                                        </div>{/* end of col-2*/}
                                    </div>{/* end of row*/}
                                </div>{/* end of col-12*/}
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <div className="">
                                        <div className="form-group">
                                            <h3>Choose how often you receive emails</h3>
                                            <select className="form-control select-css" id="type2" required>
                                                <option>Weekly.........</option>
                                                <option>UK</option>
                                                <option>USA</option>
                                            </select>
                                        </div>{/* end of form group */}
                                    </div>{/* end of row*/}
                                </div>{/* end of col-12*/}
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <div className="">
                                        <h2>Push notification</h2>
                                    </div>{/* end of row*/}
                                </div>{/* end of col-12*/}
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <div className="row">
                                        <div className="col-lg-10 col-md-10 col-sm-10 col-xs-9">
                                            <h3>Private Messages</h3>
                                        </div>{/* end of col-7*/}
                                        <div className="col-lg-2 col-md-2 col-sm-2 col-xs-3">
                                            <br />
                                            <label className="switch">
                                                <input type="checkbox" />
                                                <span className="slider round" />
                                            </label>
                                        </div>{/* end of col-2*/}
                                    </div>{/* end of row*/}
                                </div>{/* end of col-12*/}
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <div className="row">
                                        <div className="col-lg-10 col-md-10 col-sm-10 col-xs-9">
                                            <h3>Replies to my post</h3>
                                        </div>{/* end of col-7*/}
                                        <div className="col-lg-2 col-md-2 col-sm-2 col-xs-3">
                                            <br />
                                            <label className="switch">
                                                <input type="checkbox" />
                                                <span className="slider round" />
                                            </label>
                                        </div>{/* end of col-2*/}
                                    </div>{/* end of row*/}
                                </div>{/* end of col-12*/}
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <div className="row">
                                        <div className="col-lg-10 col-md-10 col-sm-10 col-xs-9">
                                            <h3>replies to post i follow</h3>
                                        </div>{/* end of col-7*/}
                                        <div className="col-lg-2 col-md-2 col-sm-2 col-xs-3">
                                            <br />
                                            <label className="switch">
                                                <input type="checkbox" />
                                                <span className="slider round" />
                                            </label>
                                        </div>{/* end of col-2*/}
                                    </div>{/* end of row*/}
                                </div>{/* end of col-12*/}
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <div className="">
                                        <h2>Message notification</h2>
                                    </div>{/* end of row*/}
                                </div>{/* end of col-12*/}
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <div className="row">
                                        <div className="col-lg-10 col-md-10 col-sm-10 col-xs-9">
                                            <h3>Allow messages from people outside of my network</h3>
                                        </div>{/* end of col-7*/}
                                        <div className="col-lg-2 col-md-2 col-sm-2 col-xs-3">
                                            <br />
                                            <label className="switch">
                                                <input type="checkbox" />
                                                <span className="slider round" />
                                            </label>
                                        </div>{/* end of col-2*/}
                                    </div>{/* end of row*/}
                                </div>{/* end of col-12*/}
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <div className="row">
                                        <div className="col-lg-10 col-md-10 col-sm-10 col-xs-9">
                                            <h3>Allow messages from people inside of my network</h3>
                                        </div>{/* end of col-7*/}
                                        <div className="col-lg-2 col-md-2 col-sm-2 col-xs-3">
                                            <br />
                                            <label className="switch">
                                                <input type="checkbox" />
                                                <span className="slider round" />
                                            </label>
                                        </div>{/* end of col-2*/}
                                    </div>{/* end of row*/}
                                </div>{/* end of col-12*/}
                            </form>
                        </div> {/* end of col-6 */}
                        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 ">
                            <br /><br />
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 icons_resources ">
                                <ul>
                                    <li>  <p><i className="fa fa-file" /> Terms of use</p></li>
                                    <li>  <p><i className="fa fa-key" /> Privacy policy</p></li>
                                    <li>  <p><i className="fa fa-question" />Help center</p></li>
                                    <li>  <p><i className="fa fa-phone" />Contact us</p></li>
                                </ul>
                            </div>{/* end of col-6 */}
                        </div>
                    </div> {/* end of col-12 */}
                </div> {/* end of container */}
            </div>
        );
    }
}

export default Notifications;