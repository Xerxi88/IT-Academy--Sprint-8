import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user}=useContext(UserContext);
  return (user)
    ? children
    : <Navigate to="/"/>
}

export default PrivateRoute