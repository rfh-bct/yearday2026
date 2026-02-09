import React, { useState, useEffect } from 'react';
import { PageData } from './pageContent';

interface PageProps {
  pageId: number;
  pageData: PageData;
}

function Page({ pageId, pageData }: PageProps) {
  const [inputValue, setInputValue] = useState('');
  const [showText, setShowText] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [displayContent, setDisplayContent] = useState('');
  
  // Timer states for page 3
  const [countdown, setCountdown] = useState(0);
  const [timerStarted, setTimerStarted] = useState(false);
  const [timerFinished, setTimerFinished] = useState(false);

  const handleUnlock = () => {
    // Trim and compare answers case-insensitively
    const userAnswer = inputValue.trim().toLowerCase();

    // Check if this page has multiple answers
    if (pageData.answers) {
      // Check if the user's answer matches any of the multiple answers
      const matchedAnswer = Object.keys(pageData.answers).find(
        key => key.toLowerCase() === userAnswer
      );
      
      if (matchedAnswer) {
        setDisplayContent(pageData.answers[matchedAnswer]);
        setShowText(true);
        setErrorMessage('');
      } else {
        setErrorMessage('Forkert svar. Prøv igen.');
        setInputValue(''); // Clear the input field
      }
    } else if (pageData.answer && pageData.content) {
      // Single answer page (backward compatibility)
      const correctAnswer = pageData.answer.trim().toLowerCase();
      if (userAnswer === correctAnswer) {
        setDisplayContent(pageData.content);
        setShowText(true);
        setErrorMessage('');
      } else {
        setErrorMessage('Forkert svar. Prøv igen.');
        setInputValue(''); // Clear the input field
      }
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleUnlock();
    }
  };

  // Timer countdown effect for page 3
  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | null = null;
    
    if (timerStarted && countdown > 0) {
      interval = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) {
            setTimerFinished(true);
            setTimerStarted(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [timerStarted, countdown]);

  const handleStartTimer = () => {
    const seconds = pageData.timerSeconds || 0;
    if (seconds > 0) {
      setCountdown(seconds);
      setTimerStarted(true);
      setTimerFinished(false);
    }
  };

  // For page 3, show timer UI before showing input field
  const isPage3 = pageId === 3;
  const showTimerUI = isPage3 && !timerFinished;
  const showInputField = !isPage3 || timerFinished;

  return (
    <div className="app">
      <div className="container">
        {!showText ? (
          <>
            {showTimerUI ? (
              <div className="timer-container">
                {!timerStarted ? (
                  <>
                    <div className="timer-text">
                      <p>{pageData.timerButtonText || 'Inden du for næste gåde synes jeg lige du skal have en pause og lige sidde og slappe af i 20 sekunder.'}</p>
                      <p>Tryk på knappen neden under og tag nogle dybe vejrtrækninger</p>
                    </div>
                    <button onClick={handleStartTimer} className="timer-button">
                      Start Timer
                    </button>
                  </>
                ) : (
                  <div className="countdown-display">
                    <div className="countdown-number">{countdown}</div>
                    <div className="countdown-label">sekunder</div>
                  </div>
                )}
              </div>
            ) : showInputField ? (
              <div className="input-container">
                <div className="question-container">
                  <h2 className="question-text">{pageData.question}</h2>
                </div>
                <input
                  type="text"
                  value={inputValue}
                  placeholder="Skriv dit svar her..."
                  onChange={(e) => {
                    setInputValue(e.target.value);
                    setErrorMessage(''); // Clear error when user types
                  }}
                  onKeyPress={handleKeyPress}
                  className={`input-field ${errorMessage ? 'input-error' : ''}`}
                />
                {errorMessage && (
                  <div className="error-message">{errorMessage}</div>
                )}
                <button onClick={handleUnlock} className="unlock-button">
                  Lås op
                </button>
              </div>
            ) : null}
          </>
        ) : (
          <div className="text-display">
            <div dangerouslySetInnerHTML={{ __html: displayContent || pageData.content || '' }} />
          </div>
        )}
      </div>
    </div>
  );
}

export default Page;