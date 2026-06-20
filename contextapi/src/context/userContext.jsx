import React, { useState } from "react";
import userContext from "./usercontext";

// UserContext provider component
const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);
// userContext is variable which store the useContext so it will have same function as that fo the useContext
    return (
        <userContext.Provider value={{ user, setUser }}>
            {/* now whatever the childer will be wrapped with usercontext will have the access to the values  */}
            {children}

        </userContext.Provider>
    );
};

export default UserContextProvider;