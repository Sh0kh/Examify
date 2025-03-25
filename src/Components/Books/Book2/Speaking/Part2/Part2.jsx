import React, { useState, useRef, useEffect, useCallback } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import ReactLoading from 'react-loading';
import {axiosAPI1} from '../../../../../Service/axios'


function Part2() {
    const { ID } = useParams();
    const [isRecording, setIsRecording] = useState(false);
    const [timeLeft, setTimeLeft] = useState(30); // Первый таймер (обратный отсчет)
    const [secondTimer, setSecondTimer] = useState(60); // Второй таймер (время записи)
    const [volume, setVolume] = useState(0); // Уровень громкости
    const [loading, setLoading] = useState(false); // Уровень загрузки
    const [success, setSuccess] = useState(null); // Статус отправки
    const timerRef = useRef(null);
    const mediaRecorderRef = useRef(null);
    const audioContextRef = useRef(null);
    const analyserRef = useRef(null);
    const microphoneRef = useRef(null);
    const processorRef = useRef(null);

    const sendAudioToBackend = useCallback(async (audioBlob) => {
        const formData = new FormData();
        formData.append('voiceAnswer', audioBlob, 'recording.wav');

        setLoading(true);
        setSuccess(null); // Сбрасываем статус отправки

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
                        question: 'Describe a time when you enjoyed visiting a member of your family in their home.',
                        partNumber: 2,
                    },
                }
            );

            if (response.data.statusCode === 200) {
                setSuccess(true);
            } else if (response.data.statusCode === 409) {
                setSuccess(false);
            }
        } catch (error) {
            console.error('Error sending audio to backend', error);
            setSuccess(false);
        } finally {
            setLoading(false);
        }
    }, [ID]); // Добавили ID в зависимости

    const startSecondTimer = useCallback(() => {
        const secondTimerRef = setInterval(() => {
            setSecondTimer((prevTime) => {
                if (prevTime <= 1) {
                    stopRecording(); // Автоматически останавливаем запись
                    clearInterval(secondTimerRef); // Очищаем второй таймер
                    return 0; // Устанавливаем значение таймера на 0
                }
                return prevTime - 1; // Уменьшаем время
            });
        }, 1000); // Уменьшаем каждую секунду

        return () => clearInterval(secondTimerRef); // Очистка второго таймера
    }, []);

    const startRecording = useCallback(async () => {
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
                stopAudioProcessing(); // Останавливаем обработку звука, когда запись останавливается
                sendAudioToBackend(audioBlob); // Отправляем аудио на сервер
            };

            recorder.start();
            setIsRecording(true);

            // Создание аудио контекста и анализатора для индикации громкости
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
                const volumeValue = Math.max(...dataArray) / 256; // Нормализуем значение громкости
                setVolume(volumeValue); // Обновляем состояние громкости
            };

            audioContextRef.current = audioContext;
            analyserRef.current = analyser;
            microphoneRef.current = microphone;
            processorRef.current = processor;

        } catch (error) {
            console.error('Error accessing microphone', error);
        }
    }, [sendAudioToBackend]); // Обновлено: добавили sendAudioToBackend в зависимости

    useEffect(() => {
        // Запускаем первый таймер
        if (timeLeft > 0) {
            timerRef.current = setInterval(() => {
                setTimeLeft((prevTime) => prevTime - 1);
            }, 1000);
        } else {
            // Когда первый таймер достигает нуля, запускаем запись и запускаем второй таймер
            startRecording();
            clearInterval(timerRef.current); // Очищаем первый таймер
            startSecondTimer(); // Запускаем второй таймер
        }

        return () => clearInterval(timerRef.current); // Очистка таймера при размонтировании компонента
    }, [timeLeft, startRecording, startSecondTimer]); // Добавляем зависимости

    const stopRecording = () => {
        if (mediaRecorderRef.current) {
            mediaRecorderRef.current.stop();
            setIsRecording(false);
            clearInterval(timerRef.current); // Очищаем таймер, когда запись остановлена
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
        setVolume(0); // Сбрасываем громкость
    };

    return (
        <div className='Container'>
            <div className='pb-[50px]'>
                <div className='border-[2px] p-[20px] mt-[20px]'>
                    <div className='flex items-center gap-[20px]'>
                        <h2 className='font-bold text-[30px]'>Part 2</h2>
                        <p className='font-bold text-[30px]'>
                            {timeLeft}  {/* Первый таймер */}
                        </p>
                    </div>
                    <p className='mt-4 text-[25px] font-bold'>Second Timer: {secondTimer}</p> {/* Отображаем второй таймер */}
                    <p>
                        Describe a time when you enjoyed visiting a member of your family in their home.
                    </p>
                    <p>
                        You should say:
                    </p>
                    <ul className='list-disc pl-5'>
                        <li>
                            who you visited and where they lived
                        </li>
                        <li>
                            why you made this visit
                        </li>
                        <li>
                            what happened during this visit
                        </li>
                    </ul>
                    <p>
                        and explain what you enjoyed about this visit.
                    </p>
                    <textarea className='w-full h-[1000px] p-[10px] border-[2px] border-black resize-none mt-[20px]' placeholder='Write your notes here ....'></textarea>

                    {/* Условное отображение кнопки */}
                    {!loading && (success === null || success === false) && (
                        <div className='w-[150px] mx-auto'>
                            <button
                                onClick={isRecording ? stopRecording : startRecording}
                                className={`bg-blue-500 px-[20px] font-bold py-[7px] rounded-[8px] text-[white] transition duration-500 ${isRecording ? ' bg-red-600' : 'bg-green-600'}`}>
                                {isRecording ? 'Stop Recording' : 'Start Recording'}
                            </button>
                            {isRecording && (
                                <div className='mt-[10px] flex items-center'>
                                    <div className='w-full h-[5px] bg-gray-300 overflow-hidden flex flex flex-row-reverse'>
                                        <div
                                            className='h-full bg-green-500'
                                            style={{ width: `${volume * 100}%` }}
                                        ></div>
                                    </div>
                                </div>
                            )}
                        </div>
                    )}

                    {loading && (
                        <div className='flex items-center justify-center mt-4'>
                            <div className="flex items-center">
                                <ReactLoading type="bubbles" color="blue" height={50} width={50} />
                            </div>
                        </div>
                    )}

                    {/* Отображение успеха или ошибки */}
                    {success !== null && (
                        <div className={`mt-4 text-lg font-bold ${success ? 'text-green-500' : 'text-red-500'}`}>
                            {success ? 'Audio sent successfully!' : 'Error sending audio.'}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Part2;
