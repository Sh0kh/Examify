import React, { useState, useEffect } from 'react';

function Speaking() {
  const [isRecording, setIsRecording] = useState(false);
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const [audioBlob, setAudioBlob] = useState(null);

  useEffect(() => {

    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      console.log('Recording supported!');
    } else {
      console.error('Recording not supported in this browser.');
    }
  }, []);

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const recorder = new MediaRecorder(stream);
      setMediaRecorder(recorder);

      recorder.start();
      setIsRecording(true);

      const audioChunks = [];
      recorder.ondataavailable = (event) => {
        audioChunks.push(event.data);
      };

      recorder.onstop = () => {
        const audioBlob = new Blob(audioChunks, { type: 'audio/wav' });
        setAudioBlob(audioBlob);
      };
    } catch (error) {
      console.error('Error accessing microphone', error);
    }
  };

  const stopRecording = () => {
    if (mediaRecorder) {
      mediaRecorder.stop();
      setIsRecording(false);
    }
  };

  return (
    <div className='Speaking'>
      <div className='Book__header p-[10px] bg-[#b4b0b08c]'>
        <div className='flex items-center justify-between'>
          <h2>Speaking exam</h2>
          <div className='flex items-center gap-[10px]'>
            <button className='bg-[red] px-[20px] font-bold py-[7px] rounded-[8px] text-[white] transition duration-500 border-[2px] border-[red] hover:bg-transparent hover:text-[red]'>
              Leave exam
            </button>
            <button className='bg-green-500 px-[20px] font-bold py-[7px] rounded-[8px] text-[white] transition duration-500 border-[2px] border-green-500 hover:bg-transparent hover:text-green-500'>
              Next exam
            </button>
          </div>
        </div>
      </div>
      <div className='p-[20px]'>
        <h3>Record your answer</h3>
        <button
          onClick={isRecording ? stopRecording : startRecording}
          className='bg-blue-500 px-[20px] font-bold py-[7px] rounded-[8px] text-[white] transition duration-500 border-[2px] border-blue-500 hover:bg-transparent hover:text-blue-500'>
          {isRecording ? 'Stop Recording' : 'Start Recording'}
        </button>
        {audioBlob && (
          <div className='mt-[20px]'>
            <h4>Recorded Audio:</h4>
            <audio controls src={URL.createObjectURL(audioBlob)} />
            <a
              href={URL.createObjectURL(audioBlob)}
              download='recording.wav'
              className='block mt-[10px] text-blue-500 underline'>
              Download Recording
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default Speaking;
