import axios from 'axios';
import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import ReactLoading from 'react-loading';
import { axiosAPI1 } from '../../../../../Service/axios'


function Speaking3() {
    const [isRecording, setIsRecording] = useState(false);
    const [audioBlob, setAudioBlob] = useState(null);
    const [timeLeft, setTimeLeft] = useState(30); 
    const [volume, setVolume] = useState(0); // State to track volume level
    const [suc, setSuc] = useState(null); // State to track success of audio submission
    const [loading, setLoading] = useState(false); // Set initial loading state to false
    const timerRef = useRef(null);
    const mediaRecorderRef = useRef(null);
    const audioContextRef = useRef(null);
    const analyserRef = useRef(null);
    const microphoneRef = useRef(null);
    const processorRef = useRef(null);
    const { ID } = useParams(); // Retrieve exam ID from URL

    if(audioBlob){
    }
    useEffect(() => {
        return () => {
            clearInterval(timerRef.current); // Clear the timer on component unmount
            stopRecording(); // Ensure any ongoing recording is stopped
        };
    }, []);

    const startRecording = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            const recorder = new MediaRecorder(stream);
            mediaRecorderRef.current = recorder;

            const audioChunks = [];
            recorder.ondataavailable = (event) => {
                audioChunks.push(event.data);
            };

            recorder.onstop = () => {
                const audioBlob = new Blob(audioChunks, { type: 'audio/wav' });
                setAudioBlob(audioBlob);
                stopAudioProcessing(); // Stop audio processing when recording stops
                sendAudioToBackend(audioBlob); // Send audio when recording stops
            };

            recorder.start();
            setIsRecording(true);
            setTimeLeft(30); // Reset the timer

            timerRef.current = setInterval(() => {
                setTimeLeft((prevTime) => {
                    if (prevTime <= 1) {
                        stopRecording(); // Automatically stop recording
                        return 0; // Ensure timer shows 0
                    }
                    return prevTime - 1; // Decrease time
                });
            }, 1000); // Decrease every second

            // Create audio context and analyser for volume indication
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();
            const analyser = audioContext.createAnalyser();
            const microphone = audioContext.createMediaStreamSource(stream);
            const processor = audioContext.createScriptProcessor(256, 1, 1);

            microphone.connect(analyser);
            analyser.connect(processor);
            processor.connect(audioContext.destination);

            analyser.fftSize = 256;
            const bufferLength = analyser.frequencyBinCount;
            const dataArray = new Uint8Array(bufferLength);

            processor.onaudioprocess = () => {
                analyser.getByteTimeDomainData(dataArray);
                let sum = 0;
                for (let i = 0; i < dataArray.length; i++) {
                    const value = (dataArray[i] - 128) / 128;
                    sum += value * value;
                }
                const volumeValue = Math.sqrt(sum / dataArray.length); // RMS of the waveform
                setVolume(volumeValue); // Update volume state
            };

            audioContextRef.current = audioContext;
            analyserRef.current = analyser;
            microphoneRef.current = microphone;
            processorRef.current = processor;

        } catch (error) {
            console.error('Error accessing microphone', error);
        }
    };

    const stopRecording = () => {
        if (mediaRecorderRef.current) {
            mediaRecorderRef.current.stop();
            setIsRecording(false);
            clearInterval(timerRef.current); // Clear the timer when recording is stopped
        }
    };

    const stopAudioProcessing = () => {
        if (audioContextRef.current) {
            if (microphoneRef.current) microphoneRef.current.disconnect();
            if (analyserRef.current) analyserRef.current.disconnect();
            if (processorRef.current) processorRef.current.disconnect();

            if (audioContextRef.current.state !== 'closed') {
                audioContextRef.current.close();
            }
        }

        microphoneRef.current = null;
        analyserRef.current = null;
        processorRef.current = null;
        audioContextRef.current = null;
        setVolume(0); // Reset volume
    };

    const sendAudioToBackend = async (audioBlob) => {
        const formData = new FormData();
        formData.append('voiceAnswer', audioBlob, 'recording.wav');

        setLoading(true); // Start loading before the request

        try {
            const response = await axiosAPI1.post(
                `/ielts/exam/attempt/create/outline-speaking/${ID}`,
                formData,
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`,
                        'Content-Type': 'multipart/form-data',
                    },
                    params: {
                        question: '3. How often do you watch TV programmes about history now ?',
                        partNumber: 1,
                    },
                }
            );

            if (response.data.statusCode === 200) {
                setSuc(true); // Success
            } else if (response.data.statusCode === 409) {
                setSuc(false); // Retry case
            }
        } catch (error) {
            setSuc(false); // If there's an error, ensure to allow retry
        } finally {
            setLoading(false); // End loading after the request completes
        }
    };

    return (
        <div>
            <div className='border-[2px] p-[20px] mt-[20px]'>
                <h2 className='font-bold text-[30px]'>Part 1</h2>
                <p className='font-bold text-[20px] mb-[15px]'>
                3. How often do you watch TV programmes about history now ?
                </p>
                {/* Loading Indicator */}
                {loading ? (
                    <div className='flex items-center justify-center'>
                        <ReactLoading type="spinningBubbles" color="#000" height={50} width={50} />
                    </div>
                ) : (
                    <div className='w-[150px] mx-auto'>
                        {!suc  && (
                            <button
                                onClick={isRecording ? stopRecording : startRecording}
                                className={`bg-blue-500 px-[20px] font-bold py-[7px] rounded-[8px] text-[white] transition duration-500 ${isRecording ? 'bg-red-600' : 'bg-green-600'}`}>
                                {isRecording ? 'Stop Recording' : 'Start Recording'}
                            </button>
                        )}
                        {/* Timer Display */}
                        {isRecording && (
                            <div className='mt-[10px] text-center'>
                                <p className='font-bold text-[20px]'>Time Left: {timeLeft}s</p>
                            </div>
                        )}
                        {/* Volume Indicator */}
                        {isRecording && (
                            <div className='mt-[10px] flex items-center'>
                            <div className='w-full h-[5px] bg-gray-300 overflow-hidden flex flex flex-row-reverse'>
                                <div
                                    className='h-full bg-green-500'
                                    style={{ width: `${volume * 100}%` }}
                                ></div>
                            </div>
                            <div className='w-full h-[5px] bg-gray-300 overflow-hidden flex'>
                                <div
                                    className='h-full bg-green-500'
                                    style={{ width: `${volume * 100}%` }}
                                ></div>
                            </div>
                        </div>
                        )}
                    </div>
                )}
                {suc !== null && !loading && (
                    <div className='mx-auto w-[500px] text-center'>
                        {suc ? (
                            <h1>
                                Audio submitted successfully! 
                            </h1>
                        ) : (
                            <div>
                                <h1>Submission failed. Please try again.</h1>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Speaking3;
