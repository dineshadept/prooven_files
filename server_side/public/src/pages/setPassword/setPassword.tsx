import * as React from 'react';
import { Redirect } from "react-router-dom";
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

class SetPassword extends React.Component<IProps> {

    public state = {
        email: "",
        password: "",
        confirmPassword: "",
        passwordError: false,
        confirmPasswordError: false,        
        errorMessage: false,
        setPasswordSuccess: false,
        token: "",
    }

    public  setPasswordValidation = () =>{
         
        let passwordError ="";
        let confirmPasswordError ="";
    
         if(this.state.password.length > 0 && this.state.password.length < 8){
          passwordError = "password lenght must be 8";    
        }   
    
         if(this.state.password === "" ){     
          passwordError = "Please Enter password";
        } 
    
         if(this.state.password !== this.state.confirmPassword){
          confirmPasswordError = "password not matching";    
        }   
         
        if(passwordError || confirmPasswordError){
          this.setState({ passwordError, confirmPasswordError });
          return false;
        }
        
         this.setState({ passwordError:"", confirmPasswordError:"" });
        return true;
      }

    public onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    public submitSetPassword = (e) => {
        e.preventDefault();
        const isValid = this.setPasswordValidation(); 

        const params = new URLSearchParams(window.location.search);
        const tokenValue = params.get("tokenstr");

        this.setState({ token : tokenValue});
        
        console.log(isValid); 
        axios.post(`api/reset_password`, {
            password: this.state.password,
            token: this.state.token,
        })
            .then(res => {
            this.setState({setPasswordSuccess :true});
        })
            .catch(error => {     
                this.setState({ errorMessage : false }); 
            });  
    }

    public render() {
        const { password,confirmPassword } = this.state;

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
                            <h3 className="center"> Set Password</h3>
                            <form method="POST" name="setPassword" onKeyUp={this.submitSetPassword} onSubmit={this.submitSetPassword}>
                                <div className="form-group">
                                    <label>New Password</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="password"
                                        placeholder="Enter New Password"
                                        name='password'
                                        value={password}
                                        onChange={this.onChange}
                                        />
                                </div>                                
                                {this.state.passwordError ? <p className="errorMessage">{this.state.passwordError }</p> :null}

                                <div className="form-group">
                                    <label>Confirm Password</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="confirmPassword"
                                        placeholder="Enter Confirm Password"
                                        name='confirmPassword'
                                        value={confirmPassword}
                                        onChange={this.onChange}
                                        />
                                </div>                                
                                {this.state.confirmPasswordError ? <p className="errorMessage">{this.state.confirmPasswordError }</p> :null}
                                <input type="submit" className="btn custom-btn" value="Submit" />
                            </form>
                            {this.state.setPasswordSuccess ? <Redirect to="/login"/> :null}
                            
                            {this.state.errorMessage ? <p className="errorMessage">Please Try again Later.</p>:null}

                        </div>
                        <div className="col-md-1" />
                    </div>
                </div>
                <div className="margin-cl" />
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

export default connect(mapStateToProps, mapDispatchToProps)(SetPassword);