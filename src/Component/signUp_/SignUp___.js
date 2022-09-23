import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./signUp___.css";

function SignUp__(){
    return(
        <div>
            <Header />
                <div className="signup___">
                    <div className="signup___-flex">
                        <div className="left">
                            <h2>Choose the course/program you want</h2>
                            <p>Fill in the fields below and get started with your application process</p>
                            <form action="" method="post">
                                <select>
                                    <option>TOWN/CITY</option>
                                </select>
                                <select>
                                    <option>DATE OF ADMISSION</option>
                                </select>
                                <select>
                                    <option>LEVEL OF EDUCATION</option>
                                </select>
                                <select>
                                    <option>COURSE/PROGRAM</option>
                                </select>
                                <select>
                                    <option>FORM OF STUDIES</option>
                                </select>
                                <select>
                                    <option>THE METHOD OF IMPLIMENTING THE STUDIES</option>
                                </select>
                                <button type="button">
                                    <span>FILL OUT APPLICATION FORM</span>
                                    <i className="fa fa-angle-right"></i>
                                </button>
                            </form>
                            <div className="cont-flex">
                                <div className="cont-flex-left">
                                    <img src="" alt="" />
                                    <img src="" alt="" />
                                </div>
                                <div className="cont-flex-right">
                                    <p>it will take you up 10 minutes to complete the application form.</p>
                                </div>
                            </div>
                        </div>
                        <div className="right">
                            <div className="right-cont">
                                <h2>Before you start</h2>
                                <figure>
                                    <img src="" alt="" />
                                </figure>
                            </div>
                            <div className="right-cont-2">
                                <div className="toggle">
                                    <button type="button" className="toggle-button">
                                        <h2>why setup an applicants Account?</h2>
                                        <i className="fa fa-angle-down"></i>
                                    </button>
                                    <div className="">
                                        <p>If there is a content</p>
                                    </div>
                                </div>
                                <div className="toggle">
                                    <button type="button" className="toggle-button">
                                        <h2>things you should know</h2>
                                        <i className="fa fa-angle-down"></i>
                                    </button>
                                    <div className="">
                                        <p>If there is a content</p>
                                    </div>
                                </div>
                                <div className="right-cont-box">
                                    <h6>Do you know that:</h6>
                                    <ul>
                                        <li>our form is perfectly secure - we never share your data with any third party</li>
                                        <li>with the Applicant's Account, you will experience an all-out online admission process</li>
                                        <li>via the Applicant's Account, you will fill in your appliication form, upload and sign all documents, and make any payments</li>
                                        <li>please make sure you have your ID or passport (non-polish nationals) on hand - you will need it to fill in the application form.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="btn-gop">
                        <button type="button" role="button">
                            <span>Go to your Account</span>
                        </button>
                    </div>
                </div>
            <Footer />
        </div>
    )
}
export default SignUp__;