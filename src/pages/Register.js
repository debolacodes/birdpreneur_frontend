import React,{useState, useContext} from 'react'
import PageTitle from '../components/PageTitle'
    import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'
import {doc, setDoc, getFirestore } from "firebase/firestore";

import { mainFunctions } from "../providers/MainProvider";

export default function Register() {
    
    const {
        errorMessage,
        setErrorMessage,
        cleanError,
        loggedInTrigger,
        setLoggedInTrigger
      } = useContext(mainFunctions);

    const db = getFirestore();
    const [registerDetails, setRegisterDetails] = useState({
        username:"",
        password:"",
        confirm_password:""
    })

    const handleChange = (e) => {
        var ld = {...registerDetails}
        var {value, name} = e.target
        ld[name] = value
        setRegisterDetails(ld)
    }

    const signUp = async () => {
            const authentication = getAuth()
            await createUserWithEmailAndPassword(authentication, registerDetails.email, registerDetails.password)
            .then(async () => {
                await signInWithEmailAndPassword(authentication, registerDetails.email, registerDetails.password)
                    .then(async (provider) => {
                        
                        var user = provider.user
                        console.log(provider.user)
                        const uid = user.uid;
                        const displayName = user.displayName;
                        const photoURL = user.photoURL;
                        const firstname = ""
                        const lastname = ""
                        const country = ""
                        const bankname = ""
                        const bankaccount = ""
                        const phoneno = ""

                        await setDoc(doc(db, "profile", registerDetails.email),
                        {
                            uid, 
                            displayName,
                            photoURL,
                            firstname,
                            lastname,
                            country,
                            bankname,
                            bankaccount,
                            phoneno
                        });

                        setLoggedInTrigger(Number(loggedInTrigger) + 1);
                        
                    }).catch(async (error)=>{
                        await setErrorMessage(await cleanError(error.message))
                        console.log(errorMessage)
                    })
            }).catch(async (error)=>{
                await setErrorMessage(await cleanError(error.message))
                console.log(errorMessage)

            })
    };


    
    return (
        <div>
            <PageTitle title="Register" />
            <div className="">
                {errorMessage !== "" &&
                <p>{errorMessage}</p>
                }
                <form className="form-group b_forms">
                    {/* <label htmlFor="username">First Name</label>
                    <input className='b_input form-control' name="firstname"></input>

                    <label htmlFor="username">Last Name</label>
                    <input className='b_input form-control' name="lastname" type="password"></input> */}
                    
                    {/* <label htmlFor="username">Username</label>
                    <input className='b_input form-control' name="username"
                    onChange={(e)=>handleChange(e)}
                    ></input> */}

                    <label htmlFor="username">Email</label>
                    <input className='b_input form-control' name="email" type="email"
                    onChange={(e)=>handleChange(e)}
                    ></input>
                    
                    {/* <label htmlFor="username">Phone Number</label>
                    <input className='b_input form-control' name="phone"></input> */}

                    <label htmlFor="username">Password</label>
                    <input className='b_input form-control' name="password" type="password"
                    onChange={(e)=>handleChange(e)}></input>

                    <label htmlFor="username">Confirm Password</label>
                    <input className='b_input form-control' name="confirm_password" type="password"
                    onChange={(e)=>handleChange(e)}
                    ></input>

                    <button className="b_btn btn btn-primary"
                    onClick={(e)=>{
                        e.preventDefault();
                        signUp()
                    }}
                    >Register</button>
                    
                
                </form>
            </div>
        </div>
    )
}
