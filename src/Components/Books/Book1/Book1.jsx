import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Listening from './Listening/Listening';
import WarningModal from './Modal/WarningModal';
import Reading from './Reading/Reading';
import { useSelector, useDispatch } from 'react-redux';
import Speaking from './Speaking/Speaking';
import Writing from './Writing/Writing';
import { setComponent } from '../../../Redux/ComponentSlice';

function Book1() {
  const dispatch = useDispatch();
  const currentComponent = useSelector((state) => state.component.currentComponent);
  const remainSection = useSelector((state) => state.component.remainSection);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // If remainSection is defined, set it as the current component
    // Otherwise, default to 'LISTENING'
    const initialComponent = remainSection || 'LISTENING';
    dispatch(setComponent(initialComponent));
  }, [dispatch, remainSection]);

  useEffect(() => {
    const handleBeforeUnload = (event) => {
      event.preventDefault();
      event.returnValue = ''; // To display the standard warning message
    };

    const handleRouteChange = (event) => {
      const confirmLeave = window.confirm("Are you sure you want to leave this page?");
      if (!confirmLeave) {
        navigate(location.pathname); // Use the location from the hook
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
      {currentComponent === 'LISTENING' && <Listening />}
      {currentComponent === 'READING' && <Reading />}
      {currentComponent === 'SPEAKING' && <Speaking />}
      {currentComponent === 'WRITING' && <Writing />}
      <WarningModal />
    </div>
  );
}

export default Book1;
