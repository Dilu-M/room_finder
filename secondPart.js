import React from 'react';
import './secondPart.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from 'react-router-dom';

function SecondPart(){
    return(
        <div>
    <div className="postad">
        
        <h2 id="dialogue" >Looking for a tenant or a flatmate?</h2>
        <div id="list">
        <Link to='/listRoom'><span id="litbtn">LIST YOUR ROOM <span id="free">FREE</span></span></Link>
        </div>
        </div>
        <div>
        <div id="next">
        <h2>Why use JMI ROOM FINDER</h2>
        <div>
            <div >
                <table className="table">
                    <tr>
                        <td>icon</td>
                        <td>icon</td>
                        <td>icon</td>
                    </tr>
                    <tr>
                        <td><strong>Avoid Brokers<br/></strong>We directly connect you to verified<br/> owners to save brokerage</td>
                        <td><strong>Free Listing</strong><br/>Easy listing process</td>
                        <td><strong>Rental Agreement</strong><br/>Assistance in creating rental<br/>agreement & paper work</td>
                    </tr>
                </table>
            </div>
        </div>
        {/* here we need to add some icons and description */}
        </div>
        </div>
        </div>
    );
}
export default SecondPart;