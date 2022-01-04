import React, {useEffect, useState, useContext} from 'react'
import PageTitle from '../components/PageTitle'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'

import { mainFunctions } from "../providers/MainProvider";
export default function Login() {

    const {
        loggedInTrigger,
        setLoggedInTrigger
      } = useContext(mainFunctions);


    const [loginDetails, setLoginDetails] = useState({
        username:"",
        password:""
    })

    const handleChange = (e) =>{
        var ld = {...loginDetails}
        var {value, name} = e.target
        ld[name] = value
        setLoginDetails(ld)
    }

    const login = async () => {
        const authentication = getAuth()
            await signInWithEmailAndPassword(authentication, loginDetails.email, loginDetails.password)
            .then((provider) => {
                setLoggedInTrigger(Number(loggedInTrigger) + 1);
            })
    };

    return (
        <div>
            <PageTitle title="Login" />
            <div className="">
                <form className="form-group b_forms">
                    <label htmlFor="username">Email</label>
                    <input className='b_input form-control' name="email"
                    onChange={(e)=>handleChange(e)}
                    ></input>

                    <label htmlFor="username">Password</label>
                    <input className='b_input form-control' name="password" type="password"
                    onChange={(e)=>handleChange(e)}
                    ></input>

                    <button className="b_btn btn btn-primary"
                    onClick={(e)=>{
                        e.preventDefault();
                        login()
                    }}
                    >Submit</button>
                </form>
            </div>
        </div>
    )
}
