import * as React from 'react';
import { Redirect, Link } from "react-router-dom";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import axios from "../../axios";
import '../css/main.css';
import Tick from '../images/slider_check.png';
import Header from "../../components/header/header";
interface IProps {
  loginInfo: any;
}

class Logout extends React.Component<IProps> {  

  public state={
   email:"",
   password:"",
   errorMessage:false,
   successMessage:false,
  }
 
  
  public onChange=(e)=>{
    this.setState({ [e.target.name]: e.target.value });
  }
  
  public submitValidation=(e)=>{
    e.preventDefault();
    console.log(e);
    axios.post(`api/signin`,{
      email: this.state.email,
      password: this.state.password,
    })
    .then(res => {
      console.log(res.data.message); 
      if(res.data.message === "auth/user-not-found"){
        this.setState({ errorMessage: true});
      }
      else{
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
          );       
        this.setState({ successMessage : true });
      }     
    });
    // .catch(error => {
    //   console.log(error); 
    //   this.setState({ errorMessage: true});
    //   this.setState({ successMessage : false }); 
    // });  
   
  }
  
  public render() {
      const{email,  password} = this.state;
      
   return (
     <div>
       <Header/>
     
    <div className="container login-cl">
      <div className="row">
          <div className="col-md-6 align-cl">
          <div id="myCarousel" className="carousel slide" data-ride="carousel">

<ol className="carousel-indicators"> 
<li data-target="#myCarousel" id="hexagon2" data-slide-to="0" className="active"/>
<li data-target="#myCarousel" data-slide-to="1"/>
<li data-target="#myCarousel" data-slide-to="2"/>
<li data-target="#myCarousel" data-slide-to="3"/>
</ol>

<div className="carousel-inner">
<div className="item active">
<div className="text-cap-cl">
<div className="col-lg-2" />
<div className="col-lg-8">
<h2>Welcome To Prooven !</h2>
<h4>Your World. Verified.</h4>
<img src={Tick} alt="Tick Image" className="img-cl"/>
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
<img src={Tick} alt="Tick Image" className="img-cl"/>
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
<img src={Tick} alt="Tick Image" className="img-cl"/>
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
<img src={Tick} alt="Tick Image" className="img-cl"/>
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
                <form method="POST" name ="myForm" onSubmit={this.submitValidation}>
                <div className="form-group">
                <label>Email address<span className="star">*</span></label>
                <input
                type="email"
                 className="form-control"
                  id="email"
                   placeholder="Enter email"
                    name='email'
                    value={email}
                    onChange={this.onChange}
                     required />
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
                </div>
                <div className="checkbox">
                <label><input type="checkbox" name="remember"/> Remember me</label>
                <a href="#" className="pull-right forgot-link-cl">Forgot Password</a>
                </div>
                <input type="submit" className="btn custom-btn"  value="Sign In"/>
                </form>
                {/* {this.state.message === "auth/wrong-password" ? 
                <Redirect to="/login/"  /> : null
                }
                 {this.state.email_id !== "" && this.state.message !== "auth/wrong-password"? 
               <p>User name / Password is wrong</p> : null
                }
                  */}
                  { this.state.successMessage ? <Redirect to="/profile" />:null }
                  { this.state.errorMessage ? <p className="errorMessage-cl">User Not Found</p>:null }

                <h3 className="free-cl"><Link to="/signup">Sign Up, It's Free!</Link></h3>
          </div>
          <div className="col-md-1"/>
      </div>
    </div>
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
    loginInfo: (about_business,country,email,name,phone,phrase,provider_name,provider_type,publicKey,website) => dispatch({ type: "loginInfo", value:{about_business,country,email,name,phone,phrase,provider_name,provider_type,publicKey,website} }),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Logout);