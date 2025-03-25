import { useEffect, useRef } from "react";
import CONFIG from "../../../Service/Config2";

const AudioPlayer = ({ audioPath }) => {
    const audioRef = useRef(null);

    useEffect(() => {
        if (audioPath) {
            const fullPath = `${CONFIG.API_URL}${audioPath}`;
            const audio = new Audio(fullPath);
            audioRef.current = audio;

            audio.play().catch((err) => {
                if (err.name !== "AbortError") {
                    console.error("Ошибка воспроизведения:", err);
                }
            });
            return () => {
                if (audioRef.current) {
                    audioRef.current.pause();
                    audioRef.current.currentTime = 0;
                }
            };
        }
    }, [audioPath]);

    return null;
};

export default AudioPlayer;
