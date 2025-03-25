import { useEffect, useState } from "react";
// import BonusTable from "../Components/Bonus/BonusTable";
import UserBonus from "../Components/Bonus/UserBonus";
import {axiosAPI1} from '../Service/axios'

export default function Bonus(){
    const [data, setData] = useState()
    const getBonus = async () =>{
        try{
            const response = await axiosAPI1.get('/bonus/get-bonus-information-me',{
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
            })
            setData(response.data)
        }catch(error){

        }
    }
    useEffect(()=>{
        getBonus()
    },[])

    return(
        <div>
            <UserBonus data={data}/>
            {/* <BonusTable data={data?.more}/> */}
        </div>
    )
}