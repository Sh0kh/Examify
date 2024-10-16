import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ element }) => {
  // Проверяем, есть ли токен в localStorage
  const token = localStorage.getItem('token');

  // Если токен есть, рендерим защищённый компонент, иначе перенаправляем на /login
  return token ? element : <Navigate to="/login" />;
};

export default PrivateRoute;