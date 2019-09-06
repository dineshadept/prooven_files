import * as React from 'react';
import '../css/main.css';
import Navbar from "../../components/header/navbar";
import Footer from "../../components/footer/footer";
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { Dispatch } from "redux";
import axios from "../../axios";
import Modal from 'react-modal';

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
interface IMyComponentState { listData: any, selectedFile: any, loader: any, fileError: any, files: any, status: any, modalIsOpen: any, uploadError: any };

class MyTranscript extends React.Component<IProps, IMyComponentState> {

    public constructor(props) {
        super(props);
        this.state = {
            listData: [],
            selectedFile: null,
            loader: false,
            fileError: false,
            files: [],
            status: false,
            modalIsOpen: false,
            uploadError: false
        }
    }

    public componentDidMount = () => {
        this.getCandidates();
        this.setState({ loader: true });
    }

    public getCandidates = () => {
        axios.post(`api/list_candidates`, {
            userid: this.props.userid,
        })
            .then(res => {
                this.setState({ loader: false });
                const list = Object.values(res.data);
                this.setState({ listData: list });
            });
    }

    public openModal = (e) => {
        this.setState({ modalIsOpen: true });
    }
    public closeModal = (e) => {
        this.setState({ modalIsOpen: false });
    }

    public uploadFile = (e) => {
        this.setState({ selectedFile: e.target.files[0] });
        this.setState({ fileError: false });
    }

    public fileUpload = (e) => {
        e.preventDefault();
        const data = new FormData()
        data.append('file', this.state.selectedFile)
        data.append('userid', this.props.userid)
        if (this.state.selectedFile != null) {
            axios.post(`api/read_upload`, data, {
            }).then(res => {
                this.setState({ loader: false });
                this.setState({ status: false });
                this.setState({ modalIsOpen: false });
                this.getCandidates();
            }).catch((err) => {
                console.log(err);
                this.setState({ uploadError : true});
            })
        }
        else {
            this.setState({ fileError: true });
        }
    }

