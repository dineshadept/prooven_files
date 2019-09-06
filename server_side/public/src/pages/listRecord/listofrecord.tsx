import * as  React from 'react';
import { Link } from 'react-router-dom';
import { Dispatch } from "redux";
import { connect } from "react-redux";
import axios from "../../axios";
import '../css/main.css';
import Navbar from "../../components/header/navbar";
import Footer from "../../components/footer/footer";
import PDF from '../images/pdf.png';

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

class Record extends React.Component<IProps> {

    public state = {
        listData: [],
        loader: false,
    }

    public componentDidMount = () => {
        this.setState({ loader: true });
        axios.post(`api/list_candidates`,{
            email : this.props.email,
            userid : this.props.userid,
        })
            .then(res => {
                this.setState({ loader: false });
                const list = Object.values(res.data);
                this.setState({ listData: list });
            });
    }

    public handleInit() {
        console.log("FilePond instance has initialised");
    }

    public render() {
        return (
            <div>
                <Navbar />
                {this.state.loader ? <div id="loader" /> : null}
                <div className="body_offwhite">
                    <div className="container my_container">
                        <p className="backLink"><Link to="/dashboard"><i className="fa fa-arrow-circle-left" aria-hidden="true" /> Back</Link></p>
                        <h3 className="name-cl">List of Records</h3>
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 ">
                            <table className="table-responsive" id="customers">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Phone</th>
                                        <th>Public Key</th>
                                        <th>Created On</th>
                                        <th />

                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.listData.map((list, index) => {
                                        return (
                                            <tr key={list.id}>
                                                <td>{list.fname}</td>
                                                <td>{list.email}</td>
                                                <td>{list.phone}</td>
                                                <td>{list.publicKey}</td>
                                                <td>{list.created_on}</td>
                                                <td><Link to="#"><img className="pdfcl" src={PDF} alt="Pdf Download" /></Link></td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
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

export default connect(mapStateToProps, mapDispatchToProps)(Record);