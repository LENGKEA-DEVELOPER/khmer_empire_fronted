import { IP_ADDRESS,PORT,API_TOKEN,API_SECRET,URL } from "../Config";
import axios from "axios";
import { useEffect, useState } from "react";
import Template from "../pages/art"
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import Barloading from "../components/organisms/barloading";
import '../styles/skeletonsize.css'

function Get_api(){

const [index,setindex] = useState([]);  
useEffect( ()=>{
    const getProduct = ()=>{
        axios.get(`${IP_ADDRESS}:${PORT}/${URL}/art`)
        .then(function (res) {
           setindex(res.data)
            })
        .catch(error=>{ console.log(error)});
    }
    getProduct();
},[]);
const template = index?.result?.items?.data;

return(
    <>
      {template?
        <div>
            <Template index={template} />
        </div>
      :
        <div>
            <Barloading/>
            <Skeleton className="skeleton-image"/>
            <Skeleton count={3} className="skeleton-text" />
            <br />
            <div className="skeleton-flex">
                <Skeleton className="box-skeleton"/>
                <Skeleton count={5} className="sub-title-skeleton"/>
            </div>
        </div>
       
      }
    </>
)
}
export default Get_api;
