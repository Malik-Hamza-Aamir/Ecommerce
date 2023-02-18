// import { getRedirectResult } from "firebase/auth";
// import { useEffect } from "react";

import Signin from "../../components/signin-form/Signin";
import Signup from "../../components/signup-form/Signup";
import "./authentication.scss";

import { 
    // auth,
    // signInWithGoogleRedirect, 
    signInWithGooglePopup, 
    createUserDocumentFromAuth } 
from "../../utils/firebase/firebase";

const Authentication = () => {
    //getting the previous state with google redirect login functionality
    // useEffect( async () => {
    //     const response = await getRedirectResult(auth);
    //     if(response){
    //         const userDocRef = await createUserDocumentFromAuth(response.user);
    //     }
    // }, [])

     

    return(
        <div className="authentication-container">
            
            <Signin />

            {/* <button onClick={signInWithGoogleRedirect}>
                Google Redirect signin
            </button> */}

            <Signup />
        </div>
    );
};

export default Authentication;