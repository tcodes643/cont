import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./signUp.css";
import "../signUp/main.css";

function SignUp(){
    return(
        <div>
            <Header />
            <main>
                <div className="main">
                    <img src="" alt="" />
                </div>
                <div className="sign-cont">
                    <div className="sign-cont-left">
                        <h2>Your first visit to this site? Set up an Applicant's Account</h2>
                        <p>Fill in the fields below to set up an Applicant's Account. If you already are a WSB University student or graduate, you can skip Account setup and sign in using your Extranet login and password</p>
                        <div className="form">
                            <form className="form" action="" method="post">
                                <label for="">
                                    <input type="text" placeholder="FIRST NAME" />
                                </label>
                                <label for="">
                                    <input type="text" placeholder="LAST NAME" />
                                </label>
                                <label for="">
                                    <input type="Email" placeholder="E-MAIL" />
                                </label>
                                <label for="">
                                    <input type="password" placeholder="PASSWORD" />
                                    <button type="button" role="button">
                                        <span className="">Show Password</span>
                                    </button>
                                </label>
                            </form>
                            <div className="iopoi">
                                <div className="form-flex">
                                    <div>
                                        <i className="fa fa-circle-check"></i>
                                    </div>
                                    <div>
                                        <h5>8 or more characters</h5>
                                        <h5>at least one lowercase (small) letter and one uppercase (captital) letter</h5>
                                        <h5>at least one digit</h5>
                                        <h5>at least one special character (e.g @#$%&*)</h5>
                                    </div>
                                </div>
                                <div className="check-box-flex">
                                    <div className="label"></div>
                                    <div>
                                        <p>Show the recruitment for studies made before the account was created on the candidate's account (uncheck if you do not want to see them)</p>
                                    </div>
                                </div>
                                <div className="inst">
                                    <ul type="1">
                                        <li>The adminstrator of the personal data of the website Users ... <i className="fa fa-circle-question"></i></li>
                                    </ul>
                                    <label for="">
                                        <input type="checkbox" />
                                        <p>I declare that i know and accept the provision of the integr ... <i className="fa fa-circle-question"></i></p>
                                    </label>
                                </div>
                                <div className="btn-group">
                                    <button type="button" role="button">
                                        <span>SET UP APPLICANT'S ACCOUNT <i className="fa fa-angle-right"></i></span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sign-cont-right">
                        <div>
                            <h2>Already have an Applicant's Account?</h2>
                        </div>
                        <div className="btn-grop">
                            <button type="button" role="button">
                                <span>SIGN IN </span><i className="fa fa-angle-right"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}
export default SignUp;