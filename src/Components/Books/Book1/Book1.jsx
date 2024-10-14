import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Listening from './Listening/Listening';
import WarningModal from './Modal/WarningModal';
import Reading from './Reading/Reading';
import { useSelector, useDispatch } from 'react-redux';
import Speaking from './Speaking/Speaking';
import Writing from './Writing/Writing';
import { setComponent } from '../../../Redux/ComponentSlice'; // Make sure this action exists

function Book1() {
  const dispatch = useDispatch();
  const currentComponent = useSelector((state) => state.component.currentComponent);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Set Listening as the default component when the component mounts
    dispatch(setComponent('Listening'));
  }, [dispatch]);

  useEffect(() => {
    const handleBeforeUnload = (event) => {
      event.preventDefault();
      event.returnValue = ''; // To display the standard warning message
    };

    const handleRouteChange = (event) => {
      const confirmLeave = window.confirm("Are you sure you want to leave this page?");
      if (!confirmLeave) {
        navigate(location.pathname); // Stay on the current route
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
