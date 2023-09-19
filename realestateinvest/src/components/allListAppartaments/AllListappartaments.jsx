import { useState, useEffect } from "react";
import axios from 'axios';
import xml from "xml-js";
import XMLParser from 'react-xml-parser';

import ListApartaments from '../listapartaments/listapartamens';

import main from '../../style/main.scss';
import ItemFloor from "../itemFloor/ItemFloor";




function AllRealEstateList() {
  const [allInfo, setAllInfo] = useState();
 

  const printInfo =[];
  const arrList = [];
  
  const newarrlist = [];


  useEffect(() => {
    fetch("https://feed-p.topnlab.ru//export/avito/b1Y2QUZMejZhdHhxaDQrWg,,/feed.xml?alex")
      .then(res => res.text())
      .then(data => {
        var xml = new XMLParser().parseFromString(data);
        setAllInfo(xml.children);
       
        // setImg(xml.children[3].children[32].children[7].attributes.url)

      })
      .catch(err => console.log(err));
  }, []);

 

  for (let i =0; i<allInfo.length; i++){
    // console.log(allInfo[i]);
    printInfo.push(allInfo[i])
  }

  for (let i =0; i<printInfo.length; i++){
   if(printInfo[i].children[1].value==='Квартиры' || printInfo[i].children[1].value==='Комнаты' ){
    
    arrList.push(printInfo[i])
   }
  }


let elem ={};

  for (let i =0; i<arrList.length; i++){
    for(let j =0; j<arrList[i].children.length; j++){
      if(arrList[i].children[j].name==='Id'){
        elem = {
          Id : arrList[i].children[j].value
        }
      }
      if(arrList[i].children[j].name==='Address'){
        elem['Address'] =arrList[i].children[j].value
      }
      if(arrList[i].children[j].name==='Rooms'){
        elem['Rooms'] =arrList[i].children[j].value
      }
      if(arrList[i].children[j].name==='Floor'){
        elem['Floor'] =arrList[i].children[j].value
      }
      if(arrList[i].children[j].name==='Floors'){
        elem['Floors'] =arrList[i].children[j].value
      }
      if(arrList[i].children[j].name==='Square'){
        elem['Square'] =arrList[i].children[j].value
      }
      if(arrList[i].children[j].name==='Description'){
        elem['Description'] =arrList[i].children[j].value
      }
      if(arrList[i].children[j].name==='Price'){
        elem['Price'] =arrList[i].children[j].value
      }

      if(arrList[i].children[j].name==='Images'){
        const imglehgth = arrList[i].children[j].children.length;
        const imgdata = arrList[i].children[j].children;

        elem['Images'] =imgdata;
      }
      

    }
    newarrlist.push(elem)
   
  }
 
 

 


  // console.log(printInfo[2].children[1].value);
  
  // console.log(arrList);
  console.log(newarrlist);
  



 
  
  // console.log( printInfo[2].children[5].value);

  // console.log(printInfo[2].children[0].attributes.url);



  
   
  





  return (
    <div className="listfllor">

    {newarrlist.map((item)=>(
      <ListApartaments arr={item}/>
    ))}
    {/* {newarrlist.map((item)=>(
      <ItemFloor arr={item} />
      // <div key={item.Id}>{item.Price}</div>
    ))} */}





      {/* <div className="container list-main">

        <ListApartaments 
        address={address} 
        img={img} 
        rooms={rooms} 
        price={price} 
        floor={floor} 
        allfloor={allfloor} />


      </div> */}

    </div>
  )
}
export default AllRealEstateList;