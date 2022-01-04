import React, {useState, useEffect} from 'react'
import {app} from '../firebase_config'
import { getAuth, onAuthStateChanged } from "firebase/auth";

export default function MainProvider(props) {
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [userDetails, setUserDetails] = useState([])
    const [errorMessage, setErrorMessage] = useState("")
    const auth = getAuth() 
    const [loggedInTrigger, setLoggedInTrigger] = useState(0);

    const cleanError = (errMessage) =>{
        errMessage = errMessage
        .replace(/Firebase/g, "")
        .replace(/-/g, " ")
        .replace(/:/g,"")
        .replace(/Error/g,"")
        return errMessage;
    }
    useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
        // if(user !== userDetails){
            if (user) {
            setIsAuthenticated(true)
            setUserDetails({...user})
            console.log(user)
            } else {
            setIsAuthenticated(false)
            setUserDetails([])
            }
        // }
      });
    },[loggedInTrigger])
    return (
        <mainFunctions.Provider
        value={{
            isAuthenticated,
            setIsAuthenticated,
            errorMessage, 
            setErrorMessage,
            cleanError,
            loggedInTrigger,
            setLoggedInTrigger,
            userDetails
        }}
        >
            {props.children}
        </mainFunctions.Provider>
    )
}
export const mainFunctions = React.createContext();
