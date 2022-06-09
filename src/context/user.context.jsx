import { createContext, useState, useEffect } from "react";

import {
    createUserDocumentFromAuth,
    onAuthStateChangedListener
} from "../utils/firebase/firebase.utils";

export const UserContext = createContext({
    currentUser: null,
    setCurrentUSer: () => null,
});

export const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUSer] = useState(null);
    const value = {currentUser, setCurrentUSer};

    useEffect(() =>{
        const unsubscribe = onAuthStateChangedListener((user) => {
            if (user) {
                createUserDocumentFromAuth(user);
            }
            setCurrentUSer(user);
        });

        return unsubscribe;
    }, []);

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}
