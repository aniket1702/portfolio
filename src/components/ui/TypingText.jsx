import React, { useState, useEffect } from "react";

export const TypingText = ({ phrases = [], speed = 55, pauseMs = 2400, deleteSpeed = 30 }) => {
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (!phrases.length) return;
    const current = phrases[phraseIdx];

    if (paused) {
      const t = setTimeout(() => { setPaused(false); setDeleting(true); }, pauseMs);
      return () => clearTimeout(t);
    }

    if (!deleting) {
      if (displayed.length < current.length) {
        const t = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), speed);
        return () => clearTimeout(t);
      } else {
        setPaused(true);
      }
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), deleteSpeed);
        return () => clearTimeout(t);
      } else {
        setDeleting(false);
        setPhraseIdx((phraseIdx + 1) % phrases.length);
      }
    }
  }, [displayed, deleting, paused, phraseIdx, phrases, speed, deleteSpeed, pauseMs]);

  return (
    <span aria-label={phrases[phraseIdx]} aria-live="polite">
      {displayed}
      <span className="typing-cursor" aria-hidden="true" />
    </span>
  );
};