    public render() {
        return (
            <div>
                <Navbar />
                <div className="body_offwhite">
                    {/* {this.state.loader ? <div id="loader" /> : null} */}
                    <div className="container my_container">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 ">
                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 ">
                                <h2>Hi {this.props.name},</h2>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-1 col-xs-12" />
                            <div className="col-lg-2 col-md-2 col-sm-5 col-xs-12">
                                <div className="col-lg-6 col-md-6 col-md-6 col-sm-6 col-xs-6 user-image text-center">
                                    <Link to="/profile" id="listRecordID">  <i className="fa fa-user-circle-o" /></Link>
                                </div>
                                <div className="col-lg-6 col-md-6 col-md-6 col-sm-6 col-xs-6 user-image ">
                                    <h2><Link to="/profile" id="listRecordID">Profile</Link></h2>
                                </div>
                            </div>
                            <br /> <br />
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 "><br /><br /><br /></div>
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 ">
                            <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12 ">
                                <h2>Class Transcripts</h2>
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 bg_white pdg_top">
                                    <div className="">
                                        <div className="col-lg-6 col-md-10 col-sm-6 col-xs-10 ">
                                            <div className="row">
                                                <h4 className="clr_blue">My Transcripts</h4>
                                            </div>
                                        </div>
                                        <div className="col-lg-5 col-md-1 col-sm-5 col-xs-1 " />
                                        <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1 ">
                                            <div className="row">
                                                <div className="btn-group ">
                                                    <button type="button" className="btn btn-default dropdown-toggle transcript_menu" data-toggle="dropdown">
                                                        <i className="fa fa-ellipsis-v" />
                                                    </button>
                                                    <ul className="dropdown-menu" role="menu">
                                                        <li><a href="#">Action</a></li>
                                                        <li><a href="#">Another action</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12 col-sm-12 card-style">
                                            {this.state.listData !== "" ? this.state.listData.map((list, index) => {
                                                return (
                                                    <div className="card" key={list.id}>
                                                        <div className="row">
                                                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 ">
                                                                <h5>{list.fname}</h5>
                                                                <h5>{list.email}</h5>
                                                            </div>
                                                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 ">
                                                                <h5>{list.phone}</h5>
                                                                <h5>{list.password}</h5>
                                                            </div>
                                                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 ">
                                                                <h5>{list.publicKey}</h5>
                                                                <h5>{list.phrase}</h5>
                                                                <h5 className="pull-right">
                                                                    <a style={{ cursor: "pointer", textDecoration: "none" }}>Download PDF <i className="fa fa-download" aria-hidden="true" /></a>
                                                                </h5>
                                                            </div>
                                                        </div>
                                                    </div>
                                                );
                                            }) : <div className="card1"><p>No Data Found</p></div>
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12">
                                <h2>Search</h2>
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <div className="row">
                                        <div className="btn-search_icon"><i className="fa fa-search" /></div>
                                        <div className="input_search">
                                            <input className="form-control my_form_control" type="text" placeholder="Schools, Students, transcripts etc." aria-label="Search" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 icons_circle ">
                                        <h3>Create</h3>
                                        <h1 data-toggle="modal" data-target="#createModal"><i className="fa fa-file-text" /></h1>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 icons_circle ">
                                        <h3>Share</h3>
                                        <h1><i className="fa fa-share-alt" /></h1>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 icons_circle" onClick={this.openModal}>
                                        <h3>upload</h3>
                                        <h1><i className="fa fa-cloud-upload" /></h1>
                                        {/* <h1 data-toggle="modal" data-target="#uploadModal"><i className="fa fa-cloud-upload" /></h1> */}
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 icons_circle ">
                                        <h3>verify</h3>
                                        <h1><i className="fa fa-check" /></h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 recent_activity">
                                <h2>Recent Activity <span><i className="fa fa-arrow-right" /></span></h2>
                                <table className="table table-striped">
                                    <tbody>
                                        <tr>
                                            <td className="activity_date">May 23</td>
                                            <td><span className="activity_heading">SQU*SQ *Press scottsda</span>
                                                <p><span className="activity_pending">pending</span> Authorization</p>
                                            </td>
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
                                        <li>  <p><i className="fa fa-file" />My Revenue</p></li>
                                        <li>  <p><i className="fa fa-newspaper-o" />Recent news</p></li>
                                        <li>  <p><i className="fa fa-truck" />Shipping request</p></li>
                                    </ul>
                                </div>
                                {/* <div className="modal fade" id="uploadModal" role="dialog">
                                    <div className="modal-dialog" id="uploadID">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                                                <h4 className="modal-title">Add File Upload</h4>
                                            </div>
                                            <div className="modal-body">
                                                <div className="row upload-file">
                                                    <div className="col-md-12">
                                                        <div className="form-group files">
                                                            <label>Upload Your File</label>
                                                            <input type="file" name="file" className="form-control" onChange={this.uploadFile} /><br />
                                                            <p className="format-cl">( Supported File Formats : .xls, .xlsx, .xlsm )</p>
                                                        </div><br />
                                                        {this.state.fileError ? <p className="error-cl">Please choose your file</p> : null}
                                                        <div>
                                                            <button type="button" className="btn btn-primary btn-block" name="submit" onClick={this.fileUpload} >Upload Image</button><br />
                                                            {this.state.status ? <p className="success-cl">File Uploaded Successfully</p> : null}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}
                                <div className="upload-modal">
                                    <Modal
                                        isOpen={this.state.modalIsOpen}
                                        onRequestClose={this.closeModal}
                                        id="uploadModal-id"
                                        contentLabel="Example Modal"
                                    >
                                        <div className="modal-cl">
                                            <div className="">
                                                <h4 className="modal-title">Add File Upload</h4>
                                                <button className="pull-right btn" onClick={this.closeModal}>
                                                    <i className="fa fa-times" aria-hidden="true"/>
                                                </button>
                                            </div>
                                            <div className="">
                                                <div className="row upload-file">
                                                    <div className="col-md-12">
                                                        <div className="form-group files">
                                                            <label>Upload Your File</label>
                                                            <input type="file" name="file" className="form-control" onChange={this.uploadFile} /><br />
                                                            <p className="format-cl">( Supported File Formats : .xls, .xlsx, .xlsm )</p>
                                                        </div><br />
                                                        {this.state.fileError ? <p className="error-cl">Please choose your file</p> : null}
                                                        <div>
                                                            <button type="button" className="btn btn-primary btn-block" name="submit" onClick={this.fileUpload} >Upload Image</button><br />
                                                            {this.state.status ? <p className="success-cl">File Uploaded Successfully</p> : null}
                                                            {this.state.uploadError ? <p className="error-cl">Please try again after some times </p>:null}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Modal>
                                </div>
                                <div className="modal fade" id="createModal" role="dialog">
                                    <div className="modal-dialog" style={{ height: "540px", width: "600px" }}>
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                                                <h4 className="modal-title">Create Records</h4>
                                            </div>
                                            <div className="modal-body" style={{ width: "100%", maxWidth: "90%", margin: "auto", top: "85px" }}>
                                                <form>
                                                    <div className="form-group">
                                                        <label >Name:</label>
                                                        <input type="text" className="form-control" id="name" />
                                                    </div>
                                                    <div className="form-group">
                                                        <label >Email:</label>
                                                        <input type="email" className="form-control" id="email" />
                                                    </div>
                                                    <div className="form-group">
                                                        <label >Password:</label>
                                                        <input type="password" className="form-control" id="password" />
                                                    </div>
                                                    <div className="form-group">
                                                        <label >Phone:</label>
                                                        <input type="text" className="form-control" id="phoneno" />
                                                    </div>
                                                    <div className="form-group" style={{ marginTop: "30px" }}>
                                                        <button type="submit" className="btn btn-default">Submit</button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
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
    userid: state.form.userid,
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

export default connect(mapStateToProps, mapDispatchToProps)(MyTranscript);