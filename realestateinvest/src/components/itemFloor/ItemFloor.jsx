
import main from '../../style/main.scss';
function ItemFloor(arr){
  console.log(arr);
  console.log(arr.arr.Address);
  return(
    <div className="floor-border">
      <img src="https://s3-3.topnlab.ru/files-service/storage/d575c058c47e45bcffa3fe699bb9/0e1386548a19b3d0b9d359729363899e.jpg" alt="" />
      <div className="addres-decor">{arr.arr.Address}</div>
      <div className="price-decor">{arr.arr.Price}</div>


    </div>
  )
}

export default ItemFloor;