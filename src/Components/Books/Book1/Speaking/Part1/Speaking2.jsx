import React, { useState, useEffect, useRef } from 'react';

function Speaking2() {
    const [isRecording, setIsRecording] = useState(false);
    const [audioBlob, setAudioBlob] = useState(null);
    const [timeLeft, setTimeLeft] = useState(10); 
    const [volume, setVolume] = useState(0); 
    const timerRef = useRef(null);
    const mediaRecorderRef = useRef(null);
    const audioContextRef = useRef(null);
    const analyserRef = useRef(null);
    const microphoneRef = useRef(null);
    const processorRef = useRef(null);

    useEffect(() => {
        return () => {
            clearInterval(timerRef.current); 
            stopRecording(); 
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
                stopAudioProcessing(); 
            };

            recorder.start();
            setIsRecording(true);
            setTimeLeft(10);

            timerRef.current = setInterval(() => {
                setTimeLeft((prevTime) => {
                    if (prevTime <= 1) {
                        stopRecording(); 
                        return 0; 
                    }
                    return prevTime - 1; 
                });
            }, 1000);


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
                analyser.getByteFrequencyData(dataArray);
                const volumeValue = Math.max(...dataArray) / 256; 
                setVolume(volumeValue); 
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
            clearInterval(timerRef.current); 
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

    return (
        <div>
            <div className='border-[2px] p-[20px] mt-[20px]'>
                <h2 className='font-bold text-[30px]'>Part 1</h2>
                <p className='font-bold text-[20px] mb-[15px]'>
                    2. Did you enjoy studying history at school ? Why ?
                </p>
                {audioBlob && !isRecording && (
                    <div className='mt-[20px]'>
                        <h4>Recorded Audio:</h4>
                        <audio controls src={URL.createObjectURL(audioBlob)} />
                    </div>
                )}
                <div className='w-[150px] mx-auto'>
                    <button
                        onClick={isRecording ? stopRecording : startRecording}
                        className={`bg-blue-500 px-[20px] font-bold py-[7px] rounded-[8px] text-[white] transition duration-500 ${isRecording ? ' bg-red-600' : 'bg-green-600'}`}>
                        {isRecording ? 'Stop Recording' : 'Start Recording'}
                    </button>
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
            </div>
        </div>
    );
}

export default Speaking2;
