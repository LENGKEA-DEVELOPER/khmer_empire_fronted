import { IP_ADDRESS,PORT,API_TOKEN,API_SECRET,URL } from "../Config";
import axios from "axios";
import { useEffect, useState } from "react";
import Template from "../pages/about"
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import Barloading from "../components/organisms/barloading";
import '../styles/skeletonsize.css'

function Get_api(){

const [index,setindex] = useState([]);  
useEffect( ()=>{
    const getProduct = ()=>{
        axios.get(`${IP_ADDRESS}:${PORT}/${URL}/about-us`)
        .then(function (res) {
           setindex(res.data)
            })
        .catch(error=>{ console.log(error)});
    }
    getProduct();
},[]);

const template = index?.result?.items;

return(
    <>
      {template?
        <div>
            <Template index={template} />
        </div>
      :
        <div>
            <Barloading/>
            <Skeleton count={3} className="skeleton-text" />
            <br />
            <div className="skeleton-flex2">
                <Skeleton className="sub-box-skeleton"/>
                <Skeleton className="sub-box-skeleton"/>
                <Skeleton className="sub-box-skeleton"/>
                <Skeleton className="sub-box-skeleton"/>
                <Skeleton className="sub-box-skeleton"/>
                <Skeleton className="sub-box-skeleton"/>
                
            </div>
        </div>
       
      }
    </>
)
}
export default Get_api;
