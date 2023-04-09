import React from 'react'
import Item from './Item'

const Items = ({ items, removeItem, editItem }) => {
  return (
    <div className="items">
      {items.map((item) => {
        return (
          <Item
            key={item.id}
            removeItem={removeItem}
            editItem={editItem}
            {...item}
          />
        )
      })}
    </div>
  )
}

export default Items
