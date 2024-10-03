// import React, { useContext } from 'react'
// import './CSS/ShopCategory.css'
// import { ShopContext } from '../Context/ShopContext'
// import dropdown_icon from '../Components/Assets/dropdown_icon.png'
// import Item from '../Components/Items/Item'

// const ShopCategory = (props) => {
// const {all_product} = useContext(ShopContext);
//   return (
//     <div className='shop-category'>
//       <img src={props.banner} alt="" />
//       <div className="shopcategory-indexSort">
//         <p>
//           <span>Showing 1-12</span> out of 36 products
//         </p>
//         <div className="shopcategory-sort">
//           Sort by <img src={dropdown_icon} alt="" />
//         </div>
//       </div>
//       <div className="shopcategory-products">
//         {all_product.map((item,i)=>{
//           if (props.category===item.category) {
            
//           }

        
//         })}
//         </div>
//       </div>
//       export default ShopCategory;


import React, { useContext } from 'react';
import './CSS/ShopCategory.css';
import { ShopContext } from '../Context/ShopContext';
import dropdown_icon from '../Components/Assets/dropdown_icon.png';
import Item from '../Components/Items/Item';

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);

  return (
    <div className="shop-category">
      <img src={props.banner} alt="" />
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className="shopcategory-sort">
          Sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>

      <div className="shopcategory-products">
        {all_product.map((item, i) => {
          if (props.category === item.category) {
            // Return the Item component for matching category
            return <Item key={i} {...item} />;
          }
          // Optionally, you can return null for non-matching cases
          return null;
        })}
      </div>
    </div>
  );
};

export default ShopCategory;
