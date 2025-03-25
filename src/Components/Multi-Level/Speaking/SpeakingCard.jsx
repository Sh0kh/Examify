import React, { useState, useEffect, useRef } from 'react';
import ReactLoading from 'react-loading';
import { axiosAPI2 } from '../../../Service/axios';
import { useParams } from 'react-router-dom';

function SpeakingCard({ data, index, onResponse, time }) {
    const { ID } = useParams()
    const [isRecording, setIsRecording] = useState(false);
    const [audioBlob, setAudioBlob] = useState(null);
    const [timeLeft, setTimeLeft] = useState(time);
    const [volume, setVolume] = useState(0);
    const [suc, setSuc] = useState(null);
    const [loading, setLoading] = useState(false);
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
                stopAudioProcessing(); // Stop audio processing when recording stops
            };

            recorder.start();
            setIsRecording(true);
            setTimeLeft(time); // Reset the timer

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
        setVolume(0);
    };




    const sendAudio = async () => {
        if (!audioBlob) return;
        try {
            setLoading(true);
            const formData = new FormData();
            formData.append('audio', audioBlob, 'recording.ogg');
            formData.append('exam_id', ID);
            formData.append('question_id', data.id); // Предполагаем, что data содержит id вопроса

            const response = await axiosAPI2.post('/user/upload-speaking', formData, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                    'Content-Type': 'multipart/form-data',
                },
            });

            setSuc(true);
            if (onResponse) {
                onResponse({
                    answer_id: response?.data?.id,
                    file_path: response.data?.audio_path,
                    question_id: data.id,
                    question_type: 'speaking',
                    // exam_id:'',
                    answer_text: response?.data?.transcription || ""
                });
            }
        } catch (error) {
            console.error('Upload error:', error);
            setSuc(false);
            if (onResponse) {
                onResponse({
                    status: 'error',
                    error: error,
                    questionId: data.id,
                    index
                });
            }
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (audioBlob) {
            setSuc(false);
            setLoading(null);
            sendAudio();
        }
    }, [audioBlob,]);

    return (
        <div>
            <div className='border-t-[2px] p-[20px] mt-[20px]'>
                <h2 className='font-bold text-[25px]'>Question {index + 1}</h2>
                <div className='text-[16px] mb-[15px]' dangerouslySetInnerHTML={{ __html: data?.question }} />
                {loading ? (
                    <div className='flex items-center justify-start'>
                        <ReactLoading type="spinningBubbles" color="#000" height={50} width={50} />
                    </div>
                ) : (
                    <div className='w-[150px] '>
                        {!suc && (
                            <button
                                onClick={isRecording ? stopRecording : startRecording}
                                className={`bg-blue-500 px-[30px] text-[16px] w-[250px] font-bold py-[5px] rounded-[8px] text-[white] transition duration-500 ${isRecording ? 'bg-red-600' : 'bg-[#2970FF]'}`}>
                                {isRecording ? 'Stop Recording' : 'Start Recording'}
                            </button>
                        )}
                        {isRecording && (
                            <div className='mt-[10px] text-center'>
                                <p className='font-bold text-[20px]'>Time Left: {timeLeft}s</p>
                            </div>
                        )}
                        {isRecording && (
                            <div className='mt-[10px] flex items-center justify-center'>
                                {/* Анимированный индикатор уровня звука */}
                                <div className='relative w-[200px] h-[20px] bg-gray-800 rounded-full overflow-hidden'>
                                    <div
                                        className='absolute top-0 left-0 h-full bg-gradient-to-r from-green-400 via-yellow-400 to-red-500'
                                        style={{
                                            width: `${Math.min(volume * 100, 100)}%`, // Ограничиваем максимальную ширину до 100%
                                            transition: 'width 0.1s ease-in-out', // Плавная анимация изменения ширины
                                        }}
                                    ></div>
                                    <div className='absolute inset-0 flex items-center justify-center'>
                                        <p className='text-white text-[12px] font-bold z-10'>
                                            Volume: {Math.round(volume * 100)}%
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                )}
                {suc !== null && !loading && (
                    <div className=''>
                        {suc ? (
                            <h1>Audio submitted successfully!</h1>
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

export default SpeakingCard;
