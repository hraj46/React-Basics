import React, { useState } from "react";
import UserContext from "./UserContext";
// import UserContextprovider from "./context/UserContextProvider";

function UserContextprovider({children}) {
    const [user, setUser] = useState(null)
    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    );
}

export default UserContextprovider;