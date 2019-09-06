import * as  React from 'react';
import { Link } from "react-router-dom";
import axios from "../../axios";
import '../css/main.css';
import Tick from '../images/slider_check.png';
import Navbar from "../../components/header/header";
import Footer from "../../components/footer/footer";

class Signup extends React.Component {

  public state = {
    providername: "",
    providertype: "",
    country: "",
    name: "",
    phone: "",
    email: "",
    password: "",
    confirmpassword: "",
    website: "",
    aboutbusiness: "",
    passwordWrong: false,
    signupSuccess: false,
    countryType: [],
    providerList: [],
    errorMessage: false,
    nameError: "",
    phoneError: "",
    providerNameError: "",
    providerTypeError: "",
    countryError: "",
    phoneNoError: "",
    emailError: "",
    passwordError: "",
    confirmPasswordError: "",

  }

  public signupValidate = () => {

    let nameError = "";
    let providerNameError = "";
    let providerTypeError = "";
    let countryError = "";
    let phoneNoError = "";
    let emailError = "";
    let passwordError = "";
    let confirmPasswordError = "";

    if (this.state.providername === "") {
      providerNameError = "Please Enter valid provider name";
    }

    if (this.state.providername.length > 0 && this.state.providername.length < 3) {
      providerNameError = "length must be greater than 3";
    }

    if (this.state.name === "") {
      nameError = "Please Enter valid name";
    }

    if (this.state.name.length > 0 && this.state.name.length < 3) {
      nameError = "length must be greater than 3";
    }

    if (this.state.providertype === "") {
      providerTypeError = "Please Select Valid Provider type";
    }

    if (this.state.country === "") {
      countryError = "Please select valid country name";
    }

    if (this.state.phone.includes("[A-Za-z]{10}") && !this.state.phone.includes("[789][0-9]{10}")) {
      phoneNoError = "Phone no must be digit 0-9";
    }

    if (this.state.phone === "") {
      phoneNoError = "Please Enter valid phone no";
    }

    if (this.state.phone.length > 0 && this.state.phone.length !== 10) {
      phoneNoError = "length must be 10 digit";
    }

    if (!this.state.email.includes("@") || !this.state.email.includes(".com")) {
      emailError = "Email id must have @ and .com";
    }

    if (this.state.email === "") {
      emailError = "Please Enter valid Email";
    }

    if (this.state.password.length > 0 && this.state.password.length < 8) {
      passwordError = "password lenght must be 8";
    }

    if (this.state.password === "") {
      passwordError = "Please Enter password";
    }

    if (this.state.password !== this.state.confirmpassword) {
      confirmPasswordError = "password not matching";
    }

    if (nameError || providerNameError || providerTypeError || countryError || phoneNoError || emailError || passwordError || confirmPasswordError) {
      this.setState({ nameError, providerNameError, providerTypeError, countryError, phoneNoError, emailError, passwordError, confirmPasswordError });
      return false;
    }

    this.setState({ nameError: "", providerNameError: "", providerTypeError: "", countryError: "", phoneNoError: "", emailError: "", passwordError: "", confirmPasswordError: "" });
    return true;
  }

