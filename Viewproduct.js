import React, { useEffect, useState } from 'react';
import "./Viewproduct.css";
import axios from "axios";
import { useParams } from 'react-router-dom';
import Ecommercenavbar from './Ecommercenavbar';


export default function Viewproduct() {
    const [state,setState]=useState([]);
    const {id}=useParams()
    console.log(id);
    useEffect(()=>{
        axios.get(`https://fakestoreapi.com/products/${id}`).then (response=>{
        console.log("response====>",response);
        setState (response.data)
      })
      },[])

  return (
    <div>
      <Ecommercenavbar/>  
      <div class="card" style={{width: "18rem"}}>
  <img src={state?.image} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{state?.title}</h5>
    <p class="card-text">{state?.description}</p>
     <p class="card-text">Price: ${state?.price}</p>
    {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
  </div>
</div>
    </div>
  )
}
