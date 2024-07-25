import React from 'react';
import { Navigate } from 'react-router-dom';
import { AppState } from './context/UserContext';

const ProtectedRoutes = ({ page }) => {
  const { user } = AppState();
  
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return page;
};

export default ProtectedRoutes;
