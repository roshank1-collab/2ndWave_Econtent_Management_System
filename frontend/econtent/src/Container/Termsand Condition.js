import { Component } from 'react';
import { Carousel, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import { FaRegSmileBeam,FaRegSmile, FaUsers, FaUserClock, FaUpload, FaMoneyCheckAlt, FaNewspaper, FaServicestack, FaTelegram, FaSignInAlt, FaHandsHelping, FaRocketchat, FaSignOutAlt, FaUserCircle, FaPlusCircle, FaRegEye, FaMedapps, FaTelegramPlane, FaUserCog, FaFacebook } from 'react-icons/fa'
import './terms.css';
import './home.css'

class Terms extends Component {
    render() {
        return (
<div class="container terms-condition" style={{marginTop:"30px"}}>
 
      <u><h2 style={{fontWeight:"bold"}}>Terms and Conditions</h2></u>
      <p style={{fontSize:"21px"}}>E-content is located at Kathmandu,Nepal.

By accessing this website we assume you accept these terms and conditions in full. Do not continue to use (Store Name)'s website if you do not accept all of the terms and conditions stated on this page.

The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and any or all Agreements: Client, You and Your refers to you, the person accessing this website and accepting the Company’s terms and conditions. The Company, Ourselves, We, Our and Us, refers to our Company. Party, Parties, or Us, refers to both the Client and ourselves, or either the Client or ourselves.

All terms refer to the offer, acceptance and consideration of payment necessary to undertake the process of our assistance to the Client in the most appropriate manner, whether by formal meetings of a fixed duration, or any other means, for the express purpose of meeting the Client’s needs in respect of provision of the Company’s stated services/products, in accordance with and subject to, prevailing law of (Address).

Any use of the above terminology or other words in the singular, plural, capitalisation and/or he/she or they, are taken as interchangeable and therefore as referring to same.
</p>
<p style={{fontSize:"21px"}}>
Cookies

We employ the use of cookies. By using (Store Name)'s website you consent to the use of cookies in accordance with (Store Name)’s privacy policy. Most of the modern day interactive websites use cookies to enable us to retrieve user details for each visit.

Cookies are used in some areas of our site to enable the functionality of this area and ease of use for those people visiting. Some of our affiliate / advertising partners may also use cookies.
</p>
<p style={{fontSize:"21px"}}>
License

Unless otherwise stated, (Store Name) and/or its licensors own the intellectual property rights for all material on (Store Name).

All intellectual property rights are reserved. You may view and/or print pages from (Add URL) for your own personal use subject to restrictions set in these terms and conditions.
</p>
<p style={{fontSize:"21px"}}>
You must not:

Republish material from https/econtentlol.com.
Sell, rent or sub-license material from (Add URL).
Reproduce, duplicate or copy material from (Add URL).
Redistribute content from E-content (unless content is specifically made for redistribution).
</p>
<p style={{fontSize:"21px"}}>
Disclaimer

To the maximum extent permitted by applicable law, we exclude all representations, warranties and conditions relating to our website and the use of this website (including, without limitation, any warranties implied by law in respect of satisfactory quality, fitness for purpose and/or the use of reasonable care and skill).

Nothing in this disclaimer will:
<li>
Limit or exclude our or your liability for death or personal injury resulting from negligence.

</li>
<li>Limit or exclude our or your liability for fraud or fraudulent misrepresentation.</li>
<li>Limit or exclude our or your liability for fraud or fraudulent misrepresentation.</li>
Or exclude any of our or your liabilities that may not be excluded under applicable law.
The limitations and exclusions of liability set out in this Section and elsewhere in this disclaimer:
<p style={{fontSize:"21px"}}>1. are subject to the preceding paragraph; and </p>
<p style={{fontSize:"21px"}}>2. govern all liabilities arising under the disclaimer or in relation to the subject matter of this disclaimer, including liabilities that arise in contract, tort (including negligence) and for breach of statutory duty.</p>
</p>
To the extent that the website and the information and services on the website are provided free of charge, we will not be liable for any loss or damage of any nature.
<div class="tacbox">
  <input id="checkbox" type="checkbox" />
  <label for="checkbox"> I agree to these <a href="#">Terms and Conditions</a>.</label>
  <Button style={{ backgroundColor: "#51227F", border: 'none',marginLeft:"40px" }} href="/"  >Proceed<FaSignInAlt /></Button>

</div>


   </div>
     
                
 

          
        )
    }
}

export default Terms;
