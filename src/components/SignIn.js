import React from "react";
import { StyledFirebaseAuth } from "react-firebaseui";
import { getAuth, EmailAuthProvider } from 'firebase/auth' 

const firebaseUIConfig = {
    SignInOptions: [{provider: EmailAuthProvider.PROVIDER_ID, requiredDisplayName: true}],
    SignInFloe: 'popup',
    credentialHelper: 'none',
    callbacks: {
        signInSucessWithAuthResult: () => {
            return false;
        }
    }
}

export function SignIn(props) {
    const userName = props.user ? props.user.userName : null;
    const auth = getAuth();
 
    return(
        <div className="card bg-light">
            <div className="container card-body">
                <StyledFirebaseAuth uiConfig={firebaseUIConfig} firebaseAuth={auth}/>
            </div>
        </div>
    )
}