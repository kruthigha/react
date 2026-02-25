import React, { useContext } from 'react'
import UserContext from '../utils/UserContext'

const Grocery = () => {
  const {name} = useContext(UserContext)
  return (
    <h1>
      Our Groceryonline Store having We have multiple child components inside this web page + {name}
    </h1>
  )
}

export default Grocery
