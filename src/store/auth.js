import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

 export const  Authprovider = ({children}) => {
 
    const [token, setToken] = useState(localStorage.getItem("token"))
    const [owner , setOwner] = useState("");

    const  storetokenInLS = (serverToken1) => {

        setToken(serverToken1);
        return localStorage.setItem("token1", serverToken1)

    };

    let isLoggedIn = token;
    console.log("isloggedIn",isLoggedIn);

// Making the logout functionality
const LogoutUser = () => {
    setToken("");
    return localStorage.removeItem("token1")
}
//     jwtauthentciation owner data

const ownerAuthentication = async () =>{
    try {
        const response = await fetch('/owner_about',{
            method: "GET",
            headers:{
                Authorization:`Bearer ${token}`,
            },
        });

        if(response.ok){
            const data = await response.json();
            console.log("ownerdata",data.userData);

            console.log("ownerCamerasDetails",data.camerasDetails );

            console.log("ownerCameras",data.totalCameras);
            setOwner(data.userData)
        }

    } catch (error) {
        console.log("error fetching owner data");
    }
}
useEffect(() => {
    if (isLoggedIn) {
      ownerAuthentication();
    }
  }, [isLoggedIn]); 
return (
    <AuthContext.Provider value={{isLoggedIn,storetokenInLS,LogoutUser, owner}}>

        
    {children}
    </AuthContext.Provider>
  );
};


export const useAuth = () =>{
    const authContextValue = useContext(AuthContext);
    if(!authContextValue){
        throw new Error("useAuth used outside of the provider");
    }
    return authContextValue;
};