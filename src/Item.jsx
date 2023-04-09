import React, { useState } from 'react'

const Item = ({ id, name, completed, removeItem, editItem }) => {
  return (
    <div className="single-item">
      <input
        type="checkbox"
        checked={completed}
        onChange={() => editItem(id)}
      />
      <p
        style={{
          textTransform: 'capitalize',
          textDecoration: completed && 'line-through',
        }}
      >
        {name}
      </p>

      <button
        type="button"
        className="btn remove-btn"
        onClick={() => removeItem(id)}
      >
        remove item
      </button>
    </div>
  )
}

export default Item
