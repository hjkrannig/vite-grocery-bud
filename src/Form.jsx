import React from 'react'
import { useState } from 'react'
import { toast } from 'react-toastify'

const Form = ({ addItem }) => {
  const [itemName, setItemName] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    if (!itemName) {
      toast.error('Please...give me an item!')
      return
    }
    addItem(itemName)
    setItemName('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>grocery bud</h2>
      <div className="form-control">
        <input
          type="text"
          className="form-input"
          name="item"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
        />
        <button type="submit" className="btn">
          add item
        </button>
      </div>
    </form>
  )
}

export default Form
