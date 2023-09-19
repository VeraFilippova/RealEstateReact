// import { useState, useEffect } from "react";
// import axios from 'axios';
// import xml from "xml-js";
// import XMLParser from 'react-xml-parser';
// import realestatelist from './realestatelist.scss';
// import main from '../../style/main.scss';





// function RealEstateList (){
//   const [addres, setAddres] = useState();
//   const [img, setImg] = useState();
//   const [rooms, setRooms] = useState();
//   const [price, setPrice] = useState();
//   const [floor,setFloor] = useState();
//   const [allfloor,setAllFloor] = useState()


//   useEffect(() => {
//     fetch("https://feed-p.topnlab.ru//export/avito/b1Y2QUZMejZhdHhxaDQrWg,,/feed.xml?alex")
//         .then(res => res.text())
//         .then(data => {
//             var xml = new XMLParser().parseFromString(data); 
//             setAddres(xml.children[3].children[5].value)
//             console.log(xml.children[3])
//             console.log(xml.children[3].children[5].value)
//             console.log(xml.children[3].children[32].children[0].attributes.url)
//             console.log(xml.children[3].children[8].value);
//             setRooms(xml.children[3].children[8].value);
//             setFloor(xml.children[3].children[9].value);
//             setPrice(xml.children[3].children[31].value);
//             setAllFloor(xml.children[3].children[10].value)

//             setImg(xml.children[3].children[32].children[7].attributes.url)

//         })
//         .catch(err => console.log(err));
// }, [])




  
//   return(
//     <div>
      
//     <div className="container list-main">
//       <div className="list">
//         <div className="list__img">
//         <img src={img} alt="" />
//         </div>
//         <h5>{addres}</h5>
//         <h4>{price} руб.</h4>
//         <div className="properties">
//           <ul>
//             <li > {rooms} ком</li>
//             <li> 61 м²</li>
//             <li> {floor}/{allfloor} этаж</li>
//           </ul>
//         </div>

//       </div>
//       <div className="list">
//         <div className="list__img">
//         <img src={img} alt="" />
//         </div>
//         <div className="location-list">
        

// <h5 >{addres}</h5>
//         </div>
        
//         <h4>{price} руб.</h4>
//         <div className="properties">
//           <ul>
//             <li > {rooms} ком</li>
//             <li> 61 м²</li>
//             <li> {floor}/{allfloor} этаж</li>
//           </ul>
//         </div>

//       </div>
      

//     </div>

//     </div>
//   )
// }
// export default RealEstateList;