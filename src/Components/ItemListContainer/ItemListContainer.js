import React from 'react'
import App from '../../App'

const ItemListContainer = () => {
    const data="Hola soy una props";
  return (
    <div>
        <App data={data} />
    </div>
  )
}

export default ItemListContainer