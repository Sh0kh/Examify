import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Listening from './Listening/Listening';
import WarningModal from './Modal/WarningModal';
import Reading from './Reading/Reading';
import { useSelector } from 'react-redux';
import Speaking from './Speaking/Speaking';
import Writing from './Writing/Writing';

function Book1() {
  const currentComponent = useSelector((state) => state.component.currentComponent);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleBeforeUnload = (event) => {
      event.preventDefault();
      event.returnValue = ''; // Для отображения стандартного предупреждения
    };

    const handleRouteChange = (event) => {
      const confirmLeave = window.confirm("Вы уверены, что хотите покинуть эту страницу?");
      if (!confirmLeave) {
        navigate(location.pathname); // Остаемся на текущем маршруте
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    const handlePopState = (event) => {
      event.preventDefault();
      handleRouteChange(event);
    };

    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
      window.removeEventListener('popstate', handlePopState);
    };
  }, [navigate, location.pathname]);

  return (
    <div className='Book_1'>
      {currentComponent === 'Listening' && <Listening />}
      {currentComponent === 'Reading' && <Reading />}
      {currentComponent === 'Speaking' && <Speaking />}
      {currentComponent === 'Writing' && <Writing />}
      <WarningModal />
    </div>
  );
}

export default Book1;
