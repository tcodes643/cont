import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./signUpOnline.css";

function SignupOnline(){
    return(
        <div>
            <Header />
            <div className="signMain">
                <div className="signCont">
                    <h2>Congratulations</h2>
                    <p className="p_1">your enrollment process has been initiated</p>
                    <p className="p_2">A confirmation link has been sent to your e-mail address. <br />Follow the link to confirm your application and proceed to the next step.</p>
                    <p className="p_3">if you filled out your application form via an Applicant's Account - go to your Account to continue with the enrollment process: <span>Go to my Applicant's Account now <i className="fa fa-angle-right"></i></span></p>
                    <p className="p_4">If you filled out your application form without setting up an Applicant's Account, check your incoming e-mail to find instructions on what to do next</p>

                    
                <div className="signWarn">
                    <p className="p_1">NOTE: To be eligible for promotional discounts, you must have timely filed all documents and meet any other requirements.</p>
                    <p className="p_2">You need to apply only once. You do not have to reapply if you change your mind about your choice of degree program or major; all you need to do is contact your Admission Office and ask its staff to modify your application to suit your new preferences.</p>
                </div>
                </div>
            </div>
            
            <div className="btn-group">
                    <button type="button" role="button">
                        <span>Go to your Account</span>
                    </button>
                </div>
                <Footer />
        </div>
    )
}
export default SignupOnline;