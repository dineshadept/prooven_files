import * as React from 'react';
import { Redirect, Link } from "react-router-dom";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import axios from "../../axios";
import '../css/main.css';
import './script.js';
import Tick from '../images/slider_check.png';
import Navbar from "../../components/header/header";
import Footer from "../../components/footer/footer";

interface IProps {
  loginInfo: any;
  email: any;
  password: any;
}

class Login extends React.Component<IProps> {

  public state = {
    email: "",
    password: "",
    errorMessage: false,
    successMessage: false,
    emailError: "",
    passwordError: "",
    remember: ""
  }

  public componentWillMount() {
    const email = localStorage.getItem('email')
    console.log(email);
  }

  public loginValidate = () => {
    let emailError = "";
    let passwordError = "";

    if (this.state.email === null) {
      emailError = "Please Enter valid Email";
    } else {
      const filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
      if (!filter.test(this.state.email)) {
        emailError = "Email id must have @ and .abc";
      }
    }

    if (this.state.password === "") {
      passwordError = "Please Enter password";
    } else {
      if (this.state.password.length > 0 && this.state.password.length < 8) {
        passwordError = "password lenght must be 8";
      }
    }

    if (emailError || passwordError) {
      this.setState({ emailError, passwordError });
      return false;
    }
    this.setState({ emailError: "", passwordError: "" });
    return true;
  }

  public onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  public submitValidation = (e) => {
    e.preventDefault();
    const isValid = this.loginValidate();
    if (isValid) {
      axios.post(`api/signin`, {
        email: this.state.email,
        password: this.state.password,
      })
        .then((res) => {
          if (res.data.message === "auth/user-not-found") {
            this.setState({ errorMessage: true });
          }
          else {
            const loginData = res.data;
            this.props.loginInfo(
              loginData.about_business,
              loginData.country,
              loginData.email,
              loginData.name,
              loginData.phone,
              loginData.phrase,
              loginData.provider_name,
              loginData.provider_type,
              loginData.publicKey,
              loginData.website,
              loginData.userid,
            );
            this.setState({ successMessage: true });
          }
        })
        .catch((error) => {
          console.log(error);
          this.setState({ errorMessage: true });
          this.setState({ successMessage: false });
        });
    }
  }

  public componentDidMount() {
    if (localStorage.getItem('email') === "") {
      this.setState({ email: "" });
      localStorage.clear();
    }
    else {
      this.setState({
        email: localStorage.getItem('email'),
        password: this.state.password,
      });
    }
  }

  public rememberClick = () => {
    localStorage.setItem('email', this.state.email ? this.state.email : '');
    localStorage.setItem('pass', '' ? this.state.password : '');
  }

  public render() {
    const { email, password } = this.state;
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
            <div className="col-md-5 form-left">
              <h3 className="center">Login to your account</h3>
              <form method="POST" onSubmit={this.submitValidation} >
                <div className="form-group">
                  <label>Email Address<span className="star">*</span></label>
                  <input
                    type="text"
                    className="form-control"
                    id="email"
                    placeholder="Enter email"
                    name='email'
                    value={email}
                    onChange={this.onChange}
                  />
                  <span className="LoginError"> {this.state.emailError ?
                    (<div  >{this.state.emailError}</div>)
                    : null} </span>
                </div>

                <div className="form-group">
                  <label>Password<span className="star">*</span></label>
                  <input
                    type="password"
                    className="form-control"
                    id="pwd"
                    placeholder="Enter password"
                    name="password"
                    value={password}
                    onChange={this.onChange}
                  />
                  <span className="LoginError"> {this.state.passwordError ?
                    (<div  >{this.state.passwordError}</div>)
                    : null} </span>
                </div>

                <div className="checkbox">
                  <label><input type="checkbox" name="remember" id="remember_me" onClick={this.rememberClick} /> Remember me</label>
                  <a href="/forgot" className="pull-right forgot-link-cl">Forgot Password</a>
                </div>

                <input type="submit" className="btn btn_primary" value="Sign In" />
              </form>

              {this.state.successMessage ? <Redirect to="/dashboard" /> : null}
              {this.state.errorMessage ? <p className="errorMessage-cl">User Not Found</p> : null}

              <h3 className="free-cl"><Link to="/signup">Sign Up, It's Free!</Link></h3>
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

export default connect(mapStateToProps, mapDispatchToProps)(Login);