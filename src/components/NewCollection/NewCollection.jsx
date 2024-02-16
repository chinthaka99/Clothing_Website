import React from 'react'
import './NewCollection.css'
import Item from '../items/Item'
import new_collections from '../assets/new_collections'

const NewCollection = () => {
  return (
    <div className="new-collection">
        <h1>NEW COLLECTIONS</h1>
        <hr />
        <div className="collections">
            {new_collections.map((item, i)=>{
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}></Item>
            })}
        </div>
    </div>
  )
}

export default NewCollection;
