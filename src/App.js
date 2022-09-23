import React from "react";
import SignupOnline from "./Component/signUp/SignupOnline";
import SignUp from "./Component/signUp/SignUp";
import SignIn from "./Component/Sign In/signIn";
import SignedIn from "./Component/signedIn/signedin";
import SignUp__ from "./Component/signUp_/SignUp___";
import Payment from "./Component/paymentPage/Payment";
import Edu from "./Component/education page/Edu";
import Reg from "./Component/registration/registration";
import "./index.css";

function App(){
  return(
    <div className="container">
      <SignupOnline />
      <SignUp />
      <SignIn />
      <SignedIn />
      <SignUp__ />
      <Payment />
      <Edu />
      <Reg />
    </div>
  )
}
export default App;