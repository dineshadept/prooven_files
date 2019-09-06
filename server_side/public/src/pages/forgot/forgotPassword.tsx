import * as React from 'react';
// import { Redirect, Link } from "react-router-dom";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import axios from "../../axios";
import '../css/main.css';
import Tick from '../images/slider_check.png';
import Navbar from "../../components/header/header";
import Footer from "../../components/footer/footer";

interface IProps {
  loginInfo: any;
}

class ForgotPassword extends React.Component<IProps> {

  public state = {
    email: "",
    forgotErrorMessage: false,
    forgotSuccessMessage: false,
    emailError: false,
  }

  public forgotValidation = () => {

    let emailError = "";

    if (this.state.email === "") {
      emailError = "Please Enter valid Email";
    } else {
      const filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
      if (!filter.test(this.state.email)) {
        emailError = "Email id must have @ and .abc";
      }
    }
    if (emailError) {
      this.setState({ emailError });
      return false;
    }

    this.setState({ emailError: "" });
    return true;
  }

  public onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    this.setState({ forgotSuccessMessage: false });
  }

  public forgotSubmit = (e) => {
    e.preventDefault();
    const isForgotValid = this.forgotValidation();
    if (isForgotValid) {
      axios.post(`api/check_forgot_email`, {
        email: this.state.email,
      })
        .then(res => {
          this.setState({
            forgotSuccessMessage: true,
            email: "",
          });
        })
        .catch(error => {
          this.setState({ forgotErrorMessage: false });
        });
    }
  }

  public render() {
    const { email } = this.state;

    return (
      <div>
        <Navbar />
        <div className="container login-cl">
          <div className="row">
            <div className="col-md-6 align-cl">
              <div id="myCarousel" className="carousel slide" data-ride="carousel">

                <ol className="carousel-indicators">
                  <li data-target="#myCarousel" id="hexagon2" data-slide-to="0" className="active" />
                  <li data-target="#myCarousel" data-slide-to="1" />
                  <li data-target="#myCarousel" data-slide-to="2" />
                  <li data-target="#myCarousel" data-slide-to="3" />
                </ol>

                <div className="carousel-inner">
                  <div className="item active">
                    <div className="text-cap-cl">
                      <div className="col-lg-2" />
                      <div className="col-lg-8">
                        <h2>Welcome To Prooven !</h2>
                        <h4>Your World. Verified.</h4>
                        <img src={Tick} alt="Tick Image" className="img-cl" />
                        <p>Integrity. Trust. Accountability.</p>
                        <p>Prooven takes a next-gen approach to verifying information that you come across daily.</p>
                        <p>We identify items that are true, false, or somewhere in the middle, then show you how those claims stack up to others.</p>
                      </div> <div className="col-lg-2" />
                    </div>
                  </div>

                  <div className="item">
                    <div className="text-cap-cl">
                      <div className="col-lg-2" />
                      <div className="col-lg-8">
                        <h2>Welcome To Prooven !</h2>
                        <h4>Your World. Verified.</h4>
                        <img src={Tick} alt="Tick Image" className="img-cl" />
                        <p>Integrity. Trust. Accountability.</p>
                        <p>Prooven takes a next-gen approach to verifying information that you come across daily.</p>
                        <p>We identify items that are true, false, or somewhere in the middle, then show you how those claims stack up to others.</p>
                      </div> <div className="col-lg-2" />
                    </div>
                  </div>
                  <div className="item">
                    <div className="text-cap-cl">
                      <div className="col-lg-2" />
                      <div className="col-lg-8">
                        <h2>Welcome To Prooven !</h2>
                        <h4>Your World. Verified.</h4>
                        <img src={Tick} alt="Tick Image" className="img-cl" />
                        <p>Integrity. Trust. Accountability.</p>
                        <p>Prooven takes a next-gen approach to verifying information that you come across daily.</p>
                        <p>We identify items that are true, false, or somewhere in the middle, then show you how those claims stack up to others.</p>
                      </div> <div className="col-lg-2" />
                    </div>
                  </div>
                  <div className="item">
                    <div className="text-cap-cl">
                      <div className="col-lg-2" />
                      <div className="col-lg-8">
                        <h2>Welcome To Prooven !</h2>
                        <h4>Your World. Verified.</h4>
                        <img src={Tick} alt="Tick Image" className="img-cl" />
                        <p>Integrity. Trust. Accountability.</p>
                        <p>Prooven takes a next-gen approach to verifying information that you come across daily.</p>
                        <p>We identify items that are true, false, or somewhere in the middle, then show you how those claims stack up to others.</p>
                      </div> <div className="col-lg-2" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-5 form-left bottom-cl">
              <h3 className="center"> Forgot Password</h3>
              <form method="POST" name="myForm" onSubmit={this.forgotSubmit} onKeyUp={this.forgotValidation}>
                <div className="form-group">
                  <label>Please enter your email address<span className="star">*</span></label>
                  <input
                    type="text"
                    className="form-control"
                    id="email"
                    placeholder="Enter email"
                    name='email'
                    value={email}
                    onChange={this.onChange}
                  />
                </div>
                {this.state.emailError ? <p className="errorMessage">{this.state.emailError}</p> : null}

                <input type="submit" className="btn custom-btn" value="Submit" />
              </form>
              {this.state.forgotSuccessMessage ? <p className="success-cl">Email Send Successfully.</p> : null}
              {this.state.forgotErrorMessage ? <p className="errorMessage">Your not authorized user</p> : null}
            </div>
            <div className="col-md-1" />
          </div>
        </div>
        <div className="margin-cl" />
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

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPassword);