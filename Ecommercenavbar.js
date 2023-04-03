import React, { useEffect, useState } from 'react';
import "./Ecommercenavbar.css";
import { Link, useNavigate } from 'react-router-dom';
import {ShoppingCartOutlined} from '@mui/icons-material';
export default function Ecommercenavbar() {

  return (
    <div>
       <div>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="style.css" />
        <title>Document</title>
        <nav className="navbar">
          {/* LOGO */}
          <div className="logo"><ShoppingCartOutlined /> E-commerce</div>
          {/* NAVIGATION MENU */}
          <ul className="nav-links">
            {/* USING CHECKBOX HACK */}
            {/* <input type="checkbox" id="checkbox_toggle" />
            <label htmlFor="checkbox_toggle" className="hamburger">☰</label> */}
            {/* NAVIGATION MENUS */}
            <div className="menu">
              <li><a href="/">Home</a></li>
              <li><a href="/">Products</a></li>
              <li className="services">
                <a href="/">Categories</a>
               </li>
         <li><a href="/Cart/1">Cart🛒</a></li>
         <li><a href="/Loginnpage">Login</a></li>
            </div>
          </ul>
        </nav>
      </div>
    </div>
  )
          }
