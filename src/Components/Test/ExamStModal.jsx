import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { setRemainSection } from '../../Redux/ComponentSlice'; // Adjust the import path as necessary
import 'react-toastify/dist/ReactToastify.css';

function ExamStModal({ isOpen, onClose, data }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const id = data?.examId;
  const remainSection = data?.remainSection;

  const ExamStart = () => {
    // Dispatch remainSection to Redux
    dispatch(setRemainSection(remainSection));
    navigate(`/book1/${id}`);
  };
  console.log(remainSection);
  

  return (
    <div
      onClick={onClose}
      className={`fixed inset-0 bg-[#0000006b] z-50 flex items-center justify-center transition-opacity duration-500 ${
        isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}
    >
      <div
        className={`TestModal p-[10px] bg-MainColor rounded-[8px] w-[20%] py-[30px] transform transition-all duration-500 ${
          isOpen ? 'scale-100 opacity-100 translate-y-0' : 'scale-75 opacity-0 translate-y-10'
        }`}
        onClick={(e) => e.stopPropagation()} // Prevents closing when clicking inside modal
      >
        <h2 className="text-center text-[white] text-[30px]">Test ?</h2>
        <div className="flex items-center justify-center gap-[30px] mt-[10px]">
          <button
            onClick={ExamStart}
            className="bg-[white] p-[10px] rounded-[5px] px-[20px] border-[2px] transition duration-500 hover:bg-transparent hover:text-[white]"
          >
            Yes
          </button>
          <button
            onClick={onClose}
            className="bg-[white] p-[10px] rounded-[5px] px-[20px] border-[2px] transition duration-500 hover:bg-transparent hover:text-[white]"
          >
            No
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default ExamStModal;