  public onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });

  }

  public componentDidMount() {

    axios.get(`api/country`)
      .then(res => {
        this.setState({ countryType: res.data });
      });

    axios.get(`api/provider_type`)
      .then(res => {
        this.setState({ providerList: res.data });
      });

  }

  public onclickSignUp = (e) => {
    e.preventDefault();

    const isValid = this.signupValidate();

    if (isValid) {
      this.setState({ passwordWrong: false });
      axios.post(`api/signup`, {
        provider_name: this.state.providername,
        provider_type: this.state.providertype,
        country: this.state.country,
        name: this.state.name,
        phone: this.state.phone,
        email: this.state.email,
        password: this.state.password,
        website: this.state.website,
        about_business: this.state.aboutbusiness,
      })
        .then(res => {
          this.setState({ providername: '', providertype: '', country: '', name: '', phone: '', email: '', password: '', confirmpassword: '', website: '', aboutbusiness: '' });
          this.setState({ signupSuccess: true });
        })
        .catch(error => {
          this.setState({ errorMessage: true });
        });
    }

  }

  public onkeyUp = (e) => {
    e.preventDefault();
    const isValid = this.signupValidate();
    console.log(isValid);

  }

  public render() {
    const { providername, providertype, country, name, phone, email, password, confirmpassword, website, aboutbusiness, countryType } = this.state;
    return (
      <div>
        <Navbar />
        {this.state.signupSuccess ? <div className="col-lg-12 sucess_signup">
          <div className="col-lg-4" />
          <div className="col-lg-4 sucess_message_popup">
            <h1>You have signed up sucessfully. Please login to your account<br />
              <Link to="/login">Click Here to Login</Link><br />
            </h1>
          </div>
          <div className="col-lg-4" />
        </div> : null}

        <div className="container login-cl">
          <div className="row">
            <div className="col-md-6 align-cl">
              <div id="myCarousel" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators" id="grid">
                  <li data-target="#myCarousel" data-slide-to="0" className="active" />
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
            <div className="col-md-5 sign-left">
              <h3 className="center">Sign Up</h3>
              <form method="" onKeyUp={this.onkeyUp} onSubmit={this.onclickSignUp}>
                <div className="form-group">
                  <label>Provider Name *</label>
                  <input
                    type="text"
                    className="form-control"
                    id="pname"
                    name="providername"
                    value={providername}
                    onChange={this.onChange}

                  />
                  <span className="SignupError"> {this.state.providerNameError ?
                    (<div  >{this.state.providerNameError}</div>)
                    : null} </span>
                </div>

                <div className="form-group">
                  <label>Provider Type* </label>
                  <select className="form-control select-css" id="type1" name="providertype" value={providertype} onChange={this.onChange}>
                    <option />
                    {this.state.providerList.map(list =>
                      <option key={list.id} value={list.id}>{list.name}</option>
                    )};
                </select>
                  <span className="SignupError"> {this.state.providerTypeError ?
                    (<div  >{this.state.providerTypeError}</div>)
                    : null} </span>
                </div>

                <div className="form-group">
                  <label>Operating Country*  </label>
                  <select className="form-control select-css" id="type2" name="country" value={country} onChange={this.onChange} >
                    <option />
                    {countryType.map(countryListSorted => countryListSorted === null ? '' :
                      <option key={countryListSorted.code} value={countryListSorted.code}>{countryListSorted.name}</option>
                    )};
                </select>
                  <span className="SignupError"> {this.state.countryError ?
                    (<div  >{this.state.countryError}</div>)
                    : null} </span>
                </div>

                <div className="form-group">
                  <label>Your Name *  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    value={name}
                    onChange={this.onChange}

                  // pattern="[A-Za-z]{20}" 
                  />
                  <span className="SignupError"> {this.state.nameError ?
                    (<div  >{this.state.nameError}</div>)
                    : null} </span>
                </div>

                <div className="form-group">
                  <label>Your Phone * </label>
                  <input
                    type="text"
                    className="form-control"
                    id="phone"
                    name="phone"
                    value={phone}
                    onChange={this.onChange}

                  // pattern="[789][0-9]{9}"
                  />
                  <span className="SignupError"> {this.state.phoneNoError ?
                    (<div  >{this.state.phoneNoError}</div>)
                    : null} </span>
                </div>

                <div className="form-group">
                  <label>Your Email * </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={email}
                    onChange={this.onChange}

                  // pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                  />
                  <span className="SignupError"> {this.state.emailError ?
                    (<div  >{this.state.emailError}</div>)
                    : null} </span>
                </div>

                <div className="form-group">
                  <label>Your Password *</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    value={password}
                    onChange={this.onChange}

                  // pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                  />
                  <span className="SignupError"> {this.state.passwordError ?
                    (<div  >{this.state.passwordError}</div>)
                    : null} </span>
                </div>

                <div className="form-group">
                  <label>Your ConfirmPassword *  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="confirmpassword"
                    name="confirmpassword"
                    value={confirmpassword}
                    onChange={this.onChange}
                  />
                  <span className="SignupError"> {this.state.confirmPasswordError ?
                    (<div  >{this.state.confirmPasswordError}</div>)
                    : null} </span>
                </div>

                {this.state.passwordWrong ? <p className="error-cl">Password do not match</p> : null}
                <div className="form-group">
                  <label>Website</label>
                  <input
                    type="text"
                    className="form-control"
                    id="web"
                    name="website"
                    value={website}
                    onChange={this.onChange}

                  // pattern="https?://.+"
                  />
                </div>

                <div className="form-group">
                  <label>About your business</label>
                  <textarea
                    className="form-control"
                    id="comment"
                    name="aboutbusiness"
                    value={aboutbusiness}
                    onChange={this.onChange}

                  />
                </div>

                <input
                  type="submit"
                  className="btn btn_primary"
                  value="Sign Up"
                />
              </form>

              {this.state.errorMessage ? <p style={{ fontSize: "12px", color: "#f00" }}>Internal Server Error</p> : null}

              <h3 className="free-cl"><Link to="/login">Already have account ? Sign In Here !</Link></h3>

            </div>
            <div className="col-md-1" />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Signup;