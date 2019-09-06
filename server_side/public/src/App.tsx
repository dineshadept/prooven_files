import * as React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
// import Header from "./components/header/header";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import Footer from "./components/footer/footer";
import Dashboard from "./pages/dashboard/dashBoard";
import MyTranscript from "./pages/transcript/transcript";
import Users from "./pages/users/users";
import Security from "./pages/security/security";
import Notifications from "./pages/notifications/notifications";
import Feedback from "./pages/feedback/feedback";
import Profile from "./pages/profile/profile";
import Login from "./pages/login/login";
import Signup from "./pages/signup/signup";
import Logout from "./pages/logout/logout";
import UploadFile from "./pages/uploadFile/uploadFile";
import Record from "./pages/listRecord/listofrecord";
import Forgot from "./pages/forgot/forgotPassword";
import SetPassword from "./pages/setPassword/setPassword";


interface IProps {
  loginInfo: any;
  name: any;
}

class App extends React.Component<IProps> {
  public render() {
    const name = this.props.name;
    console.log(name);
    return (
      <div className="App">
        <Switch>
          <Route path='/' exact component={Login} />
          <Route path='/login' exact component={Login} />
          <Route path='/forgot' exact component={Forgot} />
          <Route path='/signup' exact component={Signup} />
          <Route path='/setPassword' exact component={SetPassword} />
          {name === "" || name === null ? <Redirect to="/login" /> : <Route path='/dashboard' exact component={Dashboard} />}
          {name === "" || name === null ? <Redirect to="/login" /> : <Route path='/profile' exact component={Profile} />}
          {name === "" || name === null ? <Redirect to="/login" /> : <Route path='/record' exact component={Record} />}
          {name === "" || name === null ? <Redirect to="/login" /> : <Route path='/uploadfile' exact component={UploadFile} />}
          {name === "" || name === null ? <Redirect to="/login" /> : <Route path='/logout' exact component={Logout} />}
          {name === "" || name === null ? <Redirect to="/login" /> : <Route path='/transcript' exact component={MyTranscript} />}
          {name === "" || name === null ? <Redirect to="/login" /> : <Route path='/users' exact component={Users} />}
          {name === "" || name === null ? <Redirect to="/login" /> : <Route path='/security' exact component={Security} />}
          {name === "" || name === null ? <Redirect to="/login" /> : <Route path='/notifications' exact component={Notifications} />}
          {name === "" || name === null ? <Redirect to="/login" /> : <Route path='/feedback' exact component={Feedback} />}
          <Footer />
        </Switch>
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

export default connect(mapStateToProps, mapDispatchToProps)(App);