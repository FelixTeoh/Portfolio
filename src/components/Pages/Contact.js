import React from "react";
import "./Contact.css";
import {} from "bootstrap";
import {Form , Card, Button} from "react-bootstrap";


function Contact () {
    return(
    <div>
 <div class="wrapper">
    <form class="form">
      <div class="pageTitle title">Contact Me! </div>
      <div class="secondaryTitle title">Please fill this form to get an appointment.</div>
      <input type="text" class="name formEntry" placeholder="Name" />
      <input type="text" class="email formEntry" placeholder="Email"/>
      <textarea class="message formEntry" placeholder="Message"></textarea>
      <input type="checkbox" class="termsConditions" value="Term"/>
      <label style={{color: "grey"}} for="terms"> I Accept the <span style={{color: "#0e3721"}}>Terms of Use</span> & <span style={{color: "#0e3721"}}>Privacy Policy</span>.</label><br/>
      <button class="submit formEntry" onclick="thanks()">Submit</button>
    </form>
  </div>
    </div>
    )
}

export default Contact;