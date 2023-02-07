import React, {useEffect} from 'react';
import {useNavigate, useParams} from "react-router-dom";

const Resource = () => {
    const navigate=useNavigate();
    let {serviceId, resourceKey}= useParams();
    const items=localStorage.getItem(serviceId+'') || '[]';
    const {types}=JSON.parse(items);
    const typeDetail=types[resourceKey+''];

    useEffect(()=>{
        if(!typeDetail){
            navigate('/'+serviceId)
        }
    },[typeDetail])

    return (
        <div>
            Resource
        </div>
    );
};

export default Resource;
