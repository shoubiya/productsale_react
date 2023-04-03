import axios from 'axios';
import React, { useState,useEffect } from 'react';
import "./Categories";
import { useParams } from 'react-router-dom';

export default function Categories() {
    const [state,setState]=useState([])
    const {dsd}=useParams()
    console.log(dsd);
    useEffect(()=>{
        axios.get(`https://fakestoreapi.com/products/category/${dsd}`).then (response=>{
        console.log("response====>",response);
        setState (response.data)
      })
      },[])

  return (
    <div>
               <div class="card-deck">
         {state.map((product)=>(
                  
                   <div class="card">
                     <img src={product?.image} class="card-img-top" alt="..."/>
                     <div class="card-body">
                       <h5 class="card-title">{product?.title}</h5>
                       <p class="card-text">Price: ${product?.price}</p>

                       {/* <p class="card-text"><small class="text-muted">{product?.description}</small></p> */}
                     </div>
                   </div>
                  
                
         ))}
  </div>
    </div>
  )
}
