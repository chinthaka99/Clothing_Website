import React from 'react'
import './popular.css'
import data_product from '../assets/data.js'
import Item from '../items/Item.jsx'

const Popular = () => {
  return (
    <div className='popular'>
        <h1>POPULAR IN WOMEN</h1>
        <hr></hr>
        <div className="popular-items">
           {data_product.map((item,i)=>{
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}></Item>
           })} 
        </div>
    </div>
  )
}

export default Popular;
