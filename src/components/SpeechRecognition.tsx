import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CiMicrophoneOn, CiPause1 } from "react-icons/ci";
import { BsArrowRepeat } from "react-icons/bs";

type SpeechToTextProps = {
  onTranscript: (transcript: string) => void;
  onClear: () => void;
};

const SpeechToText: React.FC<SpeechToTextProps> = ({ onTranscript, onClear }) => {
  const [isRecording, setIsRecording] = useState(false);
  let SpeechRecognition = window.SpeechRecognition || (window as any).webkitSpeechRecognition;
  const [recognition, setRecognition] = useState<SpeechRecognition | null>(null);

  useEffect(() => {
    if (SpeechRecognition) {
      const speechRecognition = new SpeechRecognition();
      speechRecognition.continuous = false;
      speechRecognition.interimResults = false;
      speechRecognition.lang = 'en-US';

      speechRecognition.onresult = (event: SpeechRecognitionEvent) => {
        const transcript = event.results[0][0].transcript;
        onTranscript(transcript);
      };

      speechRecognition.onerror = (event: SpeechRecognitionErrorEvent) => {
        console.error('Speech recognition error', event.error);
      };

      speechRecognition.onend = () => {
        setIsRecording(false);
      };

      setRecognition(speechRecognition);
    } else {
      console.error('Speech recognition not supported in this browser.');
    }
  }, [onTranscript]);

  const toggleRecording = () => {
    if (isRecording) {
      stopRecording();
    } else {
      startRecording();
    }
  };

  const startRecording = () => {
    if (recognition) {
      stopRecording(); // Stop any ongoing recording
      recognition.start();
      setIsRecording(true);
    }
  };

  const stopRecording = () => {
    if (recognition) {
      recognition.stop();
      setRecognition(null);
      setIsRecording(false);
    }
  };

  const handleClear = () => {
    stopRecording(); // Stop recording before clearing
    onClear();
  };

  const buttonVariants = {
    hover: { scale: 1.1 },
    press: { scale: 0.9 }
  };

  return (
    <div style={{ display: 'flex', gap: '10px', marginTop: '15px' }}>
      <motion.button
        onClick={toggleRecording}
        className="icon-button"
        variants={buttonVariants}
        whileHover="hover"
        whileTap="press"
      >
        {isRecording ? <CiPause1 /> : <CiMicrophoneOn />}
      </motion.button>

      {!isRecording && (
        <motion.button
          onClick={handleClear}
          className="icon-button"
          variants={buttonVariants}
          whileHover="hover"
          whileTap="press"
        >
          <BsArrowRepeat />
        </motion.button>
      )}
    </div>
  );
};

export default SpeechToText;
