import React, {useEffect, useState} from 'react'
import {doc, getDocs, getFirestore, collection } from "firebase/firestore";
import PageTitle from '../components/PageTitle';
import PaystackButtonComponent from "../components/PaystackButtonComponent"
export default function Farms(){
    const [allFarms, setAllFarms] = useState([]);
    const db = getFirestore();
    const getFarms = async () => {
        const farms = await getDocs(collection(db, "farm"));
        console.log(farms.data());
        return farms
    }

    useEffect(async () => {
        const farms = await getDocs(collection(db, "farm"));
        var af = [];
        farms.forEach((doc) => {
            var thisfarm = doc.data()
            console.log(doc.id, " => ", doc.data());
            console.log(thisfarm)
            thisfarm.id = doc.id
            af.push(thisfarm)
        })
        setAllFarms(af)
        console.log(af)
    }, [])
    return (
        <div>
            <PageTitle title="Available Farms" />
            <div className='container pt-5'>
                <div className='row col'>
                
                {allFarms.map((thisfarm, index)=>{
                    return(
                    <div key={index} className='farm_list_box col-sm-3'>
                        <div className='inner'>
                        <h3>{thisfarm.location}</h3>
                        <p>{thisfarm.price}</p>

                        <p>ROI: {thisfarm.roi}%</p>
                        <PaystackButtonComponent 
                        
                        amount={Number(thisfarm.price) * 2 * 100}
                        email={"debolacodes@gmail.com"}
                        phone={"07066315488"}
                        name={"Adebola Oyenuga"}
                        uid={"Adebola Oyenuga"}
                        farm={thisfarm.id}
                        quantity={2}
                        unitprice={Number(thisfarm.price)}
                        
                        />
                        </div>
                    </div>
                    )
                })}
                </div>
            </div>
        </div>
    )
}
