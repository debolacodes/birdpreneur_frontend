import React, { useState, useEffect, useContext } from "react"
import { PaystackButton } from "react-paystack"
import { mainFunctions } from "../providers/MainProvider";

const App = (props) => {
  const {
    userDetails
  } = useContext(mainFunctions);
  const publicKey = "pk_test_91d3d7e5eed4a839ac7a237d6d54f6e729e65cc3"
  const onSuccess = (result) =>{
      console.log(result)
  }
  const onClose = () =>{
    alert("Wait! Don't leave ");
  }
  const [componentProps, setComponentProps] = useState({

    email:"debolacodes@gmail.com",
    amount:10,
    metadata: {
      uid:"",
      farm:"",
      quantity:"",
      price:""
    },
    publicKey,
    text: "Pay Now",
    onSuccess,
    onClose
  })

  useEffect(()=>{
    var c = {...componentProps}
    c.amount = props.amount
    c.email = userDetails.email
    if(typeof c.metadata !== "undefined"){
        c.metadata.uid = userDetails.uid
        c.metadata.farm = props.farm
        c.metadata.quantity = props.quantity
        c.metadata.unitprice = props.unitprice
    } 
    setComponentProps(c)
  },[props])

  return (
    <div>
          <PaystackButton {...componentProps} 
          className="btn btn-primary"
          />
    </div>
  )
}
export default App

