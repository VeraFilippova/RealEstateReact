import { useState, useEffect } from "react";
import axios from 'axios';
import xml from "xml-js";
import XMLParser from 'react-xml-parser';

import main from '../../style/main.scss';





function ListApartaments  (arr){
  const img = arr.arr.Images[0].attributes.url;
  


  return(
    <div>
      
    <div className="container list-main">
      <div className="list">
        <div className="list__img">
        <img src= {img}
        
        alt="" />
        </div>
        <h5>{arr.arr.Address}</h5>
        <h4>{arr.arr.Price} руб.</h4>
        <div className="properties">
          <ul>
            <li > {arr.arr.Rooms} ком</li>
            <li> {arr.arr.Square} м²</li>
            <li> {arr.arr.Floor}/{arr.arr.Floors} этаж</li>
          </ul>
        </div>
        <button className="btn-list">подробнее</button>

      </div>
      
      

    </div>

    </div>
  )
}
export default ListApartaments;