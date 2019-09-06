import * as  React from 'react';
import axios from "../../axios";
import '../css/main.css';

class Users extends React.Component {
  
  public componentDidMount() {
    axios.post(`https://us-central1-prooven1-3a324.cloudfunctions.net/createScream`)
      .then(res => {
        console.log(res);
      });
  }

  public render() {
   return (
    <div className="container user-cl">
        <div className="top-head">
        <h2>Users</h2>
        <div className="row content-part">
            <div className="col-md-8 background-cl">
                <div className="inner-list"> 
                    <div className="row">
                        <div className="col-md-8">                                           
                            <h3>Active Users</h3> 
                            <div className="list-style">                                 
                            <p>Ted Smith</p>
                            <p>Fred Jones</p>
                            <p>Mary Jane</p>
                            </div> 
                            <h3>Inactive Users</h3> 
                            <div className="list-style">                                 
                            <p>Jerry Jones</p>
                            <p>Betty Smith</p>
                            <p>Fred Smith</p>
                            </div> 
                        </div>
                        <div className="col-md-4 common-icon">
                            <h3><i className="fa fa-plus" aria-hidden="true"/> Add User</h3>
                        </div>
                    </div> 
                </div>
            </div>
            <div className="col-md-4 icons_resources">
                <ul>
                    <li><p><i className="fa fa-file-text-o"/> Terms of Use</p></li>
                    <li><p><i className="fa fa-key"/> Privacy Policy</p></li>
                    <li><p><i className="fa fa-question"/> Help Center</p></li>
                    <li><p><i className="fa fa-phone"/> Contact Us</p></li>
                </ul>
            </div>       
        </div>

        </div>     
    </div>
  );
}
}

export default Users;
