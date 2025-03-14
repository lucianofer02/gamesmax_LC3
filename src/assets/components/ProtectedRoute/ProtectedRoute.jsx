import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../../../context/AuthContext';

const ProtectedRoute = ({children, requiredRoles = []}) => {
    const {user, isLoading} = useAuth();
    
    
    if (!user) {
        return <Navigate to="/login" />
    }
    
    const hasntAccess = !requiredRoles.includes(user.role);

    if (hasntAccess) {
      return <Navigate to="/unauthorized" />;
    }



  return children;
}

export default ProtectedRoute;