import { createContext, useState, useEffect } from "react";
import { onAuthStateChangedListener, createUserDocumentFromAuth } from "../utils/firebase/firebase";

//actual value we want to access
export const UserContext = createContext({
    currentUser: null, //initial default values
    setCurrentUser: () => null,
});

// contect provider
export const UserProvider = ( { children } ) => {
    const [currentUser, setCurrentUser] = useState(null);
    const value = {currentUser, setCurrentUser};

    useEffect( () => { //only run 1 time when component fires
        const unsubscribe = onAuthStateChangedListener((user) => {
            if(user) {
                createUserDocumentFromAuth(user);
            }
            setCurrentUser(user);
        });
    
        return unsubscribe;
    } , [])

    return <UserContext.Provider value={value}>{ children }</UserContext.Provider>
};