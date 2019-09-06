import * as React from 'react';
import '../css/main.css';


class MyTranscript extends React.Component {

    public render() {
        return (
            <div className="body_offwhite">
            <div className="container my_container">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 ">
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 ">
            <h2>Good Morning, John</h2>
            </div>{/* end of col-6 */}

            <div className="col-lg-3 col-md-3 col-sm-1 col-xs-12"/>
            <div className="col-lg-2 col-md-2 col-sm-5 col-xs-12">
            <div className="col-lg-6 col-md-6 col-md-6 col-sm-6 col-xs-6 user-image text-center">
              <i className = "fa fa-user-circle-o"/>
            </div>{/* end of col-md-8 */}
            <div className="col-lg-6 col-md-6 col-md-6 col-sm-6 col-xs-6 user-image ">
            <h2>Profile</h2>
            </div>{/* end of col-md-4 */}
            </div>{/* end of col-2 */}
            <br /> <br />
            </div>{/* end of col-12 */} 
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 "><br /><br /><br /></div>   
            {/* --------------------end of profile--------------------------- */} 

            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 ">                   
                <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12 ">                       
                    <h2>Class Transcripts</h2>
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 bg_white pdg_top">
                    <div className="">
                    <div className="col-lg-6 col-md-10 col-sm-6 col-xs-10 ">
                    <div className="row">
                    <h4 className="clr_blue">My Transcripts</h4>
                    </div>{/* end of row */}
                    </div>{/* end of col-6 */}
                    <div className="col-lg-5 col-md-1 col-sm-5 col-xs-1 "/>{/* end of col-5 */}
                    <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1 ">  
                    <div className="row">
                    <div className="btn-group ">
                    <button type="button" className="btn btn-default dropdown-toggle transcript_menu" data-toggle="dropdown">
                        <i className="fa fa-ellipsis-v"/>
                    </button>
                    <ul className="dropdown-menu" role="menu">
                        <li><a href="#">Action</a></li>
                        <li><a href="#">Another action</a></li>                       
                    </ul>
                    </div>{/* end of btn-group */}
                    </div>{/* end of row */}
                    </div>{/* end of col-1 */}

                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 bg_blue pdg_top pdg_btm clr_white">
                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 ">
                    <h4>Computer Science</h4>
                    <h5 className="pdg_top"># students: 35</h5>
                    </div>{/* end of col-6 */}
                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 ">
                    <h4>Class of 2015 - 2019</h4>
                    <h5 className="pdg_top">% completed: 98%</h5>
                    </div>{/* end of col-6 */}
                    
                    </div>{/* end of col-12 bg_blue */}

                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 "><div className="row"> <hr /></div></div>
                   
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12  bg_gray pdg_top pdg_btm clr_white">
                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 ">
                    <h4>Finance</h4>
                    <h5 className="pdg_top"># students: 21</h5>
                    </div>{/* end of col-6 */}
                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 ">
                    <h4>Class of 2015 - 2019</h4>
                    <h5 className="pdg_top">% completed: 89%</h5>
                    </div>{/* end of col-6 */}
                    
                    </div>{/* end of col-12 bg_gray */}

                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 "><div className="row"> <hr /></div></div>
                   
                   <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12  bg_green pdg_top pdg_btm clr_white">
                   <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 ">
                   <h4>Finance</h4>
                   <h5 className="pdg_top"># students: 21</h5>
                   </div>{/* end of col-6 */}
                   <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 ">
                   <h4>Class of 2015 - 2019</h4>
                   <h5 className="pdg_top">% completed: 89%</h5>
                   </div>{/* end of col-6 */}
                   
                   </div>{/* end of col-12 bg_green */}
                   <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 ">
                    <div className="row"> <hr /></div></div>
                   <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 ">
                       <div className="row"><button className="btn my_btn">See more transcripts</button><br /><br /></div></div>
                    </div>{/* end of row */}
                    </div>{/* end of col-12 */}
                </div>{/* end of col-6 */}

                <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12">
                <h2>Search</h2>
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div className="row">
                   <div className="btn-search_icon"><i className="fa fa-search"/></div>
                   <div className="input_search"> 
                   <input className="form-control my_form_control" type="text" placeholder="Schools, Students, transcripts etc." aria-label="Search" />
                   </div>
                   </div>{/* end of row */}
                </div>{/* end of col-12 */}

                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                       
                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 icons_circle ">
                <h3>Create</h3>
                    <h1><i className="fa fa-file-text"/></h1>
                   
                </div>{/* end of col-6 */}
                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 icons_circle ">
                <h3>Share</h3>
                    <h1><i className="fa fa-share-alt"/></h1>
                   
                </div>{/* end of col-6 */}
                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 icons_circle ">
                <h3>upload</h3>
                    <h1><i className="fa fa-cloud-upload"/></h1>
                   
                </div>{/* end of col-6 */}
                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 icons_circle ">
                <h3>verify</h3>
                    <h1><i className="fa fa-check"/></h1>                   
                </div>{/* end of col-6 */}
                </div>{/* end of col-lg-12 */}
                </div>{/* end of col-5 */}
                 
            </div>{/* end of col-12 */} 
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 recent_activity">
                <h2>Recent Activity <span><i className="fa fa-arrow-right"/></span></h2>               
                <table className="table">                                
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
            </div> {/* end of col-6 */}
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 ">
                <br /><br />
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 icons_resources ">
            <h2>Resources</h2><br/><br/>
                <ul>
                    <li>  <p><i className="fa fa-file"/>My Revenue</p></li>
                    <li>  <p><i className="fa fa-newspaper-o"/>Recent news</p></li>
                    <li>  <p><i className="fa fa-truck"/>Shipping request</p></li>
                </ul>                                       
                </div>{/* end of col-6 */}                
            </div>
            </div> {/* end of col-12 */}
            </div> {/* end of container */} 
        </div> 
        );
    }
}

export default MyTranscript;
