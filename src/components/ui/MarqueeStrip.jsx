import React from "react";
import { motion } from "framer-motion";

const SEPARATOR = " · ";

export const MarqueeStrip = ({
  texts = [],
  reverse = false,
  opacity = 0.06,
  fontSize = "clamp(3rem, 8vw, 7rem)",
  className = "",
}) => {
  const repeated = [...texts, ...texts, ...texts, ...texts];

  return (
    <div
      className={`w-full overflow-hidden pointer-events-none select-none ${className}`}
      aria-hidden="true"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
      >
        <div
          className={reverse ? "marquee-track-reverse" : "marquee-track"}
          style={{ opacity }}
        >
          {repeated.map((text, i) => (
            <span
              key={i}
              className="font-display whitespace-nowrap text-ink tracking-[-0.03em] pr-8"
              style={{ fontSize, lineHeight: 1 }}
            >
              {text}
              {i < repeated.length - 1 && (
                <span className="text-pass mx-4">{SEPARATOR}</span>
              )}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  );
};
