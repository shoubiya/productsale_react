import React, { useEffect, useState } from 'react';
import "./Homepage.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import axios from "axios";
import Ecommercenavbar from "./Ecommercenavbar";
import { Link, useNavigate } from 'react-router-dom';

export default function Homepage() {
  const Navigate=useNavigate();
const [state,setState]=useState([]);
useEffect(()=>{
  axios.get('https://fakestoreapi.com/products').then (response=>{
  console.log("response====>",response);
  setState(response.data)
})
},[])
const viewSingle = (id)=>{
  Navigate(`/Viewproduct/${id}`)
  console.log(id);
}
const viewCateg = (dsd)=>{
  Navigate(`/Categories/${dsd}`)
  console.log(dsd);
}
const viewCart = (id)=>{
  Navigate(`/Cart/${id}`)
  console.log(id);
}
  return (
    <div>
      <Ecommercenavbar/>
       <Carousel
       showThumbs={false}
       autoPlay={true}
       transitionTime={2}
       infiniteLoop={true}
       showStatus={false}>


       <div className='img1'>
                    <img src="https://blogscdn.thehut.net/wp-content/uploads/sites/2/2016/07/26174837/1200x672-lf-wk30-cg-Group-shot-v2.jpg" />
                    {/* <p className="legend">Legend 1</p> */}
       </div>
       <div className='img2'>
                    <img src="https://i.pcmag.com/imagery/articles/03AFXfXUHfQA8i4qv3cOUUZ-11..v1662598111.jpg" />
                    {/* <p className="legend">Legend 2</p> */}
       </div>
        <div className='img3'>
                    <img src="https://c4.wallpaperflare.com/wallpaper/273/229/200/the-camera-black-background-wallpaper-preview.jpg" />
                    {/* <p className="legend">Legend 3</p> */}
       </div>
        <div className='img4'>
                    <img src="https://cdn.pixabay.com/photo/2020/10/21/18/07/laptop-5673901_960_720.jpg" />
                    {/* <p className="legend">Legend 4</p> */}
       </div>
       </Carousel>
       <br/>
       <div>
        <h1 className='cat'>CATEGORIES</h1>
        <br/>
        <div className='catog'>
        <nav className="navbar">
         <ul className="nav-links">
           <div className="menubarl">
              <li><a href="" onClick={()=>{viewCateg("electronics")}}>ELECTRONICS</a></li>

              <li><a  onClick={()=>{viewCateg("jewelery")}}>JEWELLERY</a></li>
              <li><a  onClick={()=>{viewCateg("women's clothing")}}>WOMEN'S CLOTHING</a></li>
              <li><a  onClick={()=>{viewCateg("men's clothing")}}>MEN'S CLOTHING</a></li>
            </div>
          </ul>
        </nav>
        </div>
        </div> 

        <br/>
        <br/>
       <div className='trends'>
         <h1>TRENDING PRODUCTS</h1>
         <br/>
         <div class="card-deck">
         {state.map((product)=>(
                  
                   <div class="card">
                     <img src={product?.image} class="card-img-top" alt="..."/>
                     <div class="card-body">
                       <h5 class="card-title">{product?.title}</h5>
                       <p class="card-text"onClick={()=>{viewSingle(product?.id)}} >Price: ${product?.price}</p>
                       <p class="card-prod"onClick={()=>{viewSingle(product?.id)}} >View product</p>
                       <p class="card-cart"onClick={()=>{viewCart(product?.id)}} >Add Cart</p>
                       {/* <p class="card-text"><small class="text-muted">{product?.description}</small></p> */}
                     </div>
                   </div>
                  
                
         ))}
  </div>
 </div>
 </div>
  )
}
