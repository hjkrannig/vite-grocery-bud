import { useState } from 'react'
import Form from './Form'
import { ToastContainer, toast } from 'react-toastify'
import { nanoid } from 'nanoid'
import Items from './Items'

const localeDB = 'storedItems'

const App = () => {
  const [items, setItems] = useState(getLocalStorage())

  function getLocalStorage() {
    // let storage = localStorage.getItem(localeDB)
    // if (storage) {
    //   storage = JSON.parse(localStorage.getItem(localeDB))
    // } else {
    //   storage = []
    // }
    const storage = JSON.parse(localStorage.getItem(localeDB) || '[]')
    return storage
  }

  function setLocalStorage(items) {
    localStorage.setItem(localeDB, JSON.stringify(items))
  }

  function addItem(itemName) {
    const newItem = {
      id: nanoid(),
      name: itemName,
      completed: false,
    }
    const newItems = [...items, newItem]
    setItems(newItems)
    setLocalStorage(newItems)
    toast.success('Your new ToDo is successfully added to the list!')
  }

  function removeItem(toRemoveId) {
    const newItems = items.filter((item) => item.id !== toRemoveId)
    setItems(newItems)
    setLocalStorage(newItems)
    toast.info('you have successfully deleted your toDo')
  }

  function editItem(editedItemId) {
    const newItems = items.map((item) => {
      if (item.id === editedItemId) {
        const newItem = { ...item, completed: !item.completed }
        return newItem
      } else {
        return item
      }
    })
    setItems(newItems)
    setLocalStorage(newItems)
    console.log('editItem: ', editedItemId)
  }

  return (
    <section className="section-center">
      <ToastContainer position="top-right" pauseOnFocusLoss="false" />
      <Form addItem={addItem} />
      <Items items={items} removeItem={removeItem} editItem={editItem} />
    </section>
  )
}
export default App
